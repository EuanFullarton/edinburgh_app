var MapItems = require('../models/mapItems')
<<<<<<< HEAD

=======
//Comment insertion
>>>>>>> feature/history
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
