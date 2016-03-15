import express from 'express'
import path from 'path'
import compression from 'compression'
import React from 'react' // react import for server-side rendering
import { renderToString } from 'react-dom/server' // Use this to render our app to an HTML string
import { match, RouterContext } from 'react-router' // use to match URL to routes and then render
import routes from './src/modules/routes'
import bodyParser from 'body-parser'

import mysql from 'mysql'

import config from './config'
import API from './api/API'

var app = express()

app.use(compression());
app.use(express.static(path.join(__dirname,'public')));

app.use('/api/', API);

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
      <!DOCTYPE html>
        <html lang="en">

        <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>MESA Connect</title>

        <link href='https://fonts.googleapis.com/css?family=Lato:300' rel='stylesheet' type='text/css'>
        <link rel="stylesheet" href="/main.css" />
        <link rel="shortcut icon" type="image/x-icon" href="favicon.ico">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">

        </head>
          <body>
            <div id="App">${appHtml}</div>

            <script src="/bundle.js" defer></script>
          </body>
      </html>
   `;

}


var PORT = process.env.PORT || 3030
app.listen(PORT, function() {
  console.log('Production Express server running at localhost:' + PORT)
})