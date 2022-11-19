let express = require('express');
let app = express();
require('dotenv').config();

app.use('/json', (req, res, next) => {
    var loggerMessage = req.method + " " + req.path + " - " + req.ip;
    console.log(loggerMessage);
    next();
});

// respond with current time in JSON format - chained middleware with handler
app.get('/now', (req, res, next) => {
    req.time = new Date().toString();
    next();
    }, (req, res) => {
        res.json({time: req.time});
        });

// echo the query string
app.get('/:word/echo', (req, res) => {
    res.json({"echo": req.params.word});
})

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
