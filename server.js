var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('client/build'));

app.use(require('./controllers/index'))

app.listen(3000, function() {
  console.log("App running")
})
