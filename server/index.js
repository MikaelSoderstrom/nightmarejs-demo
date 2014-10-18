var path = require('path');
var express = require('express');

var app = express();

// Middlewares
app.use(express.static(path.join(__dirname, 'static')));

// Routes
app.get('/text', function (req, res) {
    var text = req.param('sometext') || 'nothing';

    res.status(200).send('You posted: <span id="result">' + text + '</span>');
});

// Start server
var server = app.listen(3000);