var UI = require('./views/UI.js');

var app = function(){
  new UI();
}

console.log("app has been hit")


window.addEventListener('load', app);