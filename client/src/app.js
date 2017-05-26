var IndexView = require('./views/indexView');

var app = function() {
  new IndexView();
}

window.addEventListener('load', app);
