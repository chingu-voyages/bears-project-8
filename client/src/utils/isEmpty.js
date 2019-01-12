// This will return whether something is 'empty', whether an object, array or string
const isEmpty = obj =>
	obj === undefined ||
	obj === null ||
	(typeof obj === 'object' && Object.keys(obj).length === 0) ||
	(typeof obj === 'string' && obj.trim().length === 0);

module.exports = isEmpty;
