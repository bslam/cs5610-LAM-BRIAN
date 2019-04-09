// Get the dependencies

const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const app = express();
const cookieParser = require('cookie-parser');



const session = require('express-session');
const passport = require('passport');




app.use(cookieParser());
app.use(session({
  // secret: process.env.SESSION_SECRET,
  secret: 'Brian Secret',
  saveUninitialized: true,
  resave: false,
}));


app.use(session({secret: process.env.SESSION_SECRET}));

app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



// Point static path to dist -- For building -- REMOVE
//app.use(express.static(path.join(__dirname, 'public')));

app.use(express.static(path.join(__dirname, 'dist/A1')));

// CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

const port = process.env.PORT || '3200';
app.set('port', port);


// Create HTTP server
const server = http.createServer(app);
server.listen( port , () => console.log('Running on port 3200'));

// var connectionString = 'mongodb://127.0.0.1:27017/webdev';
var connectionString = 'mongodb://brian:abc123@ds145790.mlab.com:45790/heroku_g477qtmg';
var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const client = mongoose.connect( connectionString, { useNewUrlParser: true });

//Get the default connection
var db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


require('./assignment/app')(app);
