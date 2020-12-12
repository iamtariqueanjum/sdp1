var express = require('express');
var http = require('http');
var path = require('path');
var logger = require('morgan');
var session = require('express-session');
var FileStore = require('session-file-store')(session);
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var passport = require('passport');
var config = require('./config');

var userRoute = require('./routes/user.route');
 
// connect to mongoDB 
const url = config.mongoUrl;
const connect = mongoose.connect(url);

connect.then((db) => {
    console.log("Connected correctly to server");
}, (err) => { console.log(err); });


var port = 3000;
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(session({
  name: 'session-id',
  secret: '12345-67890-09876-54321',
  saveUninitialized: false,
  resave: false,
  store: new FileStore()
}));

app.use(passport.initialize());
app.use(passport.session());

// add middleware 
app.use(bodyParser.json());
app.use('/users', userRoute);

// set public resoures folder
app.use(express.static(__dirname + '/public'));

// set your first route
'/',app.get( (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

var server = http.createServer(app);
server.listen(port, () => {
    console.log('Server is starting = ' + port);
});

