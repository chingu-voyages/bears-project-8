/* eslint-disable no-underscore-dangle */
const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../../server');

describe('API - Auth', () => {
	afterAll(() => {
		console.log('Deleting test database');
		mongoose.connection.db.dropDatabase();
	});

	describe('Auth - Register', () => {
		test('Register route should expect fullName, username. email, password and password2,', done =>
			request(app)
				.post('/api/auth/register')
				.end((err, res) => {
					if (err) throw err;
					expect(res.body.name).toBe('Name field is required');
					expect(res.body.email).toBe('Email field is required');
					expect(res.body.password).toBe('Password field is required');
					expect(res.body.password2).toBe('Confirm password field is required');
					done();
				}));

		test('User should be registered successfully', done =>
			request(app)
				.post('/api/auth/register')
				.send({
					name: 'Tester',
					email: 'test@test.cc',
					password: 'pass1234',
					password2: 'pass1234',
				})
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
			request(app)
				.post('/api/auth/register')
				.send({
					name: 'Tester',
					email: 'test@test.cc',
					password: 'pass1234',
					password2: 'pass1234',
				})
				.end((err, res) => {
					if (err) throw err;

					expect(res.body.message).toBe('Email is already in use');
					expect(res.status).toBe(400);
					done();
				}));
	});

	describe('Auth - Login', () => {});
});
