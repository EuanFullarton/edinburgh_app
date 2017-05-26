var HistoryItems = require ('../models/historyItems');

var HistoryView = function() {
  this.get();
};

HistoryView.prototype = {

  get: function(){
    var historyItems = new HistoryItems();
    historyItems.all(function(items){
      this.render(items);
      console.log(items);
    }.bind(this));
  },

  render: function(histories){
    var container = document.getElementById("history-container");
    for(var history of histories){
      var p = document.createElement('p');
      p.innerText = history.fact;
      console.log(history.fact);
    }
    container.appendChild(p);
  }

}

module.exports = HistoryView;
