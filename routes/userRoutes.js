const express = require('express');
const passport = require('passport');
const validator = require('validator');

const router = express.Router();
const User = require('../models/User');
const createToken = require('../utils/createToken');

/**
 * @route   PUT user/:id
 * @desc    update User (name+avatar)
 * @access  Private
 */
router.put('/:id', passport.authenticate('jwt', { session: false }), (req, res) =>
	User.findById(req.params.id)
		.then(user => {
			if (!user) {
				return res.status(404).json({ message: 'User not found' });
			}
			if (user._id.toHexString() !== req.user._id.toHexString()) {
				return res.status(401).json({ message: 'Unauthorized' });
			}

			if (req.body.name) {
				// Run validation for name
				user.name = req.body.name;
			}
			// image URL validation
			if (req.body.imgUrl) {
				const validUrl = validator.isURL(req.body.imgUrl, {
					protocols: ['http', 'https'],
					require_protocol: true,
					require_tld: true,
				});
				if (validUrl) {
					user.avatar = req.body.imgUrl;
				} else {
					return res.status(400).json({ message: 'Bad image URL' });
				}
			}
			if (req.body.about) {
				user.about = req.body.about;
			}
			if (req.body.goals && req.body.goals.length) {
				user.goals = req.body.goals;
			}
			return user
				.save()
				.then(savedUser =>
					res.status(200).json({ message: 'User updated successfully', user: savedUser })
				)
				.catch(err => res.status(400).json({ message: 'User not updated', err }));
		})
		.catch(err => res.status(400).json({ message: 'Bad request', err }))
);

/**
 * @route   DELETE user/:id
 * @desc    delete User
 * @access  Private
 */
router.delete('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
	User.findById(req.params.id)
		.then(user => {
			if (user._id.toHexString() !== req.user._id.toHexString()) {
				return res.status(401).json({ message: 'Unauthorized' });
			}
			return user
				.remove()
				.then(() => res.status(200).json({ message: 'User deleted successfully' }));
		})
		.catch(() => res.status(404).json({ message: 'User not found' }));
});

/**
 * @route   GET user/token
 * @desc    Returns a new token for localStorage
 * @access  Private
 */
router.get('/token', passport.authenticate('jwt', { session: false }), (req, res) => {
	const { user } = req;
	const payload = {
		id: user._id,
		name: user.name,
		email: user.email,
		avatar: user.avatar,
		about: !!user.about && user.about,
		goals: !!user.goals && user.goals,
	};
	const token = createToken(payload, process.env.JWT_SECRET, '1h');

	return res.status(200).json({
		message: 'Auth successful',
		token,
	});
});

module.exports = router;
