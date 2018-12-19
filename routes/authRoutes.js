const express = require('express');
const gravatar = require('gravatar');
const bcrypt = require('bcrypt');
const passport = require('passport');
const jwt = require('jsonwebtoken');

const User = require('../models/User');

// Load input validation
const validateRegisterInput = require('../utils/validators').register;
const validateLoginInput = require('../utils/validators').login;

const router = express.Router();
const saltRounds = 10;
const payload = {
	id: User._id,
	name: User.name,
	email: User.email,
	avatar: User.avatar,
};

/**
 * @route   POST api/auth/register
 * @desc    Registers User
 * @access  Public
 */
router.post('/register', (req, res) => {
	const { errors, isValid } = validateRegisterInput(req.body);

	// Validate request body
	if (!isValid) return res.status(400).json(errors);

	return User.findOne({
		email: req.body.email,
	})
		.then(user => {
			if (user) {
				// Already registered
				errors.email = 'Email is already in use';
				return res.status(400).json(errors);
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
						.catch(e => res.status(400).json(e));
				});
			});
		})
		.catch(err => res.status(400).json(err));
});

/**
 * @route   POST api/auth/login
 * @desc    Login  User
 * @access  Public
 */

router.post('/login', (req, res) => {
	const { errors, isValid } = validateLoginInput(req.body);

	if (!isValid) return res.status(400).json(errors);

	return User.findOne({
		email: req.body.email,
	})
		.then(user => {
			if (!user) {
				errors.email = 'User not found';
				return res.status(404).json({ message: 'User not found', errors });
			}
			bcrypt.compare(req.body.password, user.password, (err, result) => {
				if (err) {
					return res.status(401).json({
						message: 'Unauthorized. Access denied to invalid credentials',
					});
				} else if (result) {
					const token = jwt.sign(
						{
							payload,
						},
						process.env.JWT_SECRET,
						{
							expiresIn: '2h',
						}
					);
					return res.status(200).json({
						message: 'Auth successful',
						token: token,
					});
				}
			});
		})
		.catch(err => res.status(400).json(err));
});

module.exports = router;
