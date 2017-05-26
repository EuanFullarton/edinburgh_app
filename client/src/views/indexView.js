var MapView = require('./mapView');
var HistoryView = require('./historyView');

var IndexView = function() {
  this.mapView = new MapView();
  this.historyView = new HistoryView();
  var mapButton = document.getElementById('map-button');
  var historyButton = document.getElementById('history-button');
  mapButton.addEventListener('click', this.mapView.getMap.bind(this.mapView));
  historyButton.addEventListener('click', this.historyView.getHistory.bind(this.historyView));
  this.app();
};

IndexView.prototype = {
  app:function(){
    console.log("Running app");
  }
}

module.exports = IndexView;
