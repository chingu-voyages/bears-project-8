/* eslint-disable no-underscore-dangle, import/order */
const mongoose = require('mongoose');
const { app } = require('../../server');
const request = require('supertest').agent(app);

const createToken = require('../../utils/createToken');

const userData = {
	id: '5c4e0f3cf936ff053883c599',
	name: 'Tester',
	email: 'test@test.cc',
	password: 'pass1234',
	password2: 'pass1234',
};

describe('API - User', () => {
	let token;
	let user;
	let userId;

	beforeAll(done => {
		request
			.post('/api/auth/register')
			.send(userData)
			.end((err, { body }) => {
				// Some prop juggling to avoid calling two endpoints here - ugly but necessary
				body.id = body._id; // JWT decode expects id not _id
				token = createToken(body, process.env.JWT_SECRET, '1h'); // create test token
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
		test('It should require authorization', () =>
			request.put('/api/user/:id').then(response => {
				expect(response.statusCode).toBe(401);
			}));

		// test('If no data is passed a 400 status should be returned with error', done =>
		//      user.name = req.body.name ;
		// 	request
		// 		.put(`/api/user/nodata`)
		// 		.set('Authorization', token)
		// 		.end((err, res) => {
		// 			if (err) throw err;
		// 			expect(res.status).toBe(400);
		// 			expect(res.user.name).toBe('User name is required');
		// 			done();
		// 		}));

		// test('If an invalid user ID is passed a 404 error should be returned', done =>
		// 	request
		// 		.put('/api/user/badID')
		// 		.set('Authorization', token)
		// 		.send(userData)
		// 		.end((err, res) => {
		// 			if (err) throw err;
		// 			expect(res.body.message).toBe('User not found');
		// 			expect(res.status).toBe(404);
		// 			done();
		// 		}));

		// 	test('If a valid user ID is passed, that user should be updated', done => {
		// 		request
		// 			.put(`/api/user/${userId}`)
		// 			.set('Authorization', token)
		// 			.send({
		// 				id: '5c4e0f3cf936ff053883c599',
		// 			})
		// 			.end((err, res) => {
		// 				if (err) throw err;
		// 				expect(res.status).toBe(200);
		// 				expect(res.name).toBe('User updated');
		// 				expect(res.success).toBeTruthy();
		// 				done();
		// 			});
		// 	});
		// });

		// test('If a valid user ID is passed, that image should be updated', done => {
		// 		request
		// 			.put(`/api/user/${userId}`)
		// 			.set('Authorization', token)
		// 			.send({
		// 				url:
		// 			})
		// 			.end((err, res) => {
		// 				if (err) throw err;
		// 				expect(res.status).toBe(200);
		// 				expect(res.name).toBe('Image updated');
		// 				expect(res.success).toBeTruthy();
		// 				done();
		// 			});
		// 	});
		// });

		// describe('User - Delete', () => {
		// 	test('It should require authorization', () =>
		// 		request.delete('/api/user/:id').then(response => {
		// 			expect(response.statusCode).toBe(401);
		// 		}));

		// test('If an invalid user ID is passed a 404 error should be returned', done =>
		// 	request
		// 		.delete('/api/user/nothing')
		// 		.set('Authorization', token)
		// 		.end((err, res) => {
		// 			if (err) throw err;
		// 			expect(res.status).toBe(404);
		// 			expect(res.body.message).toBe('User not found');
		// 			done();
		// 		}));

		// test('If a valid user ID is passed, that user should be deleted', done => {
		// 	request
		// 		.delete(`/api/user/${userId}`)
		// 		.set('Authorization', token)
		// 		.end((err, res) => {
		// 			if (err) throw err;
		// 			expect(res.status).toBe(200);
		// 			expect(res.body.success).toBeTruthy();
		// 			done();
		// 		});
		// });
	});
});
