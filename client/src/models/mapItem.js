var MapItem = function(options) {
  this.name = options.name;
  this.info = options.info;
  this.latlng = options.latlng;
  this.image = options.image;
  this.favourited = options.favourited;
  this.id = options._id;
}

MapItem.prototype = {

}

module.exports = MapItem;
