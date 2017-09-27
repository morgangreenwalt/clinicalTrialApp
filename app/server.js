// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var request = require("request");
var path = require("path");
var Zendesk = require('zendesk-node-api');

// Sets up the Express App
var app = express();
var PORT = process.env.PORT || 3000;

// requiring faq model
var Faq = require('./models/Faq.js');
var Article = require('./models/Article.js');

var zendesk = new Zendesk({
 url: 'https://clintrial.zendesk.com', // https://example.zendesk.com 
 email: 'ryanglennarnett@gmail.com', // me@example.com 
 token: 'nv3iDcCAMTWVb4r58yGs9i6YK4gsjZuGLPBysrIX' // hfkUny3vgHCcV3UfuqMFZWDrLKms4z3W2f6ftjPT 
});


// Set mongoose to leverage built in JavaScript ES6 Promises
mongoose.Promise = Promise;

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("public"));

// mLab Heroku Connection
// mongoose.connect("mongodb://heroku_73sw5d1s:j1f5g4f7m1v3rvu7bfamvq26i1@ds129344.mlab.com:29344/heroku_73sw5d1s");
// var db = mongoose.connection;

// Database configuration with mongoose (Local connection)
mongoose.connect("mongodb://localhost/clinical_trial_db");
// mongoose.connect("mongodb://localhost/newsScraping");

var db = mongoose.connection;

// Require in routes
require("./controllers/routes.js")(app);

app.get('*', function (request, response){
    // response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
    response.sendFile(path.resolve(__dirname, 'index.ios.js'))
  });


// Show any mongoose errors
db.on("error", function(error) {
    console.log("Mongoose Error: ", error);
});

// Once logged in to the db through mongoose & on port, log a success message
db.once("open", function() {
    console.log("Mongoose connection successful.");
});
app.listen(PORT, function() {
    console.log("App running on port"+PORT+"!");
});