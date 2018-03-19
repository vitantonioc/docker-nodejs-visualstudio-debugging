var express = require('express');
var expressHandlebars = require('express-handlebars');
var http = require('http');

var PORT = 9999;

var LINES = [
    "https://picsum.photos/450/300?image=0",
    "https://picsum.photos/450/300?image=1",
    "https://picsum.photos/450/300?image=2",
    "https://picsum.photos/450/300?image=3",
];
var NLINES = [
    "photo 1",
    "photo 2",
    "photo 3",
    "photo 4",
];

var lineIndex = 0;
var lineIndexN = 0;

var app = express();
app.engine('html', expressHandlebars());
app.set('view engine', 'html');
app.set('views', __dirname);
app.get('/', function(req, res) {
    var message = LINES[lineIndex];
    var messageNumber = NLINES[lineIndex];

    lineIndex += 1;
    if (lineIndex >= LINES.length) {
        lineIndex = 0;
        lineIndexN = 0;
    }

    res.render('index', {message: message , messageNumber:messageNumber});
});

http.Server(app).listen(PORT, function() {
    console.log("HTTP server listening on port %s", PORT);
});
