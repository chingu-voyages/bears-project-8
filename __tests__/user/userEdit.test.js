const mongoose = require('mongoose');
const { app } = require('../../server');
const request = require('supertest').agent(app);

const userData = {
	name: 'Tester',
	email: 'test@test.cc',
	password: 'pass1234',
	password2: 'pass1234',
};

describe('API - User', () => {
    let token;
    let user;

    beforeAll(done => {
		request
			.post('/api/auth/login')
			.send(userData)
			.end((err, { body }) => {
				// Some prop juggling to avoid calling two endpoints here - ugly but necessary
				body.id = body._id; // JWT decode expects id not _id
				token = createToken(body, process.env.JWT_SECRET, '1h'); // create test token
				user = body;
				habit.user = user.id;
				done();
			});
	});
	afterAll(done => {
		try {
			const { users } = mongoose.connection.collections;
			// Collection is being dropped.
			users
				.drop()
				// Connection to Mongo killed.
				.then(() => mongoose.disconnect(done));
			// Server connection closed.
			// .then(() => server.close(done));
		} catch (err) {
			console.error(err);
		}
	});