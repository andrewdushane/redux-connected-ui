(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-redux"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-redux"], factory);
	else if(typeof exports === 'object')
		exports["ReduxConnectedUi"] = factory(require("react"), require("react-redux"));
	else
		root["ReduxConnectedUi"] = factory(root["React"], root["ReactRedux"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_react_redux__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/ConnectAll.js":
/*!***************************!*\
  !*** ./src/ConnectAll.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.createConnectAll = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _actions = __webpack_require__(/*! ./actions */ \"./src/actions.js\");\n\nvar _constants = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar ConnectAll = function (_Component) {\n  _inherits(ConnectAll, _Component);\n\n  function ConnectAll() {\n    _classCallCheck(this, ConnectAll);\n\n    return _possibleConstructorReturn(this, (ConnectAll.__proto__ || Object.getPrototypeOf(ConnectAll)).apply(this, arguments));\n  }\n\n  _createClass(ConnectAll, [{\n    key: \"componentWillMount\",\n    value: function componentWillMount() {\n      this.props.initialize();\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _props = this.props,\n          children = _props.children,\n          updateValues = _props.updateValues,\n          resetValues = _props.resetValues,\n          values = _props.values;\n\n\n      return _react2.default.createElement(\n        _react.Fragment,\n        null,\n        children({\n          updateValues: updateValues,\n          resetValues: resetValues,\n          values: values\n        })\n      );\n    }\n  }]);\n\n  return ConnectAll;\n}(_react.Component);\n\nvar defaultInitialValues = {};\n\nvar mapStateToProps = function mapStateToProps() {\n  var storeLocation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _constants.defaultStoreLocation;\n  return function (state, _ref) {\n    var namespace = _ref.namespace,\n        _ref$initialValues = _ref.initialValues,\n        initialValues = _ref$initialValues === undefined ? defaultInitialValues : _ref$initialValues;\n    return {\n      values: state[storeLocation][namespace] ? state[storeLocation][namespace].values : initialValues\n    };\n  };\n};\n\nvar dispatchProps = {\n  initializeValuesAction: _actions.initializeValues,\n  updateValuesAction: _actions.updateValues,\n  resetValuesAction: _actions.resetValues\n};\n\nvar mergeProps = function mergeProps(_ref2, _ref3, _ref4) {\n  var values = _ref2.values;\n  var initializeValuesAction = _ref3.initializeValuesAction,\n      updateValuesAction = _ref3.updateValuesAction,\n      resetValuesAction = _ref3.resetValuesAction;\n  var initialValues = _ref4.initialValues,\n      namespace = _ref4.namespace,\n      children = _ref4.children;\n  return {\n    initialize: function initialize() {\n      initializeValuesAction({\n        namespace: namespace,\n        values: initialValues\n      });\n    },\n    updateValues: function updateValues(updateFn) {\n      updateValuesAction({ namespace: namespace, values: updateFn(values) });\n    },\n    resetValues: function resetValues() {\n      resetValuesAction({ namespace: namespace });\n    },\n    values: values,\n    children: children\n  };\n};\n\nvar createConnectAll = exports.createConnectAll = function createConnectAll(storeLocation) {\n  return (0, _reactRedux.connect)(mapStateToProps(storeLocation), dispatchProps, mergeProps)(ConnectAll);\n};\n\nexports.default = createConnectAll();\n\n//# sourceURL=webpack://ReduxConnectedUi/./src/ConnectAll.js?");

/***/ }),

/***/ "./src/Connected.js":
/*!**************************!*\
  !*** ./src/Connected.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.createConnected = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _actions = __webpack_require__(/*! ./actions */ \"./src/actions.js\");\n\nvar _constants = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Connected = function (_Component) {\n  _inherits(Connected, _Component);\n\n  function Connected() {\n    _classCallCheck(this, Connected);\n\n    return _possibleConstructorReturn(this, (Connected.__proto__ || Object.getPrototypeOf(Connected)).apply(this, arguments));\n  }\n\n  _createClass(Connected, [{\n    key: \"componentWillMount\",\n    value: function componentWillMount() {\n      this.props.initialize();\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _props = this.props,\n          children = _props.children,\n          updateValue = _props.updateValue,\n          updateValues = _props.updateValues,\n          resetValue = _props.resetValue,\n          resetValues = _props.resetValues,\n          handleInputChange = _props.handleInputChange,\n          value = _props.value;\n\n\n      return _react2.default.createElement(\n        _react.Fragment,\n        null,\n        children({\n          updateValue: updateValue,\n          updateValues: updateValues,\n          resetValue: resetValue,\n          resetValues: resetValues,\n          handleInputChange: handleInputChange,\n          value: value\n        })\n      );\n    }\n  }]);\n\n  return Connected;\n}(_react.Component);\n\nvar mapStateToProps = function mapStateToProps() {\n  var storeLocation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _constants.defaultStoreLocation;\n  return function (state, _ref) {\n    var namespace = _ref.namespace,\n        subscription = _ref.subscription,\n        initialValue = _ref.initialValue;\n    return {\n      values: state[storeLocation][namespace] ? state[storeLocation][namespace].values : _defineProperty({}, subscription, initialValue)\n    };\n  };\n};\n\nvar dispatchProps = {\n  initializeValueAction: _actions.initializeValue,\n  updateValueAction: _actions.updateValue,\n  updateValuesAction: _actions.updateValues,\n  resetValueAction: _actions.resetValue,\n  resetValuesAction: _actions.resetValues\n};\n\nvar mergeProps = function mergeProps(_ref3, _ref4, _ref5) {\n  var values = _ref3.values;\n  var initializeValueAction = _ref4.initializeValueAction,\n      updateValueAction = _ref4.updateValueAction,\n      updateValuesAction = _ref4.updateValuesAction,\n      resetValueAction = _ref4.resetValueAction,\n      resetValuesAction = _ref4.resetValuesAction;\n  var initialValue = _ref5.initialValue,\n      namespace = _ref5.namespace,\n      subscription = _ref5.subscription,\n      children = _ref5.children;\n  return {\n    initialize: function initialize() {\n      initializeValueAction({\n        namespace: namespace,\n        key: subscription,\n        value: initialValue\n      });\n    },\n    updateValue: function updateValue(value) {\n      updateValueAction({ namespace: namespace, key: subscription, value: value });\n    },\n    updateValues: function updateValues(updateFn) {\n      updateValuesAction({ namespace: namespace, values: updateFn(values) });\n    },\n    resetValue: function resetValue() {\n      resetValueAction({ namespace: namespace, key: subscription });\n    },\n    resetValues: function resetValues() {\n      resetValuesAction({ namespace: namespace });\n    },\n    handleInputChange: function handleInputChange(_ref6) {\n      var value = _ref6.target.value;\n\n      updateValueAction({ namespace: namespace, key: subscription, value: value });\n    },\n    value: values[subscription],\n    children: children\n  };\n};\n\nvar createConnected = exports.createConnected = function createConnected(storeLocation) {\n  return (0, _reactRedux.connect)(mapStateToProps(storeLocation), dispatchProps, mergeProps)(Connected);\n};\n\nexports.default = createConnected();\n\n//# sourceURL=webpack://ReduxConnectedUi/./src/Connected.js?");

/***/ }),

/***/ "./src/actionTypes.js":
/*!****************************!*\
  !*** ./src/actionTypes.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar LOCAL_STATE_NAMESPACE = \"@@REDUX_CONNECTED_UI\";\n\nvar createActionString = function createActionString(actionType) {\n  return LOCAL_STATE_NAMESPACE + \"-\" + actionType;\n};\n\nvar INITIALIZE_VALUES = exports.INITIALIZE_VALUES = createActionString(\"INITIALIZE_VALUES\");\nvar INITIALIZE_VALUE = exports.INITIALIZE_VALUE = createActionString(\"INITIALIZE_VALUE\");\nvar UPDATE_VALUE = exports.UPDATE_VALUE = createActionString(\"UPDATE_VALUE\");\nvar UPDATE_VALUES = exports.UPDATE_VALUES = createActionString(\"UPDATE_VALUES\");\nvar RESET_VALUE = exports.RESET_VALUE = createActionString(\"RESET_VALUE\");\nvar RESET_VALUES = exports.RESET_VALUES = createActionString(\"RESET_VALUES\");\n\n//# sourceURL=webpack://ReduxConnectedUi/./src/actionTypes.js?");

/***/ }),

/***/ "./src/actions.js":
/*!************************!*\
  !*** ./src/actions.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.resetValues = exports.resetValue = exports.updateValues = exports.updateValue = exports.initializeValue = exports.initializeValues = undefined;\n\nvar _actionTypes = __webpack_require__(/*! ./actionTypes */ \"./src/actionTypes.js\");\n\nvar createAction = function createAction(type) {\n  return function (payload) {\n    return {\n      type: type,\n      payload: payload\n    };\n  };\n};\n\nvar initializeValues = exports.initializeValues = createAction(_actionTypes.INITIALIZE_VALUES);\nvar initializeValue = exports.initializeValue = createAction(_actionTypes.INITIALIZE_VALUE);\nvar updateValue = exports.updateValue = createAction(_actionTypes.UPDATE_VALUE);\nvar updateValues = exports.updateValues = createAction(_actionTypes.UPDATE_VALUES);\nvar resetValue = exports.resetValue = createAction(_actionTypes.RESET_VALUE);\nvar resetValues = exports.resetValues = createAction(_actionTypes.RESET_VALUES);\n\n//# sourceURL=webpack://ReduxConnectedUi/./src/actions.js?");

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar defaultStoreLocation = exports.defaultStoreLocation = \"ui\";\n\n//# sourceURL=webpack://ReduxConnectedUi/./src/constants.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.connectedReducer = exports.createConnectAll = exports.createConnected = exports.ConnectAll = exports.Connected = undefined;\n\nvar _Connected = __webpack_require__(/*! ./Connected */ \"./src/Connected.js\");\n\nvar _Connected2 = _interopRequireDefault(_Connected);\n\nvar _ConnectAll = __webpack_require__(/*! ./ConnectAll */ \"./src/ConnectAll.js\");\n\nvar _ConnectAll2 = _interopRequireDefault(_ConnectAll);\n\nvar _reducer = __webpack_require__(/*! ./reducer */ \"./src/reducer.js\");\n\nvar _reducer2 = _interopRequireDefault(_reducer);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Connected = exports.Connected = _Connected2.default;\nvar ConnectAll = exports.ConnectAll = _ConnectAll2.default;\nvar createConnected = exports.createConnected = _Connected.createConnected;\nvar createConnectAll = exports.createConnectAll = _ConnectAll.createConnectAll;\nvar connectedReducer = exports.connectedReducer = _reducer2.default;\n\n//# sourceURL=webpack://ReduxConnectedUi/./src/index.js?");

/***/ }),

/***/ "./src/reducer.js":
/*!************************!*\
  !*** ./src/reducer.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _handlers;\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _actionTypes = __webpack_require__(/*! ./actionTypes */ \"./src/actionTypes.js\");\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar defaultState = {};\n\nvar defaultValues = {};\n\nvar handlers = (_handlers = {}, _defineProperty(_handlers, _actionTypes.INITIALIZE_VALUES, function (state, _ref) {\n  var _ref$payload = _ref.payload,\n      namespace = _ref$payload.namespace,\n      values = _ref$payload.values;\n  return _extends({}, state, _defineProperty({}, namespace, {\n    meta: {\n      initialValues: values\n    },\n    values: values\n  }));\n}), _defineProperty(_handlers, _actionTypes.INITIALIZE_VALUE, function (state, _ref2) {\n  var _ref2$payload = _ref2.payload,\n      namespace = _ref2$payload.namespace,\n      key = _ref2$payload.key,\n      value = _ref2$payload.value;\n\n  var currentInitialValues = state[namespace] && state[namespace].meta ? state[namespace].meta.initialValues : defaultValues;\n  var currentValues = state[namespace] && state[namespace].values || defaultValues;\n  return _extends({}, state, _defineProperty({}, namespace, {\n    meta: {\n      initialValues: _extends({}, currentInitialValues, _defineProperty({}, key, value))\n    },\n    values: _extends({}, currentValues, _defineProperty({}, key, value))\n  }));\n}), _defineProperty(_handlers, _actionTypes.UPDATE_VALUE, function (state, _ref3) {\n  var _ref3$payload = _ref3.payload,\n      namespace = _ref3$payload.namespace,\n      key = _ref3$payload.key,\n      value = _ref3$payload.value;\n  return _extends({}, state, _defineProperty({}, namespace, _extends({}, state[namespace], {\n    values: _extends({}, state[namespace].values, _defineProperty({}, key, value))\n  })));\n}), _defineProperty(_handlers, _actionTypes.UPDATE_VALUES, function (state, _ref4) {\n  var _ref4$payload = _ref4.payload,\n      namespace = _ref4$payload.namespace,\n      values = _ref4$payload.values;\n  return _extends({}, state, _defineProperty({}, namespace, _extends({}, state[namespace], {\n    values: _extends({}, state[namespace].values, values)\n  })));\n}), _defineProperty(_handlers, _actionTypes.RESET_VALUE, function (state, _ref5) {\n  var _ref5$payload = _ref5.payload,\n      namespace = _ref5$payload.namespace,\n      key = _ref5$payload.key;\n  return _extends({}, state, _defineProperty({}, namespace, _extends({}, state[namespace], {\n    values: _extends({}, state[namespace].values, _defineProperty({}, key, state[namespace].meta.initialValues[key]))\n  })));\n}), _defineProperty(_handlers, _actionTypes.RESET_VALUES, function (state, _ref6) {\n  var namespace = _ref6.payload.namespace;\n  return _extends({}, state, _defineProperty({}, namespace, _extends({}, state[namespace], {\n    values: state[namespace].meta.initialValues\n  })));\n}), _handlers);\n\nexports.default = function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;\n  var action = arguments[1];\n\n  if (handlers[action.type]) {\n    return handlers[action.type](state, action);\n  }\n  return state;\n};\n\n//# sourceURL=webpack://ReduxConnectedUi/./src/reducer.js?");

/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react__;\n\n//# sourceURL=webpack://ReduxConnectedUi/external_%7B%22root%22:%22React%22,%22commonjs2%22:%22react%22,%22commonjs%22:%22react%22,%22amd%22:%22react%22%7D?");

/***/ }),

/***/ "react-redux":
/*!*************************************************************************************************************!*\
  !*** external {"root":"ReactRedux","commonjs2":"react-redux","commonjs":"react-redux","amd":"react-redux"} ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react_redux__;\n\n//# sourceURL=webpack://ReduxConnectedUi/external_%7B%22root%22:%22ReactRedux%22,%22commonjs2%22:%22react-redux%22,%22commonjs%22:%22react-redux%22,%22amd%22:%22react-redux%22%7D?");

/***/ })

/******/ });
});