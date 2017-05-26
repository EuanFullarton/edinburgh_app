/******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var Helper = function() {

}

Helper.prototype = {

  makeGetRequest: function(url, callback){
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.addEventListener("load", function(){
      if(request.status !== 200) return;
      var jsonString = request.responseText;
      var resultsObject = JSON.parse(jsonString);
      callback(resultsObject)
    });
    request.send();
  }
}

module.exports = Helper;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var HistoryItems = __webpack_require__ (6);

var HistoryView = function() {
  this.get();
};

HistoryView.prototype = {

  get: function(){
    var historyItems = new HistoryItems();
    historyItems.all(function(items){
      this.render(items);
      console.log(items);
    }.bind(this));
  },

  render: function(histories){
    var container = document.getElementById("history-container");
    for(var history of histories){
      var p = document.createElement('p');
      p.innerText = history.fact;
      console.log(history.fact);
    }
    container.appendChild(p);
  }

}

module.exports = HistoryView;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

var IndexView = function() {

};

IndexView.prototype = {

}

module.exports = IndexView;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var MapItems = __webpack_require__(8)
var MapView = function() {
 this.get();
};

MapView.prototype = {
  get:function(){
    var mapItems = new MapItems();
    mapItems.all(function(items){
      this.render(items);
      console.log(items);
    }.bind(this));
  },

  render: function(places){
    var container = document.getElementById("map-container");
    for(var place of places){
      var p = document.createElement('p');
      p.innerText = place.name;
    }
    container.appendChild(p);
  }
}

module.exports = MapView;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var MapView = __webpack_require__(3);
var HistoryView = __webpack_require__(1);
var IndexView = __webpack_require__(2);

var app = function() {
  new IndexView();
  new MapView();
  new HistoryView();
}

window.addEventListener('load', app);


/***/ }),
/* 5 */
/***/ (function(module, exports) {

var HistoryItem = function(options) {
  this.fact = options.fact;
}

HistoryItem.prototype = {

}

module.exports = HistoryItem;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var HistoryItem = __webpack_require__(5);
var RequestHelper = __webpack_require__(0);


var HistoryItems = function() {
  this.requestHelper = new RequestHelper();
}

HistoryItems.prototype = {
  all: function(callback){
    this.requestHelper.makeGetRequest('http://localhost:3000/api/history', function(results){
      var items = this.populateItems(results);
      callback(items);
    }.bind(this));
  },

  populateItems: function(results){
    var items = results.map(function(resultObject){
      return new HistoryItem(resultObject);
    })
    return items;
  }
};

module.exports = HistoryItems;


/***/ }),
/* 7 */
/***/ (function(module, exports) {

var MapItem = function(options) {
  this.name = options.name;
}

MapItem.prototype = {

}

module.exports = MapItem;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var MapItem = __webpack_require__(7);
var RequestHelper = __webpack_require__(0);


var MapItems = function() {
  this.requestHelper = new RequestHelper();
}

MapItems.prototype = {
  all: function(callback){
    this.requestHelper.makeGetRequest('http://localhost:3000/api/map', function(results){
      var items = this.populateItems(results);
      callback(items);
    }.bind(this));
  },

  populateItems: function(results){
    var items = results.map(function(resultObject){
      return new MapItem(resultObject);
    })
    return items;
  }
};

module.exports = MapItems;


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map