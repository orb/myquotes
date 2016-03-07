var path    = require('path');
var express = require('express');
var Chance  = require('chance');
var chance  = new Chance();

var Chance = require('chance'),
    chance = new Chance();

var app = express();

app.set('view engine', 'hbs');
app.use(express.static(path.resolve(__dirname, 'public')));
console.log('DIR:', __dirname);

app.get('/', function (req, res) {

});

app.get('/einstein', function (req, res) {
  res.render('quote.hbs', {
    quote: 'Great spirits have always encountered violent opposition from mediocre minds.',
    author: 'Albert Einstein'
  });
});

app.get('/random', function (req, res) {
  res.render('quote.hbs', {
    quote: chance.paragraph(),
    author: chance.name()
  });
});

app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function () {
  //var addr = app.address();
  //console.log("Listening", addr.address + ":" + addr.port);
  console.log("Running...")
});