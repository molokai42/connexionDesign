/*
var router = express.Router();

'use strict';

//var api_key = process.env.MAIL_GUN_API;
//var domain = process.env.MAIL_GUN_DOMAIN;
//var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

router.get('/', function(req, res, next) {
    var data = {
        from: 'Excited User <enricovalbuena@gmail.com>',
        to: 'enricovalbuena@gmail.com',
        subject: 'Hello',
        html: 'Testing some Mailgun awesomness!'
    };
    
    mailgun.messages().send(data, function (error, body) {
        console.log(body);
    });
 
});

router.post('/', function(req, res) {
    var subject = req.body.subject,
        name = req.body.name,
        email = req.body.email,
        message = req.body.message;

    var data = {
        from: req.body.email,
        to: process.env.EMAIL,
        subject: req.body.subject + " - " + req.body.name,
        html: req.body.name + "<br>" + req.body.phone + "<br>" + req.body.email + "<br><br>" + req.body.message + "<br><br> This was sent from your website!"
    };
    
    mailgun.messages().send(data, function (error, body) {
        console.log(body);
    });
})

module.exports = router;
*/