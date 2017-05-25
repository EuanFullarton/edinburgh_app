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

module.exports = mapRouter;