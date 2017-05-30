var MapItem = require('./mapItem.js');
var RequestHelper = require('../../helper/requestHelper.js');


var MapItems = function() {
  this.requestHelper = new RequestHelper();
}

MapItems.prototype = {
  all: function(callback){
    this.requestHelper.makeGetRequest('http://localhost:3000/api/map', function(results){
      var items = this.populateItems(results);
      callback(items);
    }.bind(this));
  },

  populateItems: function(results){
    var items = results.map(function(resultObject){
      return new MapItem(resultObject);
    })
    return items;
  },

  update: function(id, callback){
    var url = 'http://localhost:3000/api/favs'+"/"+id;
    console.log(url);
    this.requestHelper.makeUpdateRequest(url, callback);
  }
};

module.exports = MapItems;
