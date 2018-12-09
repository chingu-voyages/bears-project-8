const mongoose = require('mongoose');

const { Schema } = mongoose;

// Create User schema
const userSchema = new Schema({
	name: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true },
	avatar: { type: String, required: true },
	// to record the date when the user registered
	dateJoined: {
		type: Date,
		required: true,
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
