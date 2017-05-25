var MongoClient = require('mongodb').MongoClient;

var MapQuery = function(){
  this.url = 'mongodb://localhost:27017/Edinburgh'
}

MapQuery.prototype = {

  all:function(onQueryFinished){
    MongoClient.connect(this.url, function(err, db){
      if(db){
        var collection = db.collection('places');
        collection.find().toArray(function(err, docs){
          onQueryFinished(docs);
        });
      }
    });
  }

}

module.exports = MapQuery;