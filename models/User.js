const mongoose = require('mongoose');

const { Schema } = mongoose;

// Create User schema
const userSchema = new Schema({
	name: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true },
	avatar: { type: String, required: true },
	dateJoined: { type: Date, default: Date.now },
	about: { type: String },
	goals: [
		{
			title: { type: String, required: true },
			description: { type: String },
		},
	],
});

module.exports = mongoose.model('User', userSchema);
