const mongoose = require('mongoose');

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
	dateJoined: {
		type: Date,
		default: Date.now,
	},
	// habits assigned to this user
	habits: {
		type: [mongoose.Schema.Types.ObjectId],
		ref: 'Habit',
		required: true,
	},
});

module.exports = mongoose.model('User', userSchema);
