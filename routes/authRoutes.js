const express = require('express');
const gravatar = require('gravatar');
const bcrypt = require('bcrypt');
// const passport = require('passport');
// const jwt = require('jsonwebtoken');

const User = require('../models/User');
// Load input validation
const validateRegisterInput = require('../utils/validators').register;

const router = express.Router();
const saltRounds = 10;

/**
 * @route   POST api/auth/register
 * @desc    Registers User
 * @access  Public
 */
router.post('/register', (req, res) => {
	const { errors, isValid } = validateRegisterInput(req.body);

	// Validate request body
	if (!isValid) {
		return res.status(400).json(errors);
	}

	return User.findOne({
		email: req.body.email,
	})
		.then(user => {
			if (user) {
				// Already registered
				return res.status(400).json({ message: 'Email is already in use' });
			}

			const { name, email, password } = req.body;
			// NOTE: This will generate avatar URL without protocol
			const avatar = gravatar.url(email, {
				s: '200', // Size
				r: 'pg', // Rating
				d: 'retro', // Default
			});
			const newUser = new User({
				name,
				email,
				avatar,
				password,
			});

			// generate a salt and hash
			return bcrypt.genSalt(saltRounds, (error, salt) => {
				if (error) throw error;

				bcrypt.hash(newUser.password, salt, (err, hash) => {
					if (err) throw err;

					newUser.password = hash;
					newUser
						.save()
						.then(savedUser => res.json(savedUser))
						.catch(e => console.error(e));
				});
			});
		})
		.catch(err => res.status(400).json(err));
});

module.exports = router;
