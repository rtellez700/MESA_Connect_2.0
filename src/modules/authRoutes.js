// modules/routes.js
import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './App'
import Home from './Components/Views/Home'
import Showcase from './Components/Views/Showcase'
import Donate from './Components/Views/Donate'
import About from './Components/Views/About'
import Contact from './Components/Views/Contact'
import Join from './Components/Views/Join'

import User from './Components/User/User'
import Profile from './Components/User/Profile'
import Dashboard from './Components/User/Dashboard'


module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/showcase" component={Showcase}/>
    <Route path="/donate" component={Donate}/>
    <Route path="/about" component={About}/>
    <Route path="/contact" component={Contact}/>
    <Route path="/join" component={Join}/>
    <Route path="/profile" component={Profile}/>
    <Route path="/user" component={User}>
    	<IndexRoute component={Dashboard} />
    	<Route path="dashboard" component={Dashboard} />
    </Route>
  </Route>
)