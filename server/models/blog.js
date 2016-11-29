var mongoose = require('mongoose');


var blogPostSchema = mongoose.Schema({
    title: String,
    date: Date,
    post: String
});

var Post = mongoose.model('blogPosts', blogPostSchema);

module.exports = Post;