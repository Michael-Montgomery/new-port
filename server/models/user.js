var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    email: String,
    password: String,
    firstName: String,
    lastName: String
});

var User = mongoose.model('users', userSchema);


module.exports = User;