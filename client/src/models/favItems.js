var MapItem = require('./mapItem.js');
var RequestHelper = require('../../helper/requestHelper.js');

var FavItems = function() {
  this.requestHelper = new RequestHelper();
}

FavItems.prototype = {
  all: function(callback){
    this.requestHelper.makeGetRequest('http://localhost:3000/api/favs', function(results){
      var items = this.populateItems(results);
      callback(items);
    }.bind(this));
  },

  post: function(callback, payload){
    this.requestHelper.makePostRequest('http://localhost:3000/api/favs', function(results){
      var items = this.populateItems(results);
      callback(items), payload
    }.bind(this));
  },

  populateItems: function(results){
    var items = results.map(function(resultObject){
      return new MapItem(resultObject);
    })
    return items;
  }
};

module.exports = FavItems;
