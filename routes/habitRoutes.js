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
	const { name, description, type, difficulty, tags, frequency, user } = req.body;

	await new Habit({
		user,
		name,
		type,
		description,
		tags,
		difficulty,
		frequency,
	})
		.save()
		.then(post => res.json(post))
		.catch(err => res.status(401).json({ err }));
});

module.exports = router;
