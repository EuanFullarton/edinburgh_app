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
    var favContainer = document.getElementById("fav-container");
    favContainer.style.display = "none";
   
    
    var mainHeader = document.getElementById("main-header");
    mainHeader.style.display = "none";
    var mapHeader = document.getElementById("map-title");
    mapHeader.style.display = "none";
    var historyHeader = document.getElementById("history-title");
    historyHeader.style.display = "block";
    

    var mainHistoryButton = document.getElementById("main-history-button");
    mainHistoryButton.style.display = "none";
    var mainMapButton = document.getElementById("main-map-button");
    mainMapButton.style.display = "none";
    var navHistoryButton = document.getElementById("nav-history-button");
    navHistoryButton.style.display = "none";
    var navMapButton = document.getElementById("nav-map-button");
    navMapButton.style.display = "inline-block";
    var menuButton = document.getElementById("menu-button");
    menuButton.style.display = "block";

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
