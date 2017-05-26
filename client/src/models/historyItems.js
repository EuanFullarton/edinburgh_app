var HistoryItem = require('./historyItem.js');
var RequestHelper = require('../../helper/requestHelper.js');


var HistoryItems = function() {
  this.requestHelper = new RequestHelper();
}

HistoryItems.prototype = {
  all: function(callback){
    this.requestHelper.makeGetRequest('http://localhost:3000/api/history', function(results){
      var items = this.populateItems(results);
      callback(items);
    }.bind(this));
  },

  populateItems: function(results){
    var items = results.map(function(resultObject){
      return new HistoryItem(resultObject);
    })
    return items;
  }
};

module.exports = HistoryItems;
