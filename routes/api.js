// Dependencies
var express = require('express');
var router = express.Router();
var crypto = require('crypto');
var algorithm = 'aes-256-ctr';
var password = 'd6F3Efeq';

//Model
var Products = require('../models/product');
var User = require('../models/user');

var encrypt = function(req, res, next){
	var cipher = crypto.createCipher(algorithm, password);
	var crypted = cipher.update(req.body.password, 'utf-8', 'hex');
	crypted += cipher.final('hex');
	req.body.password = crypted;
	return next();
}

var encryptMD5 = function(req, res, next){
	var chiper = crypto.createHash('md5').update(req.body.password).digest('hex');
	req.body.password = chiper;
	return next();	
}

var decrpyt = function(text){
	var decipher = crypto.createDecipher(algorithm, password);
	var dec = decipher.update(text, 'hex', 'utf-8');
	dec += decipher.final('utf-8');
	return dec;
}

//Routes
Products.methods(['get', 'post', 'put', 'delete']);
Products.register(router, '/products');

User.methods(['get', {method: 'post', before: encryptMD5}, 'put', 'delete']);
User.register(router, '/user');


// Return router
module.exports = router;