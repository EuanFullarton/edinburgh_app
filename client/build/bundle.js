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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var MapView = __webpack_require__(6);
var HistoryView = __webpack_require__(5);

var IndexView = function() {
  this.mapView = new MapView();
  this.historyView = new HistoryView();
  var mapButton = document.getElementById('map-button');
   var historyButton = document.getElementById('history-button');
   var menuButton = document.getElementById('menu-button');
   mapButton.addEventListener('click', this.mapView.getMap.bind(this.mapView));
   historyButton.addEventListener('click', this.historyView.getHistory.bind(this.historyView));
   menuButton.addEventListener('click', this.clear);

  this.app();
};

IndexView.prototype = {
  app:function(){
    console.log("Running app");
  },
  clear:function(){
     var historyContainer = document.getElementById("history-container");
     historyContainer.style.display = "none";
     var mapContainer = document.getElementById("map-container");
     mapContainer.style.display = "none";
     var menuButton = document.getElementById('menu-button');
     menuButton.style.display = "none";
   }
}

module.exports = IndexView;


/***/ }),
/* 1 */
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
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var IndexView = __webpack_require__(0);

var app = function() {
  new IndexView();
}

window.addEventListener('load', app);


/***/ }),
/* 3 */
/***/ (function(module, exports) {

var HistoryItem = function(options) {
  this.year = options.year;
  this.fact = options.fact;
}

HistoryItem.prototype = {

}

module.exports = HistoryItem;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var HistoryItem = __webpack_require__(3);
var RequestHelper = __webpack_require__(1);


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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var HistoryItems = __webpack_require__(4)

var HistoryView = function() {

};

HistoryView.prototype = {
  getHistory: function(){
    console.log("Clicked history");
    var historyItems = new HistoryItems();
    historyItems.all(function(items){
      this.renderHistory(items);
    }.bind(this));
  },

  renderHistory: function(histories){
    var mapContainer = document.getElementById("map-container");
    mapContainer.style.display = "none";
    var outerhistoryContainer = document.getElementById("outer-history-container");
    var menuButton = document.getElementById("menu-button");
    menuButton.style.display = "block";
    var historyContainer = document.getElementById("history-container");
    outerhistoryContainer.style.display = "block";
    historyContainer.style.display = "block";
    historyContainer.innerHTML = "";
    for(var history of histories){
      var d = document.createElement('div');
      var year = document.createElement('p');
      var text = document.createElement('p');
      console.log(history.year);
      year.innerText = history.year;
      text.innerText = history.fact;
      d.appendChild(year);
      d.appendChild(text);
      historyContainer.appendChild(d);
    }
  }
}

module.exports = HistoryView;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var MapItems = __webpack_require__(8);

var MapView = function() {

};

MapView.prototype = {
  getMap:function(){
    console.log("Clicked map");
    var mapItems = new MapItems();
    mapItems.all(function(places){
      console.log(this);
      this.renderMap(places);
    }.bind(this));
  },

  renderMap: function(places){
    var outerHistoryContainer = document.getElementById("outer-history-container");
    outerHistoryContainer.style.display = "none";
    var historyContainer = document.getElementById("history-container");
    historyContainer.style.display = "none";
    var menuButton = document.getElementById("menu-button");
    menuButton.style.display = "block";
    var mapContainer = document.getElementById("map-container");
    mapContainer.innerHTML = "";
    mapContainer.style.display = "block";
    for(var place of places){
      var p = document.createElement('p');
      p.innerText = place.name;
      mapContainer.appendChild(p);
    }
  }
}

module.exports = MapView;


/***/ }),
/* 7 */
/***/ (function(module, exports) {

var MapItem = function(options) {
  this.name = options.name;
  this.info = options.info;
  this.latlng = options.latlng;
}

MapItem.prototype = {

}

module.exports = MapItem;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var MapItem = __webpack_require__(7);
var RequestHelper = __webpack_require__(1);


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