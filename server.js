var express = require('express');
var app = express();


app.use(express.static(__dirname + '/src'));
app.use(express.static(__dirname + '/bower_components/'));


var server = app.listen(3000, function() {
  console.log('Example app listening on port 3000');
});

app.get('/', function(req, res) {
  res.sendfile('index.html');
});
