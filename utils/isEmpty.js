// Check if value provided is an empty object or empty string
const isEmpty = obj =>
	obj === undefined ||
	obj === null ||
	(typeof obj === 'object' && Object.keys(obj).length === 0) ||
	(typeof obj === 'string' && obj.trim().length === 0);

module.exports = isEmpty;
