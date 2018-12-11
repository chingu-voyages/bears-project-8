const express = require('express');

const Habit = require('../models/Habit');
// Load input validation
const validateHabitsInput = require('../utils/validators').createHabit;

const router = express.Router();

/**
 * @route   POST api/habit/create
 * @desc    Creates habit
 * @access  Private
 */
router.post('/create', async (req, res) => {
	// TODO: Authentication
	const { name, description, category, frequency } = req.body;
	const newHabit = await new Habit({
		name,
		description,
		category,
		frequency,
		createdBy: '37312', // user _id here
	})
		.save()
		.catch(err => res.status(401).json({ err }));

	return newHabit;
});
