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






mongoose.connect('mongodb://localhost/portfolio');

var blogPostSchema = mongoose.Schema({
    title: String,
    date: Date,
    post: String
});

var Post = mongoose.model('blogPosts', blogPostSchema);



var portfolioSchema = mongoose.Schema({
    title: String,
    description: String,
    imgUrl: String,
    url: String
});

var Project = mongoose.model('portfolioProjects', portfolioSchema);


var userSchema = mongoose.Schema({
    email: String,
    password: String,
    firstName: String,
    lastName: String
});

var User = mongoose.model('users', userSchema);




// Handling requests to blog URL

app.get('/blog', function(req, res) {
    Post.find(function(err, blogs) {
        if(err) {
            res.status(500).send()
        }
        else {
            res.send(blogs)
        }
    })
});

app.delete('/blog/:id', function(req, res) {
   var passedId = req.params.id;
    Post.findOneAndRemove({_id: passedId}, function(err, removed) {
        if(err) {
            console.log(err);
            res.status(500).send
        }
        Post.find(function(err, blogs) {
            if(err) {
                res.status(500).send()
            }
            else {
                res.send(blogs)
            }
        })
    })

});

app.post('/blog', function(req, res) {
    var title = req.body.title;
    var date = req.body.date;
    var post = req.body.post;

    var newBlogPost = new Post({
            title: title,
            date: date,
            post: post
        });
    newBlogPost.save(function(err, savedItem) {
        if(err) {
            res.status(500).send()
        } else {
            res.status(200).send()
        }
    })
});


// Handling requests to portfolio


app.get('/portfolio', function(req, res) {
    Project.find(function(err, projects) {
        if(err) {
            res.status(500).send()
        } else {
            res.send(projects)
        }
    })
});

app.post('/portfolio', function(req, res) {
    var title = req.body.title;
    var description = req.body.description;
    var imgUrl = req.body.imgUrl;
    var url = req.body.url;

    var newProject = new Project({
        title: title,
        description: description,
        imgUrl: imgUrl,
        url: url
    });
    newProject.save(function(err, savedItem) {
        if(err) {
            res.status(500).send()
        } else {
            console.log(savedItem);
            res.status(200).send()
        }
    })
});

app.delete('/portfolio/:id', function(req, res) {
    var passedId = req.params.id;
    Project.findOneAndRemove({_id: passedId}, function (err, removed) {
        if (err) {
            console.log(err);
            res.status(500).send(err)
        }
        Project.find(function(err, projects) {
            if(err) {
                res.status(500).send()
            } else {
                console.log(removed.title + ' was removed.')
                res.send(projects)
            }
        })
    })
});

app.listen(8080);
