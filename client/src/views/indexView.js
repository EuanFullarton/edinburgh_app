var MapView = require('./mapView');
var HistoryView = require('./historyView');

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
