var express = require('express');
var http = require('http');
var path = require('path');
var bodyParser = require('body-parser');

var router = express();
var server = http.createServer(router);
router.use(bodyParser.json());


router.use(express.static(path.resolve(__dirname, 'views')));

router.get('/', function(req, res){
  res.sendFile('index.html');
})
.get('/:collection/:id', function(req, res){
  var collection = req.params.collection;
  var id = req.params.id;
})
.post('/:collection', function(req, res){
  
})
.put('/:collection/:id', function(req, res){
  var collection = req.params.collection;
  var id = req.params.id;
})
.delete('/:collection/:id', function(req, res){
  var collection = req.params.collection;
  var id = req.params.id;
});

server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("Quick stack backend listening at", addr.address + ":" + addr.port);
});
