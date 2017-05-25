var MongoClient = require('mongodb').MongoClient;

var HistoryQuery = function(){
  this.url = 'mongodb://localhost:27017/Edinburgh'
}

HistoryQuery.prototype = {

  all:function(onQueryFinished){
    MongoClient.connect(this.url, function(err, db){
      if(db){
        var collection = db.collection('history');
        collection.find().toArray(function(err, docs){
          onQueryFinished(docs);
        });
      }
    });
  }

}

module.exports = HistoryQuery;