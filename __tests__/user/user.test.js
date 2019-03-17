/* eslint-disable no-underscore-dangle, import/order */
const mongoose = require('mongoose');
const { app } = require('../../server');
const request = require('supertest').agent(app);

const createToken = require('../../utils/createToken');

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
			.post('/api/auth/register')
			.send(userData)
			.end((err, { body }) => {
				// Some prop juggling to avoid calling two endpoints here - ugly but necessary
				body.id = body._id; // JWT decode expects id not _id
				token = createToken(body, process.env.JWT_SECRET, '1h'); // create test token
				user = body;
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

	describe('User - Update', () => {
		test('It should require authorization', () => request.put('/api/user/:id').expect(401));

		test('If no data is passed a 200 status should be returned with warning message', done => {
			request
				.put(`/api/user/${user.id}`)
				.set('Authorization', token)
				.expect(200)
				.end((err, res) => {
					if (err) throw err;

					expect(res.body.message).toBe('No update targets provided');
					done();
				});
		});

		test('If an invalid user ID is passed a 404 error should be returned', done =>
			request
				.put(`/api/user/${mongoose.Types.ObjectId()}`)
				.set('Authorization', token)
				.expect(404)
				.end((err, res) => {
					if (err) throw err;

					expect(res.body.message).toBe('User not found');
					done();
				}));

		test('If a valid user ID is passed, that user should be updated', done => {
			request
				.put(`/api/user/${user.id}`)
				.send({ imgUrl: 'https://test-img-url.jpg' })
				.set('Authorization', token)
				.expect(200)
				.end((err, res) => {
					if (err) throw err;

					expect(res.body.message).toBe('User updated successfully');
					expect(res.body.user.avatar).toBe('https://test-img-url.jpg');
					done();
				});
		});
	});

	describe('User - Get profile', () => {
		test('should return user data when valid :id is provided', done => {
			request
				.get(`/api/user/${user.id}`)
				.expect(200)
				.end((err, res) => {
					if (err) throw err;

					expect(res.body.user.id).toEqual(user.id);
					done();
				});
		});
	});

	describe('User - Delete', () => {
		test('It should require authorization', () => request.delete('/api/user/:id').expect(401));

		test('If an invalid user ID is passed a 404 error should be returned', done =>
			request
				.delete(`/api/user/${mongoose.Types.ObjectId()}`)
				.set('Authorization', token)
				.expect(404)
				.end((err, res) => {
					if (err) throw err;

					expect(res.body.message).toBe('User not found');
					done();
				}));

		test('If a valid user ID is passed, that user should be deleted', done =>
			request
				.delete(`/api/user/${user.id}`)
				.set('Authorization', token)
				.expect(200)
				.end((err, res) => {
					if (err) throw err;

					expect(res.body.message).toBe('User deleted successfully');
					done();
				}));
	});
});
