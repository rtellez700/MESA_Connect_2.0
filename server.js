import express from 'express'
import path from 'path'
import compression from 'compression'
import React from 'react' // react import for server-side rendering
import { renderToString } from 'react-dom/server' // Use this to render our app to an HTML string
import { match, RouterContext } from 'react-router' // use to match URL to routes and then render
import routes from './src/modules/routes'

var app = express()

app.use(compression())

// serve our static stuff like index.css
app.use(express.static(path.join(__dirname,'public')))

// send all requests to index.html so browserHistory works
app.get('*', (req, res) => {
  match({ routes: routes, location: req.url }, (err, redirect, props) => {
    // in here we can make some decisions all at once
    if (err) {
      // there was an error somewhere during route matching
      res.status(500).send(err.message)
    } else if (redirect) {
      // we haven't talked about `onEnter` hooks on routes, but before a
      // route is entered, it can redirect. Here we handle on the server.
      res.redirect(redirect.pathname + redirect.search)
    } else if (props) {
      // if we got props then we matched a route and can render
      const appHtml = renderToString(<RouterContext {...props}/>)
      res.send(renderPage(appHtml))
    } else {
      // no errors, no redirect, we just didn't match anything
      res.status(404).send('Not Found')
    }
  })
})

function renderPage(appHtml) {
  return `
    <!doctype html public="storage">
    <html>
    <meta charset=utf-8/>
    <title>My Taco React Router App</title>
    <link rel="stylesheet" type="text/css" href="/main.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0-beta1/jquery.min.js"/>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-alpha/js/bootstrap.min.js"/>
    <div id=app>${appHtml}</div>
    <script src="/bundle.js"></script>
   `
  }


var PORT = process.env.PORT || 3030
app.listen(PORT, function() {
  console.log('Production Express server running at localhost:' + PORT)
})