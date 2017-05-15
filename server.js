var express = require('express');
var app = express();
var importedQuotes = require('./quotes');
// var importedTacos = require('./tacos');


app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.send('Quotes from Alan Watts');
});

app.get('/api/random-quote', function(req, res){
  res.send(importedQuotes.alanWattsQuotes[Math.floor(Math.random() * importedQuotes.alanWattsQuotes.length)]);
});

app.get('/api/quotes', function(req, res){
  res.send(importedQuotes.alanWattsQuotes);
});





console.log(importedQuotes.alanWattsQuotes);

var server = app.listen(3000, function () {
var port = server.address().port;
  console.log('Example app listening at http://localhost:%s', port);
});
