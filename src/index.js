import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
window.jQuery = window.$ = require('jquery');
require('./js/bootstrap.min.js')
require('./styles/app.scss')

import routes from './modules/routes'


render (
	<Router routes={routes} history={browserHistory}/>,
	document.getElementById('App')
);