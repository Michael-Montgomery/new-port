var express = require('express');
var mongoose = require('mongoose');
var cors = require('cors');
var ejs = require('ejs');
var bodyParser = require('body-parser');
var path = require('path');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');



var app = express();


app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());


var blogDb = [
    {
        title: 'some title',
        date: new Date(),
        post: 'something about mary'
    },
    {
        title: 'some title',
        date: new Date(),
        post: 'something about jane'
    },
    {
        title: 'some title',
        date: new Date(),
        post: 'something about joe'
    },
    {
        title: 'some title',
        date: new Date(),
        post: 'something about paul'
    },
    {
        title: 'some title',
        date: new Date(),
        post: 'something about lisa'
    }
];

var portfolioDb = [
    {
        title: 'Apple',
        description: 'They sell computers',
        imgUrl: 'http://www.pcmag.com/media/images/501651-apple-macbook-2016.jpg?thumb=y&width=740&height=416',
        url: 'https://www.apple.com'
    },
    {
        title: 'microsoft',
        description: 'more computers',
        imgUrl: 'https://tctechcrunch2011.files.wordpress.com/2016/07/microsoft.jpg?w=738',
        url: 'https://www.microsoft.com'
    },
    {
        title: 'Apple',
        description: 'They sell computers',
        imgUrl: 'http://www.pcmag.com/media/images/501651-apple-macbook-2016.jpg?thumb=y&width=740&height=416',
        url: 'https://www.apple.com'
    }
];




app.get('/blog', function(req, res) {
    res.status(200).send(blogDb)
});

app.get('/portfolio', function(req, res) {
    res.status(200).send(portfolioDb)
});

app.post('/blog', function(req, res) {
    blogDb.push(req.body);

});

app.post('/portfolio', function(req, res) {
    portfolioDb.push(req.body);

});

app.delete('/blog', function(req, res) {
    blogDb.splice(req.body.index, 1);
    res.send(blogDb)
});


app.listen(8080);
