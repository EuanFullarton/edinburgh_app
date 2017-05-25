var express = require('express');
var router = express.Router();
var path = require('path');

router.use('/history', require('./historyRouter.js'));
router.use('/map', require('./mapRouter.js'));


router.get('/', function(req, res){
  res.sendFile(path.join(__dirname + '/../client/build/index.html'))
})

module.exports = router;