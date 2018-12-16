// This option allows the use of a custom global setup module which exports an async function that is triggered once before all test suites.
//  This function gets Jest's globalConfig object as a parameter.
const mongoose = require('mongoose');
const { app } = require('../server');

module.exports.server = app.listen(4001, err => {
	if (err) return err;
	return console.log('Test server up and running on port 4000');
});

module.exports = async () => {
	console.log('beforeAll');
	const db = await mongoose.connect(
		'mongodb://test:test123@ds127624.mlab.com:27624/habit-app-test',
		{ useNewUrlParser: true }
	);

	if (db) {
		console.info('Connected to TEST MongoDB');
	} else {
		console.error('Connection to MongoDB failed');
	}
};
