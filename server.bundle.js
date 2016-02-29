/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';

	var _express = __webpack_require__(1);

	var _express2 = _interopRequireDefault(_express);

	var _path = __webpack_require__(2);

	var _path2 = _interopRequireDefault(_path);

	var _compression = __webpack_require__(3);

	var _compression2 = _interopRequireDefault(_compression);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _server = __webpack_require__(5);

	var _reactRouter = __webpack_require__(6);

	var _routes = __webpack_require__(7);

	var _routes2 = _interopRequireDefault(_routes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// Use this to render our app to an HTML string


	var app = (0, _express2.default)(); // use to match URL to routes and then render
	// react import for server-side rendering


	app.use((0, _compression2.default)());

	// serve our static stuff like index.css
	app.use(_express2.default.static(_path2.default.join(__dirname, 'public')));

	// send all requests to index.html so browserHistory works
	app.get('*', function (req, res) {
	  (0, _reactRouter.match)({ routes: _routes2.default, location: req.url }, function (err, redirect, props) {
	    // in here we can make some decisions all at once
	    if (err) {
	      // there was an error somewhere during route matching
	      res.status(500).send(err.message);
	    } else if (redirect) {
	      // we haven't talked about `onEnter` hooks on routes, but before a
	      // route is entered, it can redirect. Here we handle on the server.
	      res.redirect(redirect.pathname + redirect.search);
	    } else if (props) {
	      // if we got props then we matched a route and can render
	      var appHtml = (0, _server.renderToString)(_react2.default.createElement(_reactRouter.RouterContext, props));
	      res.send(renderPage(appHtml));
	    } else {
	      // no errors, no redirect, we just didn't match anything
	      res.status(404).send('Not Found');
	    }
	  });
	});

	function renderPage(appHtml) {
	  return '\n    <!doctype html public="storage">\n    <html>\n    <meta charset=utf-8/>\n    <title>My Taco React Router App</title>\n    <link rel="stylesheet" type="text/css" href="/main.css">\n    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0-beta1/jquery.min.js"/>\n    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-alpha/js/bootstrap.min.js"/>\n    <div id=app>' + appHtml + '</div>\n    <script src="/bundle.js"></script>\n   ';
	}

	var PORT = process.env.PORT || 3030;
	app.listen(PORT, function () {
	  console.log('Production Express server running at localhost:' + PORT);
	});
	/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("compression");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("react-dom/server");

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("react-router");

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(6);

	var _App = __webpack_require__(8);

	var _App2 = _interopRequireDefault(_App);

	var _Home = __webpack_require__(11);

	var _Home2 = _interopRequireDefault(_Home);

	var _Join = __webpack_require__(12);

	var _Join2 = _interopRequireDefault(_Join);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = _react2.default.createElement(
	  _reactRouter.Route,
	  { path: '/', component: _App2.default },
	  _react2.default.createElement(_reactRouter.IndexRoute, { component: _Home2.default }),
	  _react2.default.createElement(_reactRouter.Route, { path: '/join', component: _Join2.default })
	); // modules/routes.js

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _NavBar = __webpack_require__(9);

	var _NavBar2 = _interopRequireDefault(_NavBar);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
	  displayName: 'App',
	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      { className: 'container-fluid' },
	      _react2.default.createElement(_NavBar2.default, null),
	      this.props.children
	    );
	  }
	});

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _NavLink = __webpack_require__(10);

	var _NavLink2 = _interopRequireDefault(_NavLink);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var NavBar = function (_React$Component) {
		_inherits(NavBar, _React$Component);

		function NavBar() {
			_classCallCheck(this, NavBar);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(NavBar).apply(this, arguments));
		}

		_createClass(NavBar, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'div',
					{ className: 'container-fluid' },
					_react2.default.createElement(
						'nav',
						{ className: 'navbar navbar-default navbar-fixed-top' },
						_react2.default.createElement(
							'div',
							{ className: 'container' },
							_react2.default.createElement(
								'div',
								{ className: 'navbar-header' },
								_react2.default.createElement(
									'button',
									{ type: 'button', className: 'navbar-toggle collapsed', 'data-toggle': 'collapse', 'data-target': '#MainNavbar', 'aria-expanded': 'false' },
									_react2.default.createElement(
										'span',
										{ className: 'sr-only' },
										'Toggle Navigation'
									),
									_react2.default.createElement('span', { className: 'icon-bar' }),
									_react2.default.createElement('span', { className: 'icon-bar' }),
									_react2.default.createElement('span', { className: 'icon-bar' })
								),
								_react2.default.createElement(
									'a',
									{ className: 'navbar-brand', href: '/' },
									_react2.default.createElement('img', { src: '/img/MESA-logo.jpg' })
								)
							),
							_react2.default.createElement(
								'div',
								{ className: 'collapse navbar-collapse main-navbar', id: 'MainNavbar' },
								_react2.default.createElement(
									'ul',
									{ className: 'nav navbar-nav' },
									_react2.default.createElement(
										'li',
										null,
										_react2.default.createElement(
											_NavLink2.default,
											{ to: '/', onlyActiveOnIndex: true },
											'Home'
										)
									),
									_react2.default.createElement(
										'li',
										null,
										_react2.default.createElement(
											_NavLink2.default,
											{ to: '/showcase' },
											'Our Students'
										)
									),
									_react2.default.createElement(
										'li',
										null,
										_react2.default.createElement(
											_NavLink2.default,
											{ to: '/donate' },
											'Donate'
										)
									),
									_react2.default.createElement(
										'li',
										null,
										_react2.default.createElement(
											_NavLink2.default,
											{ to: '/about' },
											'About'
										)
									),
									_react2.default.createElement(
										'li',
										null,
										_react2.default.createElement(
											_NavLink2.default,
											{ to: '/contact' },
											'Contact'
										)
									),
									_react2.default.createElement(
										'li',
										null,
										_react2.default.createElement(
											_NavLink2.default,
											{ to: '/join' },
											'Join'
										)
									)
								)
							)
						)
					)
				);
			}
		}]);

		return NavBar;
	}(_react2.default.Component);

	module.exports = NavBar;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(6);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var NavLink = function (_React$Component) {
		_inherits(NavLink, _React$Component);

		function NavLink() {
			_classCallCheck(this, NavLink);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(NavLink).apply(this, arguments));
		}

		_createClass(NavLink, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(_reactRouter.Link, _extends({}, this.props, { activeClassName: 'active' }));
			}
		}]);

		return NavLink;
	}(_react2.default.Component);

	module.exports = NavLink;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Home = function (_React$Component) {
		_inherits(Home, _React$Component);

		function Home() {
			_classCallCheck(this, Home);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(Home).apply(this, arguments));
		}

		_createClass(Home, [{
			key: "render",
			value: function render() {
				return _react2.default.createElement(
					"div",
					{ className: "conatiner-fluid" },
					_react2.default.createElement("img", { src: "http://placehold.it/2500x1000" }),
					_react2.default.createElement(
						"div",
						{ className: "container-fluid grid__container--bg-white" },
						_react2.default.createElement(
							"div",
							{ className: "container grid__wrapper" },
							_react2.default.createElement(
								"div",
								{ className: "row" },
								_react2.default.createElement(
									"div",
									{ className: "col-md-4" },
									_react2.default.createElement(
										"div",
										{ className: "thumbnail" },
										_react2.default.createElement("img", { src: "http://placehold.it/240x200", alt: "" }),
										_react2.default.createElement(
											"div",
											{ className: "caption" },
											_react2.default.createElement(
												"h3",
												null,
												"Thumbnail Label"
											),
											_react2.default.createElement(
												"p",
												null,
												"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
											)
										)
									)
								),
								_react2.default.createElement(
									"div",
									{ className: "col-md-4" },
									_react2.default.createElement(
										"div",
										{ className: "thumbnail" },
										_react2.default.createElement("img", { src: "http://placehold.it/240x200", alt: "" }),
										_react2.default.createElement(
											"div",
											{ className: "caption" },
											_react2.default.createElement(
												"h3",
												null,
												"Thumbnail Label"
											),
											_react2.default.createElement(
												"p",
												null,
												"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
											)
										)
									)
								),
								_react2.default.createElement(
									"div",
									{ className: "col-md-4" },
									_react2.default.createElement(
										"div",
										{ className: "thumbnail" },
										_react2.default.createElement("img", { src: "http://placehold.it/240x200", alt: "" }),
										_react2.default.createElement(
											"div",
											{ className: "caption" },
											_react2.default.createElement(
												"h3",
												null,
												"Thumbnail Label"
											),
											_react2.default.createElement(
												"p",
												null,
												"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
											)
										)
									)
								)
							),
							_react2.default.createElement("div", { id: "Example" })
						)
					)
				);
			}
		}]);

		return Home;
	}(_react2.default.Component);

	module.exports = Home;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _FormBox = __webpack_require__(13);

	var _FormBox2 = _interopRequireDefault(_FormBox);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Join = function (_React$Component) {
		_inherits(Join, _React$Component);

		function Join() {
			_classCallCheck(this, Join);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(Join).apply(this, arguments));
		}

		_createClass(Join, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'div',
					{ className: 'container-fluid' },
					_react2.default.createElement(
						'div',
						{ className: 'grid__wrapper' },
						_react2.default.createElement(_FormBox2.default, null)
					)
				);
			}
		}]);

		return Join;
	}(_react2.default.Component);

	module.exports = Join;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _FormList = __webpack_require__(14);

	var _FormList2 = _interopRequireDefault(_FormList);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var data = [{ id: 'f_name', title: 'First Name', placeholder: 'First Name' }, { id: 'l_name', title: 'Last Name', placeholder: 'Last Name' }, { id: 'e_mail', title: 'Email', placeholder: 'E.g., email@gmail.com' }, { id: "delta_id", title: 'Delta ID *(optional)', placeholder: '98-XXX-XXX' }, { id: 'dob', title: 'Date of Birth', placeholder: '' }, { id: 'years_in_mesa', title: 'Years In MESA', placeholder: '' }];

	var FormBox = function (_React$Component) {
		_inherits(FormBox, _React$Component);

		function FormBox() {
			_classCallCheck(this, FormBox);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(FormBox).apply(this, arguments));
		}

		_createClass(FormBox, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'div',
					{ className: 'FormBox container well' },
					_react2.default.createElement(
						'form',
						null,
						_react2.default.createElement(_FormList2.default, { data: data }),
						_react2.default.createElement(
							'button',
							{ type: 'submit', className: 'btn btn-primary pull-right' },
							'NEXT!'
						)
					)
				);
			}
		}]);

		return FormBox;
	}(_react2.default.Component);

	module.exports = FormBox;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _FormItem = __webpack_require__(15);

	var _FormItem2 = _interopRequireDefault(_FormItem);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var FormList = function (_React$Component) {
		_inherits(FormList, _React$Component);

		function FormList() {
			_classCallCheck(this, FormList);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(FormList).apply(this, arguments));
		}

		_createClass(FormList, [{
			key: 'render',
			value: function render() {
				var formItemNodes = this.props.data.map(function (formItem) {
					return _react2.default.createElement(
						'div',
						{ className: 'form-group' },
						_react2.default.createElement(_FormItem2.default, { itemId: formItem.id, title: formItem.title, placeholder: formItem.placeholder, key: formItem.id })
					);
				});
				return _react2.default.createElement(
					'div',
					{ className: 'FormList' },
					formItemNodes
				);
			}
		}]);

		return FormList;
	}(_react2.default.Component);

	module.exports = FormList;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var FormItem = function (_React$Component) {
		_inherits(FormItem, _React$Component);

		function FormItem() {
			_classCallCheck(this, FormItem);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(FormItem).apply(this, arguments));
		}

		_createClass(FormItem, [{
			key: "render",
			value: function render() {
				return _react2.default.createElement(
					"div",
					{ className: "FormItem" },
					_react2.default.createElement(
						"label",
						{ htmlFor: this.props.itemId },
						this.props.title
					),
					_react2.default.createElement("input", { type: "text", className: "form-control input-lg", id: this.props.itemId, placeholder: this.props.placeholder })
				);
			}
		}]);

		return FormItem;
	}(_react2.default.Component);

	module.exports = FormItem;

/***/ }
/******/ ]);