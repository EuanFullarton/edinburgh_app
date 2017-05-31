var express = require('express');
var app = express();
var mapRouter = express.Router();

var MapQuery = require('../db/mapQuery');

var query = new MapQuery();

mapRouter.get('/', function(req, res){
  query.all(function(data){
    res.json(data);
  })
})

mapRouter.put('/:id', function(req, res) {
  var result = req.body;
  var id = req.params.id;
  query.update(id, result, function(data){
      console.log("updating");
      res.json(data);
    });
})

// mapRouter.put('/:id', function(req, res) {
//   var result = req.body;
//   query.update(req.params.id, result, function(data){
//     console.log("updating");
//     res.json(data);
//   });
// })

module.exports = mapRouter;
