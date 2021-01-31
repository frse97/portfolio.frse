module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_components_Device_PortfolioDevice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/Device/PortfolioDevice */ "./src/components/Device/PortfolioDevice.tsx");
/* harmony import */ var _src_components_Screen_PowerScreen_PowerScreen__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/Screen/PowerScreen/PowerScreen */ "./src/components/Screen/PowerScreen/PowerScreen.tsx");
/* harmony import */ var _src_components_Screen_CodeTypingScreen_CodeTypingScreen__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/components/Screen/CodeTypingScreen/CodeTypingScreen */ "./src/components/Screen/CodeTypingScreen/CodeTypingScreen.tsx");


var _jsxFileName = "C:\\Users\\FRSE\\Development\\private\\portfolio.frse\\pages\\index.tsx";






const App = () => {
  const {
    0: mode,
    1: setMode
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('off');

  const handleStartMode = () => {
    mode === 'off' ? setMode('on') : setMode('off');
  };

  const portfolioContentClassName = classnames__WEBPACK_IMPORTED_MODULE_2___default()("portfolio-content", mode === 'on' ? 'power-start' : '');
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_Device_PortfolioDevice__WEBPACK_IMPORTED_MODULE_3__["default"], {
    screenContent: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_Screen_CodeTypingScreen_CodeTypingScreen__WEBPACK_IMPORTED_MODULE_5__["default"], {
        mode: mode
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_Screen_PowerScreen_PowerScreen__WEBPACK_IMPORTED_MODULE_4__["default"], {
        handleMode: handleStartMode
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: portfolioContentClassName
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, undefined)]
    }, void 0, true)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/components/Device/PCDevice/PCDevice.tsx":
/*!*****************************************************!*\
  !*** ./src/components/Device/PCDevice/PCDevice.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PortfolioPCStandingPart_PortolioPCStandingPart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PortfolioPCStandingPart/PortolioPCStandingPart */ "./src/components/Device/PCDevice/PortfolioPCStandingPart/PortolioPCStandingPart.tsx");
/* harmony import */ var _Shared_PortfolioScreen_PortfolioScreen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Shared/PortfolioScreen/PortfolioScreen */ "./src/components/Device/Shared/PortfolioScreen/PortfolioScreen.tsx");
/* harmony import */ var _PCDevice_PortfolioPCCoffeMug_PortfolioPCCoffeMug__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../PCDevice/PortfolioPCCoffeMug/PortfolioPCCoffeMug */ "./src/components/Device/PCDevice/PortfolioPCCoffeMug/PortfolioPCCoffeMug.tsx");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../model */ "./src/model.ts");

var _jsxFileName = "C:\\Users\\FRSE\\Development\\private\\portfolio.frse\\src\\components\\Device\\PCDevice\\PCDevice.tsx";






const PCDevice = props => {
  const {
    screenContent
  } = props;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "portfolio-pc-device-wrapper",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Shared_PortfolioScreen_PortfolioScreen__WEBPACK_IMPORTED_MODULE_3__["default"], {
      currentScreenContent: screenContent,
      currentDevice: _model__WEBPACK_IMPORTED_MODULE_5__["PortfolioDevices"].DESKTOP
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_PortfolioPCStandingPart_PortolioPCStandingPart__WEBPACK_IMPORTED_MODULE_2__["PCDeviceStandingPartMiddle"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_PortfolioPCStandingPart_PortolioPCStandingPart__WEBPACK_IMPORTED_MODULE_2__["PCDeviceStandingPartBottom1"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_PortfolioPCStandingPart_PortolioPCStandingPart__WEBPACK_IMPORTED_MODULE_2__["PCDeviceStandingPartBottom2"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_PCDevice_PortfolioPCCoffeMug_PortfolioPCCoffeMug__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(PCDevice));

/***/ }),

/***/ "./src/components/Device/PCDevice/PortfolioPCCoffeMug/PortfolioPCCoffeMug.tsx":
/*!************************************************************************************!*\
  !*** ./src/components/Device/PCDevice/PortfolioPCCoffeMug/PortfolioPCCoffeMug.tsx ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\FRSE\\Development\\private\\portfolio.frse\\src\\components\\Device\\PCDevice\\PortfolioPCCoffeMug\\PortfolioPCCoffeMug.tsx";


const PortfolioPCCoffeMug = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "pc-device-coffe-mug",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "pc-device-coffe-circle",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "pc-device-coffe-liquid"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 7
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "pc-device-coffe-handle"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 10
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(PortfolioPCCoffeMug));

/***/ }),

/***/ "./src/components/Device/PCDevice/PortfolioPCStandingPart/PortolioPCStandingPart.tsx":
/*!*******************************************************************************************!*\
  !*** ./src/components/Device/PCDevice/PortfolioPCStandingPart/PortolioPCStandingPart.tsx ***!
  \*******************************************************************************************/
/*! exports provided: PCDeviceStandingPartMiddle, PCDeviceStandingPartBottom1, PCDeviceStandingPartBottom2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PCDeviceStandingPartMiddle", function() { return PCDeviceStandingPartMiddle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PCDeviceStandingPartBottom1", function() { return PCDeviceStandingPartBottom1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PCDeviceStandingPartBottom2", function() { return PCDeviceStandingPartBottom2; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\FRSE\\Development\\private\\portfolio.frse\\src\\components\\Device\\PCDevice\\PortfolioPCStandingPart\\PortolioPCStandingPart.tsx";

const PCDeviceStandingPartMiddle = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "pc-device-middle-standing"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 10
  }, undefined);
};
const PCDeviceStandingPartBottom1 = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "pc-device-standing-part1"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 10
  }, undefined);
};
const PCDeviceStandingPartBottom2 = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "pc-device-standing-part2"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 10
  }, undefined);
};

/***/ }),

/***/ "./src/components/Device/PortfolioDevice.tsx":
/*!***************************************************!*\
  !*** ./src/components/Device/PortfolioDevice.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model */ "./src/model.ts");
/* harmony import */ var _PCDevice_PCDevice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PCDevice/PCDevice */ "./src/components/Device/PCDevice/PCDevice.tsx");


var _jsxFileName = "C:\\Users\\FRSE\\Development\\private\\portfolio.frse\\src\\components\\Device\\PortfolioDevice.tsx";




const PortfolioDevice = props => {
  const {
    screenContent
  } = props;
  const {
    0: currentDevice,
    1: setCurrentDevice
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(_model__WEBPACK_IMPORTED_MODULE_2__["PortfolioDevices"].DESKTOP);
  let displayedDevice = undefined;

  switch (currentDevice) {
    case _model__WEBPACK_IMPORTED_MODULE_2__["PortfolioDevices"].DESKTOP:
      displayedDevice = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_PCDevice_PCDevice__WEBPACK_IMPORTED_MODULE_3__["default"], {
        screenContent: screenContent
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 25
      }, undefined);
      break;

    case _model__WEBPACK_IMPORTED_MODULE_2__["PortfolioDevices"].TABLET:
      displayedDevice = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: "TabletDevice"
      }, void 0, false);
      break;

    case _model__WEBPACK_IMPORTED_MODULE_2__["PortfolioDevices"].MOBILE:
      displayedDevice = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: "MobileDevice"
      }, void 0, false);
      break;
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "portfolio-device-wrapper",
    children: displayedDevice
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 10
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(PortfolioDevice));

/***/ }),

/***/ "./src/components/Device/Shared/PortfolioScreen/PortfolioScreen.tsx":
/*!**************************************************************************!*\
  !*** ./src/components/Device/Shared/PortfolioScreen/PortfolioScreen.tsx ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\FRSE\\Development\\private\\portfolio.frse\\src\\components\\Device\\Shared\\PortfolioScreen\\PortfolioScreen.tsx";


const PortfolioScreen = props => {
  const {
    currentScreenContent
  } = props;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "pc-device-screen",
    children: currentScreenContent
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 11
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(PortfolioScreen));

/***/ }),

/***/ "./src/components/Screen/CodeTypingScreen/CodeTypingScreen.tsx":
/*!*********************************************************************!*\
  !*** ./src/components/Screen/CodeTypingScreen/CodeTypingScreen.tsx ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\FRSE\\Development\\private\\portfolio.frse\\src\\components\\Screen\\CodeTypingScreen\\CodeTypingScreen.tsx";



const CodeTypingScreen = props => {
  const {
    mode
  } = props;
  const classNames = classnames__WEBPACK_IMPORTED_MODULE_2___default()('typing-wrapper', mode === 'on' ? 'power-on' : 'power-off');
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: classNames,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "frse-portfolio"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(CodeTypingScreen));

/***/ }),

/***/ "./src/components/Screen/PowerScreen/PowerScreen.tsx":
/*!***********************************************************!*\
  !*** ./src/components/Screen/PowerScreen/PowerScreen.tsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\FRSE\\Development\\private\\portfolio.frse\\src\\components\\Screen\\PowerScreen\\PowerScreen.tsx";


const PowerScreen = props => {
  const {
    handleMode
  } = props;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "frse-portfolio-start",
    onClick: handleMode,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "frse-portfolio-power1"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "frse-portfolio-power2"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 10
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (PowerScreen);

/***/ }),

/***/ "./src/model.ts":
/*!**********************!*\
  !*** ./src/model.ts ***!
  \**********************/
/*! exports provided: PortfolioDevices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioDevices", function() { return PortfolioDevices; });
let PortfolioDevices;

(function (PortfolioDevices) {
  PortfolioDevices["DESKTOP"] = "DESKTOP";
  PortfolioDevices["TABLET"] = "TABLET";
  PortfolioDevices["MOBILE"] = "MOBILE";
})(PortfolioDevices || (PortfolioDevices = {}));

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0RldmljZS9QQ0RldmljZS9QQ0RldmljZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRGV2aWNlL1BDRGV2aWNlL1BvcnRmb2xpb1BDQ29mZmVNdWcvUG9ydGZvbGlvUENDb2ZmZU11Zy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRGV2aWNlL1BDRGV2aWNlL1BvcnRmb2xpb1BDU3RhbmRpbmdQYXJ0L1BvcnRvbGlvUENTdGFuZGluZ1BhcnQudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0RldmljZS9Qb3J0Zm9saW9EZXZpY2UudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0RldmljZS9TaGFyZWQvUG9ydGZvbGlvU2NyZWVuL1BvcnRmb2xpb1NjcmVlbi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU2NyZWVuL0NvZGVUeXBpbmdTY3JlZW4vQ29kZVR5cGluZ1NjcmVlbi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU2NyZWVuL1Bvd2VyU2NyZWVuL1Bvd2VyU2NyZWVuLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWwudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY2xhc3NuYW1lc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiQXBwIiwibW9kZSIsInNldE1vZGUiLCJ1c2VTdGF0ZSIsImhhbmRsZVN0YXJ0TW9kZSIsInBvcnRmb2xpb0NvbnRlbnRDbGFzc05hbWUiLCJjcyIsIlBDRGV2aWNlIiwicHJvcHMiLCJzY3JlZW5Db250ZW50IiwiUG9ydGZvbGlvRGV2aWNlcyIsIkRFU0tUT1AiLCJtZW1vIiwiUG9ydGZvbGlvUENDb2ZmZU11ZyIsIlBDRGV2aWNlU3RhbmRpbmdQYXJ0TWlkZGxlIiwiUENEZXZpY2VTdGFuZGluZ1BhcnRCb3R0b20xIiwiUENEZXZpY2VTdGFuZGluZ1BhcnRCb3R0b20yIiwiUG9ydGZvbGlvRGV2aWNlIiwiY3VycmVudERldmljZSIsInNldEN1cnJlbnREZXZpY2UiLCJkaXNwbGF5ZWREZXZpY2UiLCJ1bmRlZmluZWQiLCJUQUJMRVQiLCJNT0JJTEUiLCJQb3J0Zm9saW9TY3JlZW4iLCJjdXJyZW50U2NyZWVuQ29udGVudCIsIkNvZGVUeXBpbmdTY3JlZW4iLCJjbGFzc05hbWVzIiwiUG93ZXJTY3JlZW4iLCJoYW5kbGVNb2RlIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUNBO0FBQ0E7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QSxRQUFNbUIsVUFBVSxHQUFHckIsaURBQUUsQ0FBQyxnQkFBRCxFQUFtQkwsSUFBSSxLQUFLLElBQVQsR0FBZ0IsVUFBaEIsR0FBNkIsV0FBaEQsQ0FBckI7QUFFQSxzQkFDRTtBQUFLLGFBQVMsRUFBRTBCLFVBQWhCO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBS0QsQ0FWRDs7QUFZZWYsOEhBQUksQ0FBQ2MsZ0JBQUQsQ0FBbkIsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CQTs7QUFNQSxNQUFNRSxXQUFtQyxHQUFHcEIsS0FBSyxJQUFJO0FBQ25ELFFBQU07QUFBRXFCO0FBQUYsTUFBaUJyQixLQUF2QjtBQUVBLHNCQUFPO0FBQUssYUFBUyxFQUFDLHNCQUFmO0FBQXNDLFdBQU8sRUFBRXFCLFVBQS9DO0FBQUEsNEJBQ0w7QUFBSyxlQUFTLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURLLGVBRUw7QUFBSyxlQUFTLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBSUQsQ0FQRDs7QUFTZUQsMEVBQWYsRTs7Ozs7Ozs7Ozs7O0FDZkE7QUFBQTtBQUFPLElBQUtsQixnQkFBWjs7V0FBWUEsZ0I7QUFBQUEsa0I7QUFBQUEsa0I7QUFBQUEsa0I7R0FBQUEsZ0IsS0FBQUEsZ0I7Ozs7Ozs7Ozs7O0FDQVosdUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LnRzeFwiKTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgUG9ydGZvbGlvRGV2aWNlIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL0RldmljZS9Qb3J0Zm9saW9EZXZpY2UnO1xyXG5pbXBvcnQgUG93ZXJTY3JlZW4gZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvU2NyZWVuL1Bvd2VyU2NyZWVuL1Bvd2VyU2NyZWVuJztcclxuaW1wb3J0IENvZGVUeXBpbmdTY3JlZW4gZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvU2NyZWVuL0NvZGVUeXBpbmdTY3JlZW4vQ29kZVR5cGluZ1NjcmVlbic7XHJcblxyXG5jb25zdCBBcHA6IFJlYWN0LkZDID0gKCkgPT4ge1xyXG4gIGNvbnN0IFttb2RlLCBzZXRNb2RlXSA9IHVzZVN0YXRlPCdvbicgfCAnb2ZmJz4oJ29mZicpXHJcblxyXG4gIGNvbnN0IGhhbmRsZVN0YXJ0TW9kZSA9ICgpID0+IHtcclxuICAgIG1vZGUgPT09ICdvZmYnID8gc2V0TW9kZSgnb24nKSA6IHNldE1vZGUoJ29mZicpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgcG9ydGZvbGlvQ29udGVudENsYXNzTmFtZSA9IGNzKFwicG9ydGZvbGlvLWNvbnRlbnRcIiwgbW9kZSA9PT0gJ29uJyA/ICdwb3dlci1zdGFydCcgOiAnJyk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UG9ydGZvbGlvRGV2aWNlIHNjcmVlbkNvbnRlbnQ9e1xyXG4gICAgICA8PlxyXG4gICAgICAgIDxDb2RlVHlwaW5nU2NyZWVuIG1vZGU9e21vZGV9IC8+XHJcbiAgICAgICAgPFBvd2VyU2NyZWVuIGhhbmRsZU1vZGU9e2hhbmRsZVN0YXJ0TW9kZX0gLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cG9ydGZvbGlvQ29udGVudENsYXNzTmFtZX0+XHJcbiAgICAgICAgICB7LyogPGRpdj5Db250ZW50IGNvbWVzIGhlcmU8L2Rpdj4gKi99XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvPn0gLz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7XHJcbiIsImltcG9ydCBSZWFjdCwgeyBtZW1vIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBJUG9ydGZvbGlvRGV2aWNlIH0gZnJvbSAnLi8uLi9Qb3J0Zm9saW9EZXZpY2UnO1xyXG5pbXBvcnQgeyBQQ0RldmljZVN0YW5kaW5nUGFydEJvdHRvbTEsIFBDRGV2aWNlU3RhbmRpbmdQYXJ0Qm90dG9tMiwgUENEZXZpY2VTdGFuZGluZ1BhcnRNaWRkbGUgfSBmcm9tICcuL1BvcnRmb2xpb1BDU3RhbmRpbmdQYXJ0L1BvcnRvbGlvUENTdGFuZGluZ1BhcnQnO1xyXG5pbXBvcnQgUG9ydGZvbGlvU2NyZWVuIGZyb20gJy4uL1NoYXJlZC9Qb3J0Zm9saW9TY3JlZW4vUG9ydGZvbGlvU2NyZWVuJztcclxuaW1wb3J0IFBvcnRmb2xpb1BDS2V5Ym9hcmQgZnJvbSAnLi4vUENEZXZpY2UvUG9ydGZvbGlvUENLZXlib2FyZC9Qb3J0Zm9saW9QQ0tleWJvYXJkJztcclxuaW1wb3J0IFBvcnRmb2xpb1BDQ29mZmVNdWcgZnJvbSAnLi4vUENEZXZpY2UvUG9ydGZvbGlvUENDb2ZmZU11Zy9Qb3J0Zm9saW9QQ0NvZmZlTXVnJztcclxuaW1wb3J0IHsgUG9ydGZvbGlvRGV2aWNlcyB9IGZyb20gJy4uLy4uLy4uL21vZGVsJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVBDRGV2aWNlIGV4dGVuZHMgSVBvcnRmb2xpb0RldmljZSB7IH1cclxuXHJcbmNvbnN0IFBDRGV2aWNlOiBSZWFjdC5GQzxJUENEZXZpY2U+ID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IHsgc2NyZWVuQ29udGVudCB9ID0gcHJvcHM7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcnRmb2xpby1wYy1kZXZpY2Utd3JhcHBlclwiPlxyXG4gICAgICA8UG9ydGZvbGlvU2NyZWVuIGN1cnJlbnRTY3JlZW5Db250ZW50PXtzY3JlZW5Db250ZW50fSBjdXJyZW50RGV2aWNlPXtQb3J0Zm9saW9EZXZpY2VzLkRFU0tUT1B9IC8+XHJcbiAgICAgIDxQQ0RldmljZVN0YW5kaW5nUGFydE1pZGRsZSAvPlxyXG4gICAgICA8UENEZXZpY2VTdGFuZGluZ1BhcnRCb3R0b20xIC8+XHJcbiAgICAgIDxQQ0RldmljZVN0YW5kaW5nUGFydEJvdHRvbTIgLz5cclxuICAgICAgey8qIDxQb3J0Zm9saW9QQ0tleWJvYXJkIC8+ICovfVxyXG4gICAgICA8UG9ydGZvbGlvUENDb2ZmZU11ZyAvPlxyXG4gICAgPC9kaXY+KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWVtbyhQQ0RldmljZSk7IiwiaW1wb3J0IFJlYWN0LCB7IG1lbW8gfSBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElQb3J0Zm9saW9QQ0NvZmZlTXVnIHtcclxuXHJcbn1cclxuXHJcbmNvbnN0IFBvcnRmb2xpb1BDQ29mZmVNdWc6IFJlYWN0LkZDPElQb3J0Zm9saW9QQ0NvZmZlTXVnPiA9IHByb3BzID0+IHtcclxuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJwYy1kZXZpY2UtY29mZmUtbXVnXCI+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBjLWRldmljZS1jb2ZmZS1jaXJjbGVcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYy1kZXZpY2UtY29mZmUtbGlxdWlkXCIgLz5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwYy1kZXZpY2UtY29mZmUtaGFuZGxlXCIgLz5cclxuICA8L2Rpdj5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWVtbyhQb3J0Zm9saW9QQ0NvZmZlTXVnKTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFBDRGV2aWNlU3RhbmRpbmdQYXJ0TWlkZGxlOiBSZWFjdC5GQyA9ICgpID0+IHtcclxuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJwYy1kZXZpY2UtbWlkZGxlLXN0YW5kaW5nXCIgLz5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFBDRGV2aWNlU3RhbmRpbmdQYXJ0Qm90dG9tMTogUmVhY3QuRkMgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwicGMtZGV2aWNlLXN0YW5kaW5nLXBhcnQxXCIgLz5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFBDRGV2aWNlU3RhbmRpbmdQYXJ0Qm90dG9tMjogUmVhY3QuRkMgPSAoKSA9PiB7XHJcblxyXG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInBjLWRldmljZS1zdGFuZGluZy1wYXJ0MlwiIC8+XHJcbn0iLCJpbXBvcnQgUmVhY3QsIHsgbWVtbywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFBvcnRmb2xpb0RldmljZXMgfSBmcm9tICcuLi8uLi9tb2RlbCc7XHJcbmltcG9ydCBQQ0RldmljZSBmcm9tICcuL1BDRGV2aWNlL1BDRGV2aWNlJztcclxuZXhwb3J0IGludGVyZmFjZSBJUG9ydGZvbGlvRGV2aWNlIHtcclxuICAvKipcclxuICAgKiBUaGUgY29udGVudCBkaXNwbGF5ZWQgaW4gdGhlIHNjcmVlbiBvZiBhbnkgZGV2aWNlIFxyXG4gICAqL1xyXG4gIHNjcmVlbkNvbnRlbnQ6IEpTWC5FbGVtZW50O1xyXG59XHJcblxyXG5jb25zdCBQb3J0Zm9saW9EZXZpY2U6IFJlYWN0LkZDPElQb3J0Zm9saW9EZXZpY2U+ID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IHsgc2NyZWVuQ29udGVudCB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IFtjdXJyZW50RGV2aWNlLCBzZXRDdXJyZW50RGV2aWNlXSA9IHVzZVN0YXRlPFBvcnRmb2xpb0RldmljZXM+KFBvcnRmb2xpb0RldmljZXMuREVTS1RPUCk7XHJcblxyXG4gIGxldCBkaXNwbGF5ZWREZXZpY2U6IEpTWC5FbGVtZW50IHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xyXG5cclxuICBzd2l0Y2ggKGN1cnJlbnREZXZpY2UpIHtcclxuICAgIGNhc2UgUG9ydGZvbGlvRGV2aWNlcy5ERVNLVE9QOlxyXG4gICAgICBkaXNwbGF5ZWREZXZpY2UgPSA8UENEZXZpY2Ugc2NyZWVuQ29udGVudD17c2NyZWVuQ29udGVudH0gLz47XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBQb3J0Zm9saW9EZXZpY2VzLlRBQkxFVDpcclxuICAgICAgZGlzcGxheWVkRGV2aWNlID0gPD5UYWJsZXREZXZpY2U8Lz47XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBQb3J0Zm9saW9EZXZpY2VzLk1PQklMRTpcclxuICAgICAgZGlzcGxheWVkRGV2aWNlID0gPD5Nb2JpbGVEZXZpY2U8Lz47XHJcbiAgICAgIGJyZWFrO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwicG9ydGZvbGlvLWRldmljZS13cmFwcGVyXCI+e2Rpc3BsYXllZERldmljZX08L2Rpdj47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1lbW8oUG9ydGZvbGlvRGV2aWNlKTsiLCJpbXBvcnQgUmVhY3QsIHsgbWVtbyB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUG9ydGZvbGlvRGV2aWNlcyB9IGZyb20gJy4uLy4uLy4uLy4uL21vZGVsJztcclxuZXhwb3J0IGludGVyZmFjZSBJUG9ydGZvbGlvU2NyZWVuIHtcclxuICAvKipcclxuICAgKiBUaGUgY3VycmVudCBzY3JlZW4gZGlzcGxheWVkXHJcbiAgICovXHJcbiAgY3VycmVudFNjcmVlbkNvbnRlbnQ6IEpTWC5FbGVtZW50O1xyXG4gIC8qKlxyXG4gICAqIFRoZSBkZXZpY2UgaW4gd2hpY2ggc2NyZWVuIGlzIGN1cnJlbnRseSBkaXNwbGF5aW5nXHJcbiAgICovXHJcbiAgY3VycmVudERldmljZTogUG9ydGZvbGlvRGV2aWNlcztcclxufVxyXG5cclxuY29uc3QgUG9ydGZvbGlvU2NyZWVuOiBSZWFjdC5GQzxJUG9ydGZvbGlvU2NyZWVuPiA9IHByb3BzID0+IHtcclxuXHJcbiAgY29uc3QgeyBjdXJyZW50U2NyZWVuQ29udGVudCB9ID0gcHJvcHM7XHJcblxyXG4gIHJldHVybiAoPGRpdiBjbGFzc05hbWU9XCJwYy1kZXZpY2Utc2NyZWVuXCI+XHJcbiAgICB7Y3VycmVudFNjcmVlbkNvbnRlbnR9XHJcbiAgPC9kaXY+KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWVtbyhQb3J0Zm9saW9TY3JlZW4pOyIsImltcG9ydCBSZWFjdCwgeyBtZW1vIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY3MgZnJvbSAnY2xhc3NuYW1lcyc7XHJcblxyXG5pbnRlcmZhY2UgSUNvZGVUeXBpbmdTY3JlZW4ge1xyXG4gIG1vZGU6ICdvbicgfCAnb2ZmJyxcclxufVxyXG5cclxuY29uc3QgQ29kZVR5cGluZ1NjcmVlbjogUmVhY3QuRkM8SUNvZGVUeXBpbmdTY3JlZW4+ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBtb2RlIH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3QgY2xhc3NOYW1lcyA9IGNzKCd0eXBpbmctd3JhcHBlcicsIG1vZGUgPT09ICdvbicgPyAncG93ZXItb24nIDogJ3Bvd2VyLW9mZicpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXN9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZyc2UtcG9ydGZvbGlvXCI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWVtbyhDb2RlVHlwaW5nU2NyZWVuKTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJUG93ZXJTY3JlZW4ge1xyXG4gIGhhbmRsZU1vZGU6ICgpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmNvbnN0IFBvd2VyU2NyZWVuOiBSZWFjdC5GQzxJUG93ZXJTY3JlZW4+ID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IHsgaGFuZGxlTW9kZSB9ID0gcHJvcHM7XHJcblxyXG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImZyc2UtcG9ydGZvbGlvLXN0YXJ0XCIgb25DbGljaz17aGFuZGxlTW9kZX0+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZyc2UtcG9ydGZvbGlvLXBvd2VyMVwiIC8+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZyc2UtcG9ydGZvbGlvLXBvd2VyMlwiIC8+XHJcbiAgPC9kaXY+O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3dlclNjcmVlbjsiLCJleHBvcnQgZW51bSBQb3J0Zm9saW9EZXZpY2VzIHtcclxuICBERVNLVE9QID0gJ0RFU0tUT1AnLFxyXG4gIFRBQkxFVCA9ICdUQUJMRVQnLFxyXG4gIE1PQklMRSA9ICdNT0JJTEUnXHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9