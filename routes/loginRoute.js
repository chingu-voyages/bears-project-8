const express = require('express');
const bcrypt = require('bcrypt');
//const passport = require('passport');
const jwt = require('jsonwebtoken');

const User = require('../models/User');
// Load input validation
const validateRegisterInput = require('../utils/validators').register;

const router = express.Router();

/**
 * @route   POST api/auth/login
 * @desc    Login User
 * @access  Public
 */
router.post('/login', 'jwt', { session: false }, (req, res) => {
	const { errors, isValid } = validateRegisterInput(req.body);

	// Validate request body
	if (!isValid) return res.status(400).json(errors);
	return User.findOne({
		email: req.body.email,
	}).then(user => {
		if (!user) {
			return res.status(400).json({ message: 'Incorect user' });
		} else {
			bcrypt.compare(req.body.password, user.password, (err, res) => {
				if (res === true) {
					//return res.status(200).json({ message: 'Login Successful' });
					return res.json({ token: jwt.sign({ user }, secret, { expiresIn: 3600 }) });
				} else {
					return res.status(400).json({ message: 'Incorect password' });
				}
			});
		}
	});
});

module.exports = router;
