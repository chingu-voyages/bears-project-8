const express = require('express');

// Habit model
const Habit = require('../models/Habit');

// Load input validation
const validateHabitsInput = require('../utils/validators').createHabit;

const router = express.Router();

/**
 * @route   POST api/habit/create
 * @desc    Creates habit
 * @access  Private
 */
router.post('/create', (req, res) => {
	const { errors, isValid } = validateHabitsInput(req.body);
	// Validate request body
	if (!isValid) return res.status(400).json(errors);

	// TODO: Authentication
	const { name, description, type, difficulty, tags, frequency, user } = req.body;

	return new Habit({
		user,
		name,
		type,
		description,
		tags,
		difficulty,
		frequency,
	})
		.save()
		.then(habit => res.json(habit))
		.catch(err => res.status(401).json({ err }));
});

/**
 * @route   DELETE api/habit/:id
 * @desc    Deletes habit
 * @access  Private
 */
router.delete('/:id', (req, res) => {
	// TODO: Authentication
	Habit.findById(req.params.id)
		.then(habit => {
			// TODO: Check whether habit belongs to current authenticated user

			// Delete the habit
			habit.remove().then(() => res.json({ success: true }));
		})
		.catch(() => res.status(404).json({ message: 'Habit not found' }));
});

module.exports = router;
