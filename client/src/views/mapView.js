var MapItems = require('../models/mapItems');
var MapItem = require('../models/mapItem');
var GoogleMapStyles = require('./googleMapStyles')

var MapView = function() {

};

MapView.prototype = {
  getMap:function(){
    var mapItems = new MapItems();
    mapItems.all(function(places){
      this.renderMap(places);
      this.renderFavs(places);
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
    var infoSection = document.getElementById("info-section");
    infoSection.innerText = "Select a pin to view more information, and add to favourites if you would like to store it for later.";
    infoSection.style.fontSize = "0.75em";
    infoSection.style.width = "100%";
    infoSection.style.textAlign = "left";
    mapHeader.appendChild(infoSection)
    var mapContainer = document.getElementById("map-container");
    mapContainer.innerHTML = "";
    mapContainer.style.display = "block";


    var googleMap = new google.maps.Map(mapContainer, {
      center: {lat: 55.953251, lng: -3.188267},
      zoom: 13,
      styles: GoogleMapStyles
    });


    for(var place of places){
      var p = document.createElement('p');
      p.innerText = place.name;
      mapContainer.appendChild(p);
      var marker = new google.maps.Marker({
        name: place.name,
        info: place.info,
        favourited: place.favourited,
        image: place.image,
        latlng: place.latlng,
        id: place.id,
        position: { lat: place.latlng.lat, lng: place.latlng.lng },
        animation: google.maps.Animation.DROP,
        map: googleMap
      });
      var infowindow = new google.maps.InfoWindow({
        content: place.name + ": " + place.info,
        maxWidth: 400
      });

      google.maps.event.addListener(marker, 'click', function () {
        setTimeout(function(){
          infowindow.setContent('<img src="' + this.image +'" width = 130 height = 90 />'+ "</br> "+ this.name + ": " + "</br></br>" + this.info + "</br></br>" + "<button onclick= 'click' id= 'fav-button' class='fav-buttons' > Add to favourites</button>");
          var id = this.id;
          infowindow.open(googleMap, this)

          var favouritesButton = document.getElementById('fav-button');
          console.log(favouritesButton);
          favouritesButton.addEventListener('click', function(){
            console.log(id);
            mapView.updateItemTrue(id);
          });


          googleMap.panTo({lat: this.latlng.lat, lng: this.latlng.lng})

        }.bind(this), 5);
      });
    }
  },

  renderFavs: function(places){

    var mapView = this;
    var favsContainer = document.getElementById("fav-container");
    favsContainer.innerHTML = "<h3 id='fav-header'>Favourites</h3>";
    favsContainer.style.display = "block";
    for(var fav of places){
     if (fav.favourited){
        var favBox = document.createElement('div');
        var p1 = document.createElement('p');
        var p2 = document.createElement('p');
        var deleteButton = document.createElement('BUTTON');
        p1.innerText = fav.name;
        p2.innerText = fav.info;
        deleteButton.innerHTML = "Delete";
        deleteButton.id = fav.id;
        favBox.appendChild(p1);
        favBox.appendChild(p2);
        favBox.appendChild(deleteButton);
        favsContainer.appendChild(favBox);

        var deleteButton = document.getElementById(fav.id);

        deleteButton.addEventListener('click', function(){
          mapView.updateItemFalse(this.id);
        });
      }
    };
  },

  // addToFavourites: function(place){
  //   var favItems = new FavItems();
  //   var callback = function(place){
  //     console.log("callback");
  //   };
  //   favItems.post(callback, place);
  // }

  updateItemTrue: function(deleteID){
    var mapItems = new MapItems();
    var callback = function(result){
      mapItems.all(function(places){
        console.log(this);
        this.renderFavs(places);
      }.bind(this));
    }.bind(this);
    mapItems.update(deleteID, callback, true);
  },

  updateItemFalse: function(deleteID){
    var mapItems = new MapItems();
    var callback = function(result){
      mapItems.all(function(places){
        console.log(this);
        this.renderFavs(places);
      }.bind(this));
    }.bind(this);
    mapItems.update(deleteID, callback, false);
  }
}
module.exports = MapView;
