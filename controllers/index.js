var express = require('express');
var router = express.Router();
var path = require('path');

router.use('/api/history', require('./historyRouter.js'));
router.use('/api/map', require('./mapRouter.js'));

router.get('/', function(req, res){
  res.sendFile(path.join(__dirname + '/../client/build/index.html'))
})

router.get('/map', function(req, res){
  res.sendFile(path.join(__dirname + '/../client/build/mapIndex.html'))
})

router.get('/history', function(req, res){
  res.sendFile(path.join(__dirname + '/../client/build/historyIndex.html'))
})


module.exports = router;