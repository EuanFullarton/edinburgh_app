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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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
  },

  makePostRequest: function(url, callback, payload){
    var request = new XMLHttpRequest();
    request.open("POST", url);
    request.setRequestHeader('Content-Type', 'application/json');
    request.addEventListener("load", function(){
      if(request.status !== 200) return;
      var jsonString = request.responseText;
      var resultsObject = JSON.parse(jsonString);
      callback(resultsObject)
    });
    request.send(payload);
  },

  makeUpdateRequest: function(url, callback, payload){
    var request = new XMLHttpRequest();
    request.open("PUT", url);
    request.setRequestHeader('Content-Type', 'application/json');
    request.addEventListener("load", function(){
      if(request.status !== 200) return;
      var jsonString = request.responseText;
      var resultsObject = JSON.parse(jsonString);
      callback(resultsObject)
    });
    request.send(payload);
  }
}

module.exports = Helper;


/***/ }),
/* 1 */
/***/ (function(module, exports) {

var MapItem = function(options) {
  this.name = options.name;
  this.info = options.info;
  this.latlng = options.latlng;
  this.image = options.image;
  this.favourited = options.favourited;
  this.id = options._id;
}

MapItem.prototype = {

}

module.exports = MapItem;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var MapView = __webpack_require__(9);
var HistoryView = __webpack_require__(8);

var IndexView = function() {
  this.mapView = new MapView();
  this.historyView = new HistoryView();
  var mainMapButton = document.getElementById('main-map-button');
  var navMapButton = document.getElementById('nav-map-button');
  var mainHistoryButton = document.getElementById('main-history-button');
  var navHistoryButton = document.getElementById('nav-history-button');
  var menuButton = document.getElementById('menu-button');
  mainMapButton.addEventListener('click', this.mapView.getMap.bind(this.mapView));
  navMapButton.addEventListener('click', this.mapView.getMap.bind(this.mapView));
  mainHistoryButton.addEventListener('click', this.historyView.getHistory.bind(this.historyView));
  navHistoryButton.addEventListener('click', this.historyView.getHistory.bind(this.historyView));
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
   var favContainer = document.getElementById("fav-container");
   favContainer.style.display = "none";
   

   var mainHeader = document.getElementById("main-header");
   mainHeader.style.display = "block";
   var infoSection = document.getElementById("info-section");
   infoSection.innerText = "Select 'map' to view notable landmarks, or choose 'history' to learn more about how the city has changed over time.";
   infoSection.style.margin = "auto";
   infoSection.style.fontSize = ".55em";
   infoSection.style.width = "50%";
   infoSection.style.textAlign = "center";
   mainHeader.appendChild(infoSection)
   var mapHeader = document.getElementById("map-title");
   mapHeader.style.display = "none";
   var historyHeader = document.getElementById("history-title");
   historyHeader.style.display = "none";

   var mainMapButton = document.getElementById("main-map-button");
   mainMapButton.style.display = "inline-block";
   var navMapButton = document.getElementById("nav-map-button");
   navMapButton.style.display = "none";
   var mainHistoryButton = document.getElementById("main-history-button");
   mainHistoryButton.style.display = "inline-block";
   var navHistoryButton = document.getElementById("nav-history-button");
   navHistoryButton.style.display = "none";
   var menuButton = document.getElementById('menu-button');
   menuButton.style.display = "none";

 }
}

module.exports = IndexView;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var IndexView = __webpack_require__(2);

var app = function() {
  new IndexView();
}

window.addEventListener('load', app);


/***/ }),
/* 4 */,
/* 5 */
/***/ (function(module, exports) {

var HistoryItem = function(options) {
  this.year = options.year;
  this.fact = options.fact;
  this.image = options.image;
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
/***/ (function(module, exports, __webpack_require__) {

var MapItem = __webpack_require__(1);
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
  },

  update: function(id, callback, result){
    var url = 'http://localhost:3000/api/map'+"/"+id;
    var initPayload = {"favourited": result};
    var payload = JSON.stringify(initPayload);
    this.requestHelper.makeUpdateRequest(url, callback, payload);
  }
};

module.exports = MapItems;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var HistoryItems = __webpack_require__(6)

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
    var favContainer = document.getElementById("fav-container");
    favContainer.style.display = "none";
   
    
    var mainHeader = document.getElementById("main-header");
    mainHeader.style.display = "none";
    var mapHeader = document.getElementById("map-title");
    mapHeader.style.display = "none";
    var historyHeader = document.getElementById("history-title");
    historyHeader.style.display = "block";
    var infoSection = document.getElementById("info-section");
    infoSection.innerText = "Scroll along the timeline to read about Edinburgh's history.";
    infoSection.style.fontSize = "0.75em";
    infoSection.style.width = "100%";
    infoSection.style.textAlign = "left";
    historyHeader.appendChild(infoSection)
    

    var mainHistoryButton = document.getElementById("main-history-button");
    mainHistoryButton.style.display = "none";
    var mainMapButton = document.getElementById("main-map-button");
    mainMapButton.style.display = "none";
    var navHistoryButton = document.getElementById("nav-history-button");
    navHistoryButton.style.display = "none";
    var navMapButton = document.getElementById("nav-map-button");
    navMapButton.style.display = "inline-block";
    var menuButton = document.getElementById("menu-button");
    menuButton.style.display = "inline-block";

    var navButtons = document.getElementsByClassName("nav-button");
    var mainButtons = document.getElementsByClassName("main-button")
    console.log(navButtons);
    for (button of navButtons){
      button.style.margin = "0";
      button.style.padding = "1%";
    };

    for (button of mainButtons){
      button.style.display = "none";
    }

    var historyContainer = document.getElementById("history-container");
    outerhistoryContainer.style.display = "block";
    historyContainer.style.display = "block";
    historyContainer.innerHTML = "";
    for(var history of histories){
      var d = document.createElement('div');
      var year = document.createElement('p');
      var text = document.createElement('p');
      var image = document.createElement('p');
      console.log(history.year);
      year.innerText = history.year;
      text.innerText = history.fact;
      image.innerHTML = '<img src="'+ history.image+'" height = 150 width = 200/>'
      d.appendChild(year);
      d.appendChild(text);
      d.appendChild(image);
      historyContainer.appendChild(d);
    }
  }
}

module.exports = HistoryView;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var MapItems = __webpack_require__(7);
var MapItem = __webpack_require__(1);
var GoogleMapStyles = __webpack_require__(10)

var MapView = function() {

};

MapView.prototype = {
  getMap:function(){
    var mapItems = new MapItems();
    mapItems.all(function(places){
      this.renderMap(places);
      this.renderFavs(places);
    }.bind(this));
  },

  renderMap: function(places){
    var mapView = this;
    var mapContainer = document.getElementById("map-container");
    mapContainer.style.display = "block";
    var outerHistoryContainer = document.getElementById("outer-history-container");
    outerHistoryContainer.style.display = "none";
    var historyContainer = document.getElementById("history-container");
    historyContainer.style.display = "none";
    var navHistoryButton = document.getElementById("nav-history-button");
    navHistoryButton.style.display = "inline-block";
    var mainMapButton = document.getElementById("main-map-button");
    mainMapButton.style.display = "none";
    var navMapButton = document.getElementById("nav-map-button");
    navMapButton.style.display = "none";
    var menuButton = document.getElementById("menu-button");
    menuButton.style.display = "inline-block";
    var navButtons = document.getElementsByClassName("nav-button");
    var mainButtons = document.getElementsByClassName("main-button");

    for (button of navButtons){
      button.style.margin = "0";
      button.style.padding = "1%";
    };

    for (button of mainButtons){
      button.style.display = "none";
    }

    var mainHeader = document.getElementById("main-header");
    mainHeader.style.display = "none";
    var historyHeader = document.getElementById("history-title");
    historyHeader.style.display = "none";
    var mapHeader = document.getElementById("map-title");
    mapHeader.style.display = "block";
    var infoSection = document.getElementById("info-section");
    infoSection.innerText = "Select a pin to view more information, and add to favourites if you would like to store it for later.";
    infoSection.style.fontSize = "0.75em";
    infoSection.style.width = "100%";
    infoSection.style.textAlign = "left";
    mapHeader.appendChild(infoSection)
    var mapContainer = document.getElementById("map-container");
    mapContainer.innerHTML = "";
    mapContainer.style.display = "block";


    var googleMap = new google.maps.Map(mapContainer, {
      center: {lat: 55.953251, lng: -3.188267},
      zoom: 12,
      styles: GoogleMapStyles
    });


    for(var place of places){
      var p = document.createElement('p');
      p.innerText = place.name;
      mapContainer.appendChild(p);
      var marker = new google.maps.Marker({
        name: place.name,
        info: place.info,
        favourited: place.favourited,
        image: place.image,
        latlng: place.latlng,
        id: place.id,
        position: { lat: place.latlng.lat, lng: place.latlng.lng },
        animation: google.maps.Animation.DROP,
        map: googleMap
      });
      var infowindow = new google.maps.InfoWindow({
        content: place.name + ": " + place.info,
        maxWidth: 400
      });

      google.maps.event.addListener(marker, 'click', function () {
        setTimeout(function(){
          infowindow.setContent('<img src="' + this.image +'" width = 130 height = 90 />'+ "</br> "+ this.name + ": " + "</br></br>" + this.info + "</br></br>" + "<button onclick= 'click' id= 'fav-button' class='fav-buttons' > Add to favourites</button>");
          var id = this.id;
          infowindow.open(googleMap, this)

          var favouritesButton = document.getElementById('fav-button');
          console.log(favouritesButton);
          favouritesButton.addEventListener('click', function(){
            console.log(id);
            mapView.updateItemTrue(id);
          });


          googleMap.panTo({lat: this.latlng.lat, lng: this.latlng.lng})

        }.bind(this), 5);
      });
    }
  },

  renderFavs: function(places){

    var mapView = this;
    var favsContainer = document.getElementById("fav-container");
    favsContainer.innerHTML = "<h3 id='fav-header'>Favourites</h3>";
    favsContainer.style.display = "block";
    for(var fav of places){
     if (fav.favourited){
        var favBox = document.createElement('div');
        var p1 = document.createElement('p');
        var p2 = document.createElement('p');
        var deleteButton = document.createElement('BUTTON');
        p1.innerText = fav.name;
        p2.innerText = fav.info;
        deleteButton.innerHTML = "Delete";
        deleteButton.id = fav.id;
        favBox.appendChild(p1);
        favBox.appendChild(p2);
        favBox.appendChild(deleteButton);
        favsContainer.appendChild(favBox);

        var deleteButton = document.getElementById(fav.id);

        deleteButton.addEventListener('click', function(){
          mapView.updateItemFalse(this.id);
        });
      }
    };
  },

  // addToFavourites: function(place){
  //   var favItems = new FavItems();
  //   var callback = function(place){
  //     console.log("callback");
  //   };
  //   favItems.post(callback, place);
  // }

  updateItemTrue: function(deleteID){
    var mapItems = new MapItems();
    var callback = function(result){
      mapItems.all(function(places){
        console.log(this);
        this.renderFavs(places);
      }.bind(this));
    }.bind(this);
    mapItems.update(deleteID, callback, true);
  },

  updateItemFalse: function(deleteID){
    var mapItems = new MapItems();
    var callback = function(result){
      mapItems.all(function(places){
        console.log(this);
        this.renderFavs(places);
      }.bind(this));
    }.bind(this);
    mapItems.update(deleteID, callback, false);
  }
}
module.exports = MapView;


/***/ }),
/* 10 */
/***/ (function(module, exports) {

var mapStyles = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ebe3cd"
      }
    ]
    },
    {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#523735"
      }
    ]
    },
    {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#f5f1e6"
      }
    ]
    },
    {
    "featureType": "administrative",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#c9b2a6"
      }
    ]
    },
    {
    "featureType": "administrative.land_parcel",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#dcd2be"
      }
    ]
    },
    {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#ae9e90"
      }
    ]
    },
    {
    "featureType": "landscape.natural",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
    },
    {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
    },
    {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#93817c"
      }
    ]
    },
    {
    "featureType": "poi.park",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#a5b076"
      }
    ]
    },
    {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#447530"
      }
    ]
    },
    {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f1e6"
      }
    ]
    },
    {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#fdfcf8"
      }
    ]
    },
    {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f8c967"
      }
    ]
    },
    {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#e9bc62"
      }
    ]
    },
    {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e98d58"
      }
    ]
    },
    {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#db8555"
      }
    ]
    },
    {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#806b63"
      }
    ]
    },
    {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
    },
    {
    "featureType": "transit.line",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8f7d77"
      }
    ]
    },
    {
    "featureType": "transit.line",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#ebe3cd"
      }
    ]
    },
    {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
    },
    {
    "featureType": "water",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#b9d3c2"
      }
    ]
    },
    {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#92998d"
      }
    ]
  }
]

module.exports = mapStyles;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map