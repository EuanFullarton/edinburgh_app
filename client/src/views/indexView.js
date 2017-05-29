var MapView = require('./mapView');
var HistoryView = require('./historyView');

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
     var mainHeader = document.getElementById("main-header");
     mainHeader.style.display = "block";
     var mapButton = document.getElementById("map-button");
     mapButton.style.display = "inline-block";
     var historyButton = document.getElementById("history-button");
     historyButton.style.display = "inline-block";
   }
}

module.exports = IndexView;
