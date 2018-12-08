const mongoose = require('mongoose');
const Habit = require('./Habit');

const { Schema } = mongoose;

// Create User schema
const userSchema = new Schema({
	username: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	// to record the date when the user registered
	date: {
		type: Date,
		default: Date.now,
	},
	// habits assigned to this user
	habits: {
		type: [Habit],
	},
});

module.exports = mongoose.model('User', userSchema);
