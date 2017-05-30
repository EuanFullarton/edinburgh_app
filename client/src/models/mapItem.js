var MapItem = function(options) {
  this.name = options.name;
  this.info = options.info;
  this.latlng = options.latlng;
  this.image = options.image;
<<<<<<< HEAD
  this.favourited = options.favourited;
  this.id = options._id;
=======
  this._id = options._id;
>>>>>>> develop
}

MapItem.prototype = {

}

module.exports = MapItem;
