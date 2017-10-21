var Faq = require("../models/Faq.js");

// / // Our scraping tools
var request = require("request");

module.exports = function(app) {


// route to receive all faq's from db
app.get('/api/faq', function (req, res) {
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

// app.get('api/zendesk/checkTickets', function (req, res) {
//     zendesk.tickets.list('sort_by=status&sort_order=desc').then(function(tickets){
//         console.log(tickets);
//       });
// });

// app.get('/api/zendesk/newTicket/:comment/:name/:email', function (req, res) {
//     console.log('route is right');
//     zendesk.tickets.create({
//         subject: 'test subject',
//         comment: {
//           body: 'QUESTION: '+req.params.comment+'\n\nNAME: '+req.params.name+'\nEMAIL: '+req.params.email
//         }
//       }).then(function(result){
//         console.log(result);
//         res.send(result);
//       });
        
// });

}