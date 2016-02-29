// modules/routes.js
import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './App'
import Home from './Views/Home'
import Showcase from './Views/Showcase'
import Donate from './Views/Donate'
import About from './Views/About'
import Contact from './Views/Contact'
import Join from './Views/Join'
import Profile from './User/Profile'


module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/showcase" component={Showcase}/>
    <Route path="/donate" component={Donate}/>
    <Route path="/about" component={About}/>
    <Route path="/contact" component={Contact}/>
    <Route path="/join" component={Join}/>
    <Route path="/profile" component={Profile}/>
  </Route>
)