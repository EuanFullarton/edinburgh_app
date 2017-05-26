var HistoryItems = require('../models/historyItems')

var HistoryView = function() {

};

HistoryView.prototype = {
  getHistory: function(){
    console.log("Clicked history");
    var historyItems = new HistoryItems();
    historyItems.all(function(items){
      this.renderHistory(items);
    }.bind(this));
  },

  renderHistory: function(histories){
    var mapContainer = document.getElementById("map-container");
    mapContainer.style.display = "none";
    var historyContainer = document.getElementById("history-container");
    historyContainer.style.display = "block";
    historyContainer.innerHTML = "";
    for(var history of histories){
      var p = document.createElement('p');
      p.innerText = history.fact;
      historyContainer.appendChild(p);
    }
  }
}

module.exports = HistoryView;
