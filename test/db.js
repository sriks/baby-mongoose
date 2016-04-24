var mongoose = require('mongoose');

var setup = function() {
	mongoose.connect('mongodb://localhost/baby-mongo-tests');
}

var testUserSchema = new mongoose.Schema({
}, {timestamps: {}, strict:false });

var userModel = mongoose.model('users', testUserSchema);

module.exports = {
	'setup': setup,	
  	'User': userModel,
};



