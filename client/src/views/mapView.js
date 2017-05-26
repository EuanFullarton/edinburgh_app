var MapItems = require('../models/mapItems')
var MapView = function() {
 this.get();
};

MapView.prototype = {
  get:function(){
    var mapItems = new MapItems();
    mapItems.all(function(items){
      this.render(items);
      console.log(items);
    }.bind(this));
  },

  render: function(places){
    var container = document.getElementById("map-container");
    for(var place of places){
      var p = document.createElement('p');
      p.innerText = place.name;
    }
    container.appendChild(p);
  }
}

module.exports = MapView;
