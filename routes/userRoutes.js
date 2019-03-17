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
	User.findById(req.params.id).then(user => {
		if (!user) {
			return res.status(404).json({ message: 'User not found' });
		}
		if (user._id.toHexString() !== req.user._id.toHexString()) {
			return res.status(401).json({ message: 'Unauthorized' });
		}

		if (!Object.keys(req.body).length > 0) {
			return res.status(200).json({ message: 'No update targets provided' });
		}

		// TODO: Run validation for name
		// image URL validation
		if (req.body.imgUrl) {
			const validUrl = validator.isURL(req.body.imgUrl, {
				protocols: ['http', 'https'],
				require_protocol: true,
				require_tld: true,
			});
			if (!validUrl) {
				return res.status(400).json({ imgUrl: 'Please enter a valid image URL' });
			}

			user.avatar = req.body.imgUrl;
		}

		return user
			.save()
			.then(savedUser =>
				res.status(200).json({ message: 'User updated successfully', user: savedUser })
			)
			.catch(err => res.status(400).json({ message: 'User not updated', err }));
	})
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
	User.findById(req.user._id)
		.populate('friends')
		.then(user => {
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
			const token = createToken(payload, process.env.JWT_SECRET, '1h');

			return res.status(200).json({
				message: 'Auth successful',
				token,
			});
		});
});

/**
 * @route   GET user/:id
 * @desc    Returns user data
 * @access  Public
 */
router.get('/:id', (req, res) =>
	User.findById(req.params.id)
		.populate('friends')
		.then(user => {
			if (!user) {
				return res.status(404).json({ error: "We couldn't find that user" });
			}
			let friendsDetails = {};
			if (user.friends && user.friends.length > 0) {
				friendsDetails = user.friends.map(friend => ({
					id: friend.id,
					name: friend.name,
					avatar: friend.avatar,
				}));
			}

			const payload = {
				id: user._id,
				name: user.name,
				email: user.email,
				avatar: user.avatar,
				about: !!user.about && user.about,
				goals: !!user.goals && user.goals,
				friends: friendsDetails,
			};

			return res.status(200).json({ user: payload });
		})
);

/**
 * @route   POST user/addfriend
 * @desc    Adds a friend connection to the user's profile
 * @access  Private
 */
router.post('/addfriend', passport.authenticate('jwt', { session: false }), (req, res) => {
	// TODO: email validation

	// Find the friend
	User.findOne({ email: req.body.email })
		.then(friend => {
			if (!friend) {
				return res
					.status(404)
					.json({ email: `We couldn't find a user with email ${req.body.email}` });
			}

			// Access current user
			return User.findById(req.user._id).then(user => {
				// Check if friend is already in friends list
				const friendsStrings = user.friends.map(fr => fr.toHexString());
				if (friendsStrings.includes(friend._id.toHexString()))
					return res.status(400).json({ email: 'Friend already added.' });

				// Add friend to friends list
				user.friends.push(friend.id);
				return user.save().then(savedUser =>
					User.populate(savedUser, { path: 'friends' }).then(populatedUser => {
						const friends = populatedUser.friends.map(fr => ({
							id: fr.id,
							name: fr.name,
							avatar: fr.avatar,
						}));
						res.status(200).json({
							message: 'Friend added successfully',
							friends,
						});
					})
				);
			});
		})
		.catch(err => res.status(400).json({ message: 'Friend was not added', err }));
});

module.exports = router;
