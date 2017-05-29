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
    var outerhistoryContainer = document.getElementById("outer-history-container");
    var menuButton = document.getElementById("menu-button");
    menuButton.style.display = "block";
    
    var mainHeader = document.getElementById("main-header");
    mainHeader.style.display = "none";
    var mapHeader = document.getElementById("map-title");
    mapHeader.style.display = "none";
    var historyHeader = document.getElementById("history-title");
    historyHeader.style.display = "block";
    

    var historyButton = document.getElementById("history-button");
    historyButton.style.display = "none";
    var mapButton = document.getElementById("map-button");
    mapButton.style.display = "inline-block";

    var historyContainer = document.getElementById("history-container");
    outerhistoryContainer.style.display = "block";
    historyContainer.style.display = "block";
    historyContainer.innerHTML = "";
    for(var history of histories){
      var d = document.createElement('div');
      var year = document.createElement('p');
      var text = document.createElement('p');
      console.log(history.year);
      year.innerText = history.year;
      text.innerText = history.fact;
      d.appendChild(year);
      d.appendChild(text);
      historyContainer.appendChild(d);
    }
  }
}

module.exports = HistoryView;
