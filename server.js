var express = require('express');
var app = express();


app.use(express.static('client/build'));

app.use(require('./controllers/index'))

app.listen(3000, function() {
  console.log("app running")
})