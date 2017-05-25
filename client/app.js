var MapView = require('./views/mapView');

var app = function() {
  new MapView();
}

window.addEventListener('load', app);
