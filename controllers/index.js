var express = require('express');
var router = express.Router();
var path = require('path');

router.use('/api/history', require('./historyRouter.js'));
router.use('/api/map', require('./mapRouter.js'));
router.use('/api/favs', require('./favRouter.js'));

router.get('/', function(req, res){
  res.sendFile(path.join(__dirname + '/../client/build/index.html'))
})


module.exports = router;
