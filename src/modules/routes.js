// modules/routes.js
import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './App'

import NoMatch_404 from './Components/Views/NoMatch_404'

// VIEWS
import Home from './Components/Views/Home'
import Showcase from './Components/Views/Showcase'
import Donate from './Components/Views/Donate'
import About from './Components/Views/About'
import Contact from './Components/Views/Contact'
import Join from './Components/Views/Join'


// USER
import User from './Components/User/User'
import Profile from './Components/User/Profile'
import Dashboard from './Components/User/Dashboard'
import Network from './Components/User/Network'

// USER Views
import Resources from './Components/User/Views/Resources'
import ListResources from './Components/User/Views/ListResources'

// INBOX
import Inbox from './Components/Mail/Inbox'

/*
    '/' ==> can be used without its parents' name as base url
 */

module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="showcase" component={Showcase}/>
    <Route path="donate" component={Donate}/>
    <Route path="about" component={About}/>
    <Route path="contact" component={Contact}/>
    <Route path="join" component={Join}/>
    <Route path="user" component={User}>
        <Route path="/inbox" component={Inbox} />
        <Route path="/profile" component={Profile} />
        <Route path="/resources" component={Resources}>
            <IndexRoute component={ListResources} />
            <Route path="network" component={Network} />
        </Route>
        <Route path="/dashboard" component={Dashboard} />
    </Route>
    <Route path="*" component={NoMatch_404} />
  </Route>
)