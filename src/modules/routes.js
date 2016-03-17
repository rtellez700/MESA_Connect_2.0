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

import Sidebar from './Components/Views/Sidebar'

// USER
import User from './Components/User/User'
import Profile from './Components/User/Profile'
import Dashboard from './Components/User/Dashboard'
import Settings from './Components/User/Settings'
import Logout from './Components/User/Logout'

// USER Views
import Resources from './Components/User/Views/Resources'
import ListResources from './Components/User/Views/ListResources'
import Network from './Components/User/Views/Resources/Network'
import Scholarships from './Components/User/Views/Resources/Scholarships'
import Internships from './Components/User/Views/Resources/Internships'
import Events from './Components/User/Views/Resources/Events'

// INBOX
import MailBox from './Components/Mail/MailBox'

/*
    '/' ==> can be used without its parents' name as base url

    ROUTE FOR --> sjdcmesa.com/user/:id/<-profile->
        <Route path="/profile" component={Profile} />
 */

module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="showcase" component={Showcase} />
    <Route path="donate" component={Donate} />
    <Route path="about" component={About} />
    <Route path="contact" component={Contact} />
    <Route path="join" component={Join} />
    <Route path="user" components={{ MAIN: User, SIDEBAR: Sidebar }} >
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/mail" component={MailBox} />
        <Route path="/resources" component={Resources}>
            <IndexRoute component={ListResources} />
            <Route path="network" component={Network} />
            <Route path="scholarships" component={Scholarships} />
            <Route path="internships" component={Internships} />
            <Route path="events" component={Events} />
        </Route>
        <Route path="/settings" component={Settings} />
        <Route path="/logout" component={Logout} />
    </Route>
    <Route path="*" component={NoMatch_404} />
  </Route>
)