import express from 'express'
import path from 'path'
import compression from 'compression'
import React from 'react' // react import for server-side rendering
import { renderToString } from 'react-dom/server' // Use this to render our app to an HTML string
import { match, RouterContext } from 'react-router' // use to match URL to routes and then render
import routes from './src/modules/routes'

var app = express()

app.use(compression())

app.use(express.static(path.join(__dirname,'public')))

// send all requests to index.html so browserHistory works
app.get('*', (req, res) => {
  match({ routes: routes, location: req.url }, (err, redirect, props) => {
    if (err) {
      // there was an error somewhere during route matching
      res.status(500).send(err.message)
    } else if (redirect) {
      // handle on the server.
      res.redirect(redirect.pathname + redirect.search)
    } else if (props) {
      // if we got props then we matched a route and can render
      const appHtml = renderToString(<RouterContext {...props}/>)
      res.send(renderPage(appHtml))
    } else {
      res.status(404).send('Not Found')
    }
  })
})

function renderPage(appHtml) {
  return `
    <!doctype html public="storage">
    <html>
    <meta charset=utf-8/>
    <title>MESA Connect App</title>
    <link rel="stylesheet" type="text/css" href="/main.css">
    <div id=app>${appHtml}</div>
    <script src="/bundle.js"></script>
   `
}


var PORT = process.env.PORT || 3030
app.listen(PORT, function() {
  console.log('Production Express server running at localhost:' + PORT)
})