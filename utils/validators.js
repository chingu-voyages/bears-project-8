/* eslint-disable no-param-reassign */
const validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports.register = ({ name, email, password, password2 }) => {
	const errors = {};
	name = !isEmpty(name) ? name : '';
	email = !isEmpty(email) ? email : '';
	password = !isEmpty(password) ? password : '';
	password2 = !isEmpty(password2) ? password2 : '';

	if (!validator.isLength(name, { min: 2, max: 30 }))
		errors.name = 'Name must be between 2 and 30 characters!';

	if (validator.isEmpty(name)) errors.name = 'Name field is required';

	if (!validator.isEmail(email)) errors.email = 'Email is invalid';

	if (validator.isEmpty(email)) errors.email = 'Email field is required';

	if (!validator.isLength(password, { min: 8, max: 32 }))
		errors.password = 'Password must be between 8 and 32 characters!';

	if (validator.isEmpty(password)) errors.password = 'Password field is required';

	if (!validator.equals(password, password2)) errors.password2 = "Passwords don't match";

	if (validator.isEmpty(password2)) errors.password2 = 'Confirm password field is required';

	return { errors, isValid: isEmpty(errors) };
};

module.exports.createHabit = ({ name, description, type, difficulty, tags, frequency }) => {
	const errors = {};
	name = !isEmpty(name) ? name : '';
	description = !isEmpty(description) ? description : '';
	type = !isEmpty(type) ? type : '';
	difficulty = !isEmpty(difficulty) ? difficulty : '';
	tags = !isEmpty(tags) ? tags : '';
	frequency = !isEmpty(frequency) ? frequency : '';

	if (!validator.isLength(name, { min: 2, max: 30 }))
		errors.name = 'Habit name must be between 2 and 30 characters!';
	if (validator.isEmpty(name)) errors.name = 'Habit name field is required';

	return { errors, isValid: isEmpty(errors) };
};
