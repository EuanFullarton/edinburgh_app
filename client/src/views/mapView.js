var MapItems = require('../models/mapItems');
var FavItems = require('../models/favItems');

var MapView = function() {

};

MapView.prototype = {
  getMap:function(){
    console.log("Clicked map");
    var mapItems = new MapItems();
    var favItems = new FavItems();
    mapItems.all(function(places){
      this.renderMap(places);
    }.bind(this));
    favItems.all(function(favs){
      this.renderFavs(favs);
    }.bind(this));
  },

  renderMap: function(places){
    var mapContainer = document.getElementById("map-container");
    mapContainer.style.display = "block";

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

    var googleMap = new google.maps.Map(mapContainer, {
    center: {lat: 55.953251, lng: -3.188267},
    zoom: 13
    });

    for(var place of places){
      var p = document.createElement('p');
      p.innerText = place.name;
      mapContainer.appendChild(p);
      console.log(place)
      
      var marker = new google.maps.Marker({
        position: { lat: place.latlng.lat, lng: place.latlng.lng },
        map: googleMap
      })          
    }
  },
  renderFavs: function(favs){
    var favsContainer = document.getElementById("fav-container");

    favsContainer.innerHTML = "";
    favsContainer.style.display = "block";
    for(var fav of favs){
      var p = document.createElement('p');
      p.innerText = fav.name;
      favsContainer.appendChild(p);

    };
  }
}

module.exports = MapView;
