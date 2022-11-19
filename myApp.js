let express = require('express');
let app = express();
require('dotenv').config();

app.use('/json', (req, res, next) => {
    var loggerMessage = req.method + " " + req.path + " - " + req.ip;
    console.log(loggerMessage);
    next();
});

app.get('/', function(req,res) {
    res.sendFile(__dirname + '/views/index.html');
})

app.get('/json', function(req,res) {
    if (process.env.MESSAGE_STYLE == 'uppercase') {
        res.json({"message": "HELLO JSON"});
    } else {
        res.json({"message": "Hello json"});
    }
})

app.use("/public",express.static(__dirname + '/public'));

































 module.exports = app;
