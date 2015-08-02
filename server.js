var express = require('express');
var app = express();


app.use(express.static(__dirname + '/src'));
app.use(express.static(__dirname + '/bower_components/'));


var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});

app.get('/', function(req, res) {
  res.sendfile('index.html');
});
