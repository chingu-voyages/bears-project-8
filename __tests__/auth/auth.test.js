/* eslint-disable no-underscore-dangle, import/order */
const mongoose = require('mongoose');
const { app } = require('../../server');
const request = require('supertest').agent(app);

const userData = {
	name: 'Tester',
	email: 'test@test.cc',
	password: 'pass1234',
	password2: 'pass1234',
};

describe('API - Auth', () => {
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

	describe('Auth - Register', () => {
		test('Register route should expect fullName, username. email, password and password2,', done =>
			request.post('/api/auth/register').end((err, res) => {
				if (err) throw err;
				expect(res.body.name).toBe('Name field is required');
				expect(res.body.email).toBe('Email field is required');
				expect(res.body.password).toBe('Password field is required');
				expect(res.body.password2).toBe('Confirm password field is required');
				done();
			}));

		test('User should be registered successfully', done =>
			request
				.post('/api/auth/register')
				.send(userData)
				.end((err, res) => {
					if (err) throw err;
					expect(res.status).toBe(200);
					expect(res.body.name).toBe('Tester');
					expect(res.body.email).toBe('test@test.cc');
					expect(res.body._id).toBeTruthy();
					expect(res.body.avatar).toBeTruthy();
					done();
				}));

		test('User must be unique', done =>
			request
				.post('/api/auth/register')
				.send(userData)
				.end((err, res) => {
					if (err) throw err;
					expect(res.body.email).toBe('Email is already in use');
					expect(res.status).toBe(400);
					done();
				}));
	});

	describe('Auth - Login', () => {
		test('Login route should expect email and password', done =>
			request.post('/api/auth/login').end((err, res) => {
				if (err) throw err;
				expect(res.body.email).toBe('Email field is required');
				expect(res.body.password).toBe('Password field is required');
				done();
			}));

		test('User should be logged in successfuly', done =>
			request
				.post('/api/auth/login')
				.send({
					email: 'test@test.cc',
					password: 'pass1234',
				})
				.end((err, res) => {
					if (err) throw err;
					expect(res.status).toBe(200);
					expect(res.body.message).toBe('Auth successful');
					expect(res.body.token).toBeTruthy();
					done();
				}));

		test('Email must be unique', done =>
			request
				.post('/api/auth/login')
				.send({
					email: '',
				})
				.end((err, res) => {
					if (err) throw err;
					expect(res.status).toBe(400);
					done();
				}));

		test('Passwords must match', done =>
			request
				.post('/api/auth/login')
				.send({
					email: 'test@test.cc',
					password: '12345678',
				})
				.end((err, res) => {
					if (err) throw err;
					expect(res.status).toBe(401);
					done();
				}));
	});
});
