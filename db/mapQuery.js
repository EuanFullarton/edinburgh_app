var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;

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
  },

  update:function(id, result, onQueryFinished){
    var id = new ObjectID(id);
    console.log(id)
    MongoClient.connect(this.url, function(err, db){
      if(db){
        var collection = db.collection('places');
        collection.update({_id: id}, {$set: result });
        collection.find({_id: id}).toArray(function(err, docs){
          onQueryFinished(docs);
        });
      }
    });
  }

}

module.exports = MapQuery;
