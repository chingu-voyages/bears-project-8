const express = require('express');
const passport = require('passport');

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
router.post('/create', passport.authenticate('jwt', { session: false }), (req, res) => {
	req.body.user = req.user._id.toString();
	const { errors, isValid } = validateHabitsInput(req.body);
	// Validate request body
	if (!isValid) return res.status(400).json(errors);

	const { user, name, description, type, difficulty, tags, frequency } = req.body;

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
		.then(habit => res.json({ success: true, habit }))
		.catch(err => res.status(401).json({ err }));
});

/**
 * @route   PATCH api/habit/:id/log
 * @desc    Logs a habit as completed at a certain time
 * @access  Private
 */
router.patch('/:id/log', passport.authenticate('jwt', { session: false }), (req, res) => {
	// Logtime is sent with request, or defaults to now
	const logTime = req.body.logTime ? req.body.logTime : Date.now();

	Habit.findById(req.params.id)
		.then(habit => {
			// Check whether habit belongs to current authenticated user
			if (habit.user.toHexString() !== req.user.id) {
				return res.status(401).json({ message: 'Unauthorized' });
			}
			// Add logTime to top of habit log
			habit.log.unshift(logTime);
			return habit
				.save()
				.then(updated => res.status(200).json({ success: true, habit: updated }));
		})
		.catch(() => res.status(404).json({ message: 'Habit not found' }));
});

/**
 * @route   DELETE api/habit/:id/log/:index
 * @desc    Deletes a habit's log at a particular index
 * @access  Private
 */
router.delete('/:id/log/:index', passport.authenticate('jwt', { session: false }), (req, res) =>
	Habit.findById(req.params.id)
		.then(habit => {
			// Check whether habit belongs to current authenticated user
			if (habit.user.toHexString() !== req.user.id) {
				return res.status(401).json({ message: 'Unauthorized' });
			}
			const logIndex = parseInt(req.params.index, 10);
			// Sanity check on index parameter
			if (logIndex < 0 || logIndex > habit.log.length - 1) {
				return res.status(400).json({ message: 'Log index is invalid' });
			}
			// Remove log entry at specified index
			habit.log.splice(logIndex, 1);
			return habit
				.save()
				.then(updated => res.status(200).json({ success: true, habit: updated }));
		})
		.catch(() => res.status(404).json({ message: 'Habit not found' }))
);

/**
 * @route   DELETE api/habit/:id
 * @desc    Deletes habit
 * @access  Private
 */
router.delete('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
	Habit.findById(req.params.id)
		.then(habit => {
			// Check whether habit belongs to current authenticated user
			// toHexString - 24 byte hex string representation of MongoDB ObjectID
			if (habit.user.toHexString() !== req.user.id) {
				return res.status(401).json({ message: 'Unauthorized' });
			}

			// Delete the habit
			return habit.remove().then(() => res.json({ success: true, habit }));
		})
		.catch(() => res.status(404).json({ message: 'Habit not found' }));
});

/**
 * @route   PUT api/habit/:id
 * @desc    Updates habit
 * @access  Private
 */
router.put('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
	const { errors, isValid } = validateHabitsInput(req.body);
	// Validate request body
	if (!isValid) return res.status(400).json(errors);

	const { name, description, type, difficulty, tags, frequency } = req.body;

	return Habit.findById(req.params.id)
		.then(habit => {
			// Check whether habit belongs to current authenticated user
			// toHexString - 24 byte hex string representation of MongoDB ObjectID
			if (habit.user.toHexString() !== req.user.id) {
				return res.status(401).json({ message: 'Unauthorized' });
			}
			/* eslint-disable no-param-reassign */
			habit.name = name;
			habit.description = description;
			habit.type = type;
			habit.difficulty = difficulty;
			habit.tags = tags;
			habit.frequency = frequency;

			/* eslint-enable */
			return habit
				.save()
				.then(updated => res.status(200).json({ success: true, habit: updated }));
		})
		.catch(() => res.status(404).json({ message: 'Habit not found' }));
});

module.exports = router;
