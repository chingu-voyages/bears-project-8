/* eslint-disable no-underscore-dangle */
const http = require('http');
const request = require('supertest');
const mongoose = require('mongoose');
const { app } = require('../../server');

const userData = {
	name: 'Tester',
	email: 'test@test.cc',
	password: 'pass1234',
	password2: 'pass1234',
};

describe('API - Auth', () => {
	let server;
	const agent = request.agent(app);

	beforeAll(done => {
		server = app.listen(4000, err => {
			if (err) return done(err);
			console.info(`Listening on port ${4000}, in ${process.env.NODE_ENV} environment.`);
			return done();
		});
	});

	afterAll(done => {
		try {
			const { users } = mongoose.connection.collections;
			// Collection is being dropped.
			users
				.drop()
				// Connection to Mongo killed.
				.then(() => mongoose.disconnect())
				// Server connection closed.
				.then(() => server.close(done));
		} catch (err) {
			console.error(err);
		}
	});

	describe('Auth - Register', () => {
		test('Register route should expect fullName, username. email, password and password2,', done =>
			agent.post('/api/auth/register').end((err, res) => {
				if (err) throw err;
				expect(res.body.name).toBe('Name field is required');
				expect(res.body.email).toBe('Email field is required');
				expect(res.body.password).toBe('Password field is required');
				expect(res.body.password2).toBe('Confirm password field is required');
				done();
			}));

		test('User should be registered successfully', done =>
			agent
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
			agent
				.post('/api/auth/register')
				.send(userData)
				.end((err, res) => {
					if (err) throw err;
					expect(res.body.email).toBe('Email is already in use');
					expect(res.status).toBe(400);
					done();
				}));
	});

	describe('Auth - Login', () => {});
});
