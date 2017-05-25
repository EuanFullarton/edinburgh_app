var express = require('express');
var app = express();
var historyRouter = express.Router();

var HistoryQuery = require('../db/historyQuery');

var query = new HistoryQuery();

historyRouter.get('/', function(req, res){
  query.all(function(data){
    res.json(data);
  })
})

module.exports = historyRouter;