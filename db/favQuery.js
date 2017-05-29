var MongoClient = require('mongodb').MongoClient;

var FavQuery = function(){
  this.url = 'mongodb://localhost:27017/Edinburgh'
}

FavQuery.prototype = {

  all:function(onQueryFinished){
    MongoClient.connect(this.url, function(err, db){
      if(db){
        var collection = db.collection('favs');
        collection.find().toArray(function(err, docs){
          onQueryFinished(docs);
        });
      }
    });
  }

}

module.exports = FavQuery;
