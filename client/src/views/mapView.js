var MapItems = require('../models/mapItems');

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
    
    var mainHeader = document.getElementById("main-header");
    mainHeader.style.display = "none";
    var historyHeader = document.getElementById("history-title");
    historyHeader.style.display = "none";
    var mapHeader = document.getElementById("map-title");
    mapHeader.style.display = "block";
    

    var mapButton = document.getElementById("map-button");
    mapButton.style.display = "none";
    var historyButton = document.getElementById("history-button");
    historyButton.style.display = "inline-block";


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
