var mongoose = require('mongoose');

var portfolioSchema = mongoose.Schema({
    title: String,
    description: String,
    imgUrl: String,
    url: String
});

var Project = mongoose.model('portfolioProjects', portfolioSchema);

module.exports = Project;