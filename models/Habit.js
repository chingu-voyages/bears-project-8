const mongoose = require('mongoose');

const { Schema } = mongoose;

// Create Habit schema
const habitSchema = new Schema({
	// Associate the habit with a user by their ID
	user: {
		type: Schema.Types.ObjectId,
		ref: 'User',
		required: true,
	},
	// The date the habit was created
	dateCreated: { type: Date, default: Date.now },
	// Name of the habit
	name: { type: String, required: true },
	// Optional description of the habit
	description: { type: String },
	// Category of the habit - chosen from defaults but stored as an array of strings
	tags: { type: [String] },
	// How often they would like to do this habit (daily, weekly, monthly...)
	frequency: { type: String, default: 'Daily' },
	// Difficulty of the habit: Trivial, Easy, Medium, Hard, Epic
	difficulty: { type: String, required: true, default: 'Medium' },
	// Positive or negative  type of habit
	type: { type: String, required: true, default: 'Negative' },
});

module.exports = mongoose.model('Habit', habitSchema);
