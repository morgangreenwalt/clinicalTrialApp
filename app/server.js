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

var zendesk = new Zendesk({
    url: 'https://clinicaltrial.zendesk.com', 
    email: 'clinicalTrialApp@gmail.com', 
    token: 'bsYPyw55OYwo1ruXDdE2QUwOXeDpKHZItFHNWPsC' 
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

app.get('/api/zendesk/newTicket/:comment/:name/:email', function (req, res) {
    console.log('route is right');
    zendesk.tickets.create({
        subject: 'test subject',
        comment: {
          body: 'QUESTION: '+req.params.comment+'\n\nNAME: '+req.params.name+'\nEMAIL: '+req.params.email
        }
      }).then(function(result){
        console.log(result);
        res.send(result);
      }).catch((err) => console.log(err));
        
});

app.get('*', function (request, response){
    // response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
    response.sendFile(path.resolve(__dirname, 'index.ios.js'))
  });

app.get('/api/faq', function (req, res) {
    console.log("Im here!!!")
    // console.log(Faq.find({}));
    Faq.find({}, function(error, doc){
        if (error) {
            console.log(error);
        }
        else {
            // console.log(doc);
            res.json(doc);
        }
    });

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