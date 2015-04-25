//gettin started with express and bodyParser
var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var app = express();
var methodOverride = require('method-override');
var mongoose = require('mongoose'); //a mongoDB object modeling tool designed to work in an asynochronous environment

//controllers
var event = require("./controller/event");

//db
mongoose.connect('mongodb://admin:admin@ds053798.mongolab.com:53798/evb');
//each schema maps to a mongoDB collection and defines the shape of the documents within that collection


//middleware bridges the OS or DB and applications, especially on a network

app.use(express.static(__dirname + '/public'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(methodOverride('_method'));
app.set('view engine', 'jade');
app.use(event);



// app.listen(process.env.port || 3000);

//localhost 
var server = app.listen(3000, function (){
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
