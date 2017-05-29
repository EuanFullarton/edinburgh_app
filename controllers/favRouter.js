var express = require('express');
var app = express();
var favRouter = express.Router();

var FavQuery = require('../db/favQuery');

var query = new FavQuery();

favRouter.get('/', function(req, res){
  query.all(function(data){
    res.json(data);
  })
})

favRouter.post('/', function(req, res){
  query.add(function(data){
    res.json(data);
  })
})

module.exports = favRouter;
