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

module.exports.createHabit = ({ user, name, description, type, difficulty, tags, frequency }) => {
	const errors = {};
	const types = ['Positive', 'Negative'];
	const diffs = ['Trivial', 'Easy', 'Medium', 'Hard', 'Epic'];
	const periods = ['Daily', 'Weekly', 'Monthly'];

	name = !isEmpty(name) ? name : '';
	description = !isEmpty(description) ? description : '';
	type = !isEmpty(type) ? type : '';
	difficulty = !isEmpty(difficulty) ? difficulty : '';

	if (user && !validator.isMongoId(user)) errors.user = 'Invalid user ID';
	if (!validator.isLength(name, { min: 2, max: 30 }))
		errors.name = 'Habit name must be between 2 and 30 characters!';
	if (validator.isEmpty(name)) errors.name = 'Habit name field is required';
	if (tags && tags.length > 4) errors.tags = "Habit can't have more than 4 tags";
	if (type && !validator.isIn(type, types)) errors.type = 'Habit must be Positive or Negative';
	if (description && !validator.isLength(description, { min: 5, max: 120 }))
		errors.description = 'Habit description must be between 5 and 120 characters!';
	if (frequency && !validator.isIn(frequency.period, periods))
		errors.frequency = 'Frequency period of habit must be one of accepted values';
	if (frequency && (frequency.times < 1 || frequency.times > 100))
		errors.frequency = 'Frequency times must be between 1 and 100';
	if (difficulty && !validator.isIn(difficulty, diffs))
		errors.difficulty = 'Type of habit must be one of accepted values';

	return { errors, isValid: isEmpty(errors) };
};

module.exports.login = ({ email, password }) => {
	const errors = {};
	email = !isEmpty(email) ? email : '';
	password = !isEmpty(password) ? password : '';

	if (!validator.isEmail(email)) errors.email = 'Email is invalid';

	if (validator.isEmpty(email)) errors.email = 'Email field is required';

	if (!validator.isLength(password, { min: 8, max: 32 }))
		errors.password = 'Password must be between 8 and 32 characters!';

	if (validator.isEmpty(password)) errors.password = 'Password field is required';

	return { errors, isValid: isEmpty(errors) };
};
