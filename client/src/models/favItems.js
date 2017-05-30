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
    var favData = JSON.stringify(payload);
    var callback = function(){
      console.log("Callback 2");
    };
    this.requestHelper.makePostRequest('http://localhost:3000/api/favs', callback, favData);
  },

  delete: function(id, callback){
    var url = 'http://localhost:3000/api/favs'+"/"+id;
    console.log(url);
    this.requestHelper.makeDeleteRequest(url, callback);
  },

  populateItems: function(results){
    var items = results.map(function(resultObject){
      return new MapItem(resultObject);
    })
    return items;
  }
};

module.exports = FavItems;
