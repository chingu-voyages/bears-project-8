// This option allows the use of a custom global teardown module which exports an async function that is triggered once after all test suites.
// This function gets Jest's globalConfig object as a parameter.
const mongoose = require('mongoose');
const { server } = require('./globalSetup');

// eslint-disable-next-line consistent-return
module.exports = async () => {
	console.log('afterAll');
	console.log(mongoose.connection.readyState);
	try {
		// DB is being dropped.
		await mongoose.dropDatabase();
		// Connection to Mongo killed.
		await mongoose.disconnect();
		// Server connection closed.
		await server.close();
	} catch (err) {
		return err;
	}
};
