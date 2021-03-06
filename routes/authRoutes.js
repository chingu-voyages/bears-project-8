const express = require('express');
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');

const User = require('../models/User');

// Load input validation
const validateRegisterInput = require('../utils/validators').register;
const validateLoginInput = require('../utils/validators').login;

const createToken = require('../utils/createToken');

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
			const avatar = `https://${gravatar.url(email, {
				s: '200', // Size
				r: 'pg', // Rating
				d: 'mp', // Default
			})}`;
			const newUser = new User({
				name,
				email,
				avatar,
				password,
			});

			// generate a salt and hash
			return bcrypt.genSalt(saltRounds, (error, salt) => {
				if (error) throw error;

				return bcrypt.hash(newUser.password, salt, (err, hash) => {
					if (err) throw err;

					newUser.password = hash;

					return newUser
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
		.populate('friends')
		.then(user => {
			if (!user) {
				errors.email = 'A user with that email does not exist';
				return res.status(404).json(errors);
			}
			const friendsDetails = user.friends.map(friend => ({
				id: friend.id,
				name: friend.name,
				avatar: friend.avatar,
			}));
			const payload = {
				id: user._id,
				name: user.name,
				email: user.email,
				avatar: user.avatar,
				about: !!user.about && user.about,
				goals: !!user.goals && user.goals,
				friends: friendsDetails,
			};
			return bcrypt.compare(req.body.password, user.password, (err, result) => {
				if (err || !result) {
					return res.status(401).json({
						password: 'Incorrect password',
					});
				}
				const token = createToken(payload, process.env.JWT_SECRET, '1h');

				return res.status(200).json({
					message: 'Auth successful',
					token,
				});
			});
		})
		.catch(err => res.status(400).json(err));
});

module.exports = router;
