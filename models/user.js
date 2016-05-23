var restful = require('node-restful');
var mongoose = require('mongoose');

//create schema
var userSchema = new mongoose.Schema({
	id_user: String,
	name: String,
	email: String,
	password: String
});

//Return user model
module.exports = restful.model('User', userSchema);
