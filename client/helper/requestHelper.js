var Helper = function() {

}

Helper.prototype = {

  makeGetRequest: function(url, callback){
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.addEventListener("load", function(){
      if(request.status !== 200) return;
      var jsonString = request.responseText;
      var resultsObject = JSON.parse(jsonString);
      callback(resultsObject)
    });
    request.send();
  },

  makePostRequest: function(url, callback, payload){
    var request = new XMLHttpRequest();
    request.open("POST", url);
    request.setRequestHeader('Content-Type', 'application/json');
    request.addEventListener("load", function(){
      if(request.status !== 200) return;
      var jsonString = request.responseText;
      var resultsObject = JSON.parse(jsonString);
      callback(resultsObject)
    });
    request.send(payload);
  },

  makeUpdateRequest: function(url, callback){
    var request = new XMLHttpRequest();
    request.open("UPDATE", url);
    request.addEventListener("load", function(){
      console.log("successful request");
      if(request.status !== 200) return;
      var jsonString = request.responseText;
      var resultsObject = JSON.parse(jsonString);
      callback(resultsObject)
    });
    console.log("making request");
    request.send();
  }
}

module.exports = Helper;
