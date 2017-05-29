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
<<<<<<< HEAD
    var mapContainer = document.getElementById("map-container");
    mapContainer.style.display = "block";
=======
    
>>>>>>> feature/main_page
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

    var mainMapButton = document.getElementById("main-map-button");
    mainMapButton.style.display = "none";
    var navMapButton = document.getElementById("nav-map-button");
    navMapButton.style.display = "none";
    var mainHistoryButton = document.getElementById("main-history-button");
    mainHistoryButton.style.display = "none";
    var navHistoryButton = document.getElementById("nav-history-button");
    navHistoryButton.style.display = "inline-block";


    var mapContainer = document.getElementById("map-container");
    mapContainer.innerHTML = "";
    mapContainer.style.display = "block";
    for(var place of places){
      var p = document.createElement('p');
      p.innerText = place.name;
      mapContainer.appendChild(p);
    };

    var googleMap = new google.maps.Map(mapContainer, {
    center: {lat: 55.953251, lng: -3.188267},
    zoom: 10
    });
  }
}

module.exports = MapView;