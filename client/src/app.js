var MapView = require('./views/mapView');
var HistoryView = require('./views/historyView');
var IndexView = require('./views/indexView');

var app = function() {
  new IndexView();
  new MapView();
  new HistoryView();
}

window.addEventListener('load', app);
