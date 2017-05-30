var express = require('express');
var app = express();
var favRouter = express.Router();
var MapItem = require('../client/src/models/mapItem');

var FavQuery = require('../db/favQuery');

var query = new FavQuery();

favRouter.get('/', function(req, res){
  query.all(function(data){
    res.json(data);
  })
})

favRouter.post('/', function(req, res){
  var fav = new MapItem({
    name: req.body.name,
    info: req.body.info,
    latlng: req.body.latlng
  });
  query.add(fav, function(results){
    res.json(results);
  })
})

favRouter.update('/:id', function(req, res) {
  query.update(req.params.id, function(){
    console.log("deleting");
  });
})

favRouter.get('/:id', function(req, res) {
  query.single(req.params.id, function(data){
    res.json(data);
  })
})

module.exports = favRouter;
