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
  },

  update:function(id, onQueryFinished){
    MongoClient.connect(this.url, function(err, db){
      if(db){
        var collection = db.collection('favs');
        var newId = 'ObjectId("'+id+'")'
        collection.update({"_id": newId},{"favourited": false});
        console.log(newId);
        collection.find({"_id": newId}).toArray(function(err, docs){
          onQueryFinished(docs);
        });
      }
    });
  }

}

module.exports = MapQuery;
