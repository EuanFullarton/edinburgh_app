var MapItems = require('../models/mapItems');
var MapItem = require('../models/mapItem');
var FavItems = require('../models/favItems');

var MapView = function() {

};

MapView.prototype = {
  getMap:function(){
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
    var mapView = this;
    var mapContainer = document.getElementById("map-container");
    mapContainer.style.display = "block";

    var outerHistoryContainer = document.getElementById("outer-history-container");
    outerHistoryContainer.style.display = "none";
    var historyContainer = document.getElementById("history-container");
    historyContainer.style.display = "none";

    var navHistoryButton = document.getElementById("nav-history-button");
    navHistoryButton.style.display = "inline-block";
    var mainMapButton = document.getElementById("main-map-button");
    mainMapButton.style.display = "none";
    var navMapButton = document.getElementById("nav-map-button");
    navMapButton.style.display = "none";
    var menuButton = document.getElementById("menu-button");
    menuButton.style.display = "block";

    var navButtons = document.getElementsByClassName("nav-button");
    var mainButtons = document.getElementsByClassName("main-button");
    for (button of navButtons){
      button.style.margin = "0";
      button.style.padding = "1%";
    };

    for (button of mainButtons){
      button.style.display = "none";
    }

    var mainHeader = document.getElementById("main-header");
    mainHeader.style.display = "none";
    var historyHeader = document.getElementById("history-title");
    historyHeader.style.display = "none";
    var mapHeader = document.getElementById("map-title");
    mapHeader.style.display = "block";


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

      var marker = new google.maps.Marker({
        name: place.name,
        info: place.info,
        latlng: place.latlng,
        position: { lat: place.latlng.lat, lng: place.latlng.lng },
        animation: google.maps.Animation.DROP,
        map: googleMap
      });

      var infowindow = new google.maps.InfoWindow({
        content: place.name + ": " + place.info,
        maxWidth: 200
      });

      google.maps.event.addListener(marker, 'click', function () {
        infowindow.setContent(this.name + ": </br></br>" + this.info + "</br></br>" +"<button id='fav-button' onclick= 'click' > Add to favourites</button>");

        var thisItemName = this.name;
        var thisItemInfo = this.info;
        var thisItemLatLng = this.latlng;
        var favPlace = new MapItem({name: thisItemName, info: thisItemInfo, latlng: thisItemLatLng});
        infowindow.open(googleMap, this);

        var favouritesButton = document.getElementById('fav-button');

        favouritesButton.addEventListener('click', function(){
            mapView.addToFavourites(favPlace)
        });
      });

    }
  },

  renderFavs: function(favs){
    var favsContainer = document.getElementById("fav-container");

    favsContainer.innerHTML = "";
    favsContainer.style.display = "block";
    for(var fav of favs){
      var favBox = document.createElement('div');
      var p1 = document.createElement('p');
      var p2 = document.createElement('p');
      var deleteButton = document.createElement('BUTTON');
      p1.innerText = fav.name;
      p2.innerText = fav.info;
      deleteButton.name = "Delete";
      deleteButton.value = "Delete";
      favBox.appendChild(p1);
      favBox.appendChild(p2);
      favBox.appendChild(deleteButton);
      favsContainer.appendChild(favBox);

    };
  },

  addToFavourites: function(place){
    var favItems = new FavItems();
    var callback = function(place){
      console.log("callback");
    };
    favItems.post(callback, place);
  }
}

module.exports = MapView;
