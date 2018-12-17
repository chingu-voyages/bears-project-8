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
	// Difficulty of the habit: Trivial, Easy, Medium, Hard, Epic
	difficulty: { type: String, default: 'Medium' },
	// Positive or negative  type of habit
	type: { type: String, default: 'Negative' },

	// How often they would like to do this habit (1 time, 2 times... daily, weekly, monthly...)
	frequency: {
		times: { type: Number, default: 1 },
		period: { type: String, default: 'daily' },
	},
	// When the habit is to start, the habit is forecast from this date according to frequency
	startDate: { type: Date, default: Date.now },
	// An array of when the habit has been logged (marked as completed) through time
	log: { type: [Date] },
});

module.exports = mongoose.model('Habit', habitSchema);
