var mongoose = require('mongoose');


// var connectionString = 'mongodb://127.0.0.1:27017/webdev';

var connectionString = 'mongodb://brian:abc123@ds145790.mlab.com:45790/heroku_g477qtmg';


mongoose.Promise = global.Promise;
const client = mongoose.connect( connectionString, { useNewUrlParser: true });

//Get the default connection
var db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = db;
