var fs = require("fs");
var http = require('http');
var port = 8080;
var express = require('express');
var app = express();
// use router to make API calls
var router = express.Router();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// create database objects
var sqlite = require("sqlite3").verbose();
var db = new sqlite.Database("./crowdsource.db");

app.post('/api/submit', function(req, res) {
    console.log(req.body)
    var stmt = db.run("INSERT INTO diagnostics VALUES (?, ?, ?, ?, ?, ?, ?)",
        req.body.test,
        req.body.disease,
        req.body.sensitivity,
        req.body.specificity,
        req.body.notes,
        req.body.source,
        req.body.link
    );
    res.send("Worked!");
});

app.get("/api/all", function(req, res) {
    db.all("SELECT * FROM diagnostics", function(err, row) {
        res.json(err ? false : row);
    });
})

app.get("/api/browse", function(req, res) {
    db.all("SELECT Test,rowid FROM diagnostics", function(err, row) {
        res.json(err ? false : row);
    });
})

app.get("/api/tests/:test", function(req, res) {
    db.all("SELECT * FROM diagnostics WHERE (rowid= $rowid)", {$rowid : req.params.test}, function(err, row) {
        res.json(err ? false : row);
    });
})
// create HTTP server, using provided port
app.set('port', port);
app.use(express.static("./"));
http.createServer(app).listen(app.get('port'), function() {
    console.log('HTTP server listening on PORT ' + app.get('port'));
});
