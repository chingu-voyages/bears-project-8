/* eslint-disable no-underscore-dangle, import/order, no-param-reassign */
const mongoose = require('mongoose');
const { app } = require('../../server');
const request = require('supertest').agent(app);

const createToken = require('../../utils/createToken');

const userData = {
	name: 'Tester',
	email: 'test1@test.cc',
	password: 'pass1234',
	password2: 'pass1234',
};

const habit = {
	name: 'Test habit',
	user: 'this should be populated below',
	tags: ['office', 'work', 'omg'],
	description: 'This is a habit',
	frequency: {
		times: 2,
		period: 'Daily',
	},
	difficulty: 'Epic',
	type: 'Passive',
	startDate: '2019-02-19',
};

describe('API - Habit', () => {
	let token;
	let user;
	let habitId;

	beforeAll(done => {
		request
			.post('/api/auth/register')
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
			const { habits, users } = mongoose.connection.collections;
			// Collection is being dropped.
			habits.drop().then(() =>
				users
					.drop()
					// Connection to Mongo killed.
					.then(() => mongoose.disconnect(done))
			);

			// Server connection closed.
			// .then(() => server.close(done));
		} catch (err) {
			console.error(err);
		}
	});

	describe('Habit - Create', () => {
		test('It should require authorization', () =>
			request.post('/api/habit/create').then(response => {
				expect(response.statusCode).toBe(401);
			}));

		test('If no data is passed a 400 status should be returned with error', done =>
			request
				.post('/api/habit/create')
				.set('Authorization', token)
				.send({ user: user.id })
				.end((err, res) => {
					if (err) throw err;
					expect(res.status).toBe(400);
					expect(res.body.name).toBe('Habit name field is required');
					done();
				}));

		test('If only a habit name is passed a new habit should be created with defaults', done =>
			request
				.post('/api/habit/create')
				.set('Authorization', token)
				.send({ user: user.id, name: 'Habit' })
				.end((err, res) => {
					if (err) throw err;
					expect(res.status).toBe(200);
					expect(res.body.habit.name).toBe('Habit');
					expect(res.body.habit.difficulty).toBe('Medium');
					expect(res.body.habit.type).toBe('Active');
					expect(res.body.habit.frequency.times).toBe(1);
					expect(res.body.habit.frequency.period).toBe('Daily');
					expect(res.body.habit._id).toBeTruthy();
					// Store habit ID for later use
					habitId = res.body.habit._id;
					done();
				}));

		test('If correct data is passed new habit should be created', done =>
			request
				.post('/api/habit/create')
				.set('Authorization', token)
				.send(habit)
				.end((err, res) => {
					if (err) throw err;
					expect(res.status).toBe(200);
					expect(res.body.habit.name).toBe('Test habit');
					expect(res.body.habit.description).toBe('This is a habit');
					expect(res.body.habit.type).toBe('Passive');
					expect(res.body.habit.frequency.times).toBe(2);
					expect(res.body.habit.frequency.period).toBe('Daily');
					expect(res.body.habit._id).toBeTruthy();
					done();
				}));
	});

	describe('Habit - Get habits', () => {
		test('It should require authorization', () =>
			request.get('/api/habit/habits').then(response => {
				expect(response.statusCode).toBe(401);
			}));

		test('It should return an array of the users habits', done =>
			request
				.get('/api/habit/habits')
				.set('Authorization', token)
				.end((err, res) => {
					if (err) throw err;
					expect(res.status).toBe(200);
					expect(res.body.habits.length).toBe(2);
					// New habits should be first in the returned awway
					expect(res.body.habits[0].name).toBe('Test habit');
					expect(res.body.habits[1].name).toBe('Habit');
					done();
				}));
	});

	describe('Habit - Log', () => {
		test('It should require authorization', () =>
			request.patch('/api/habit/bogus/log').then(response => {
				expect(response.statusCode).toBe(401);
			}));

		test('If a habit is logged with an invalid id, a 404 should be returned', done =>
			request
				.patch('/api/habit/bogus/log')
				.set('Authorization', token)
				.end((err, res) => {
					if (err) throw err;
					expect(res.status).toBe(404);
					expect(res.body.message).toBe('Habit not found');
					done();
				}));

		test('Logging the habit of another user should be unauthorized', done => {
			// Create another user
			userData.email = 'test2@test.cc';
			let token2;
			request
				.post('/api/auth/register')
				.send(userData)
				.end((err, { body }) => {
					body.id = body._id;
					token2 = createToken(body, process.env.JWT_SECRET, '1h');
					// Log habit
					request
						.patch(`/api/habit/${habitId}/log`)
						.set('Authorization', token2)
						.end((error, res) => {
							if (error) throw err;
							expect(res.status).toBe(401);
							expect(res.body.message).toBe('Unauthorized');
							done();
						});
				});
		});

		test('If a habit is logged without a time, the current time should be logged', done =>
			request
				.patch(`/api/habit/${habitId}/log`)
				.set('Authorization', token)
				.end((err, res) => {
					if (err) throw err;
					expect(res.status).toBe(200);
					expect(res.body.habit.log.length).toBe(1);
					// Expect the latest logged time to be within 15 seconds of the current time
					expect(Math.round(Date.parse(res.body.habit.log[0]) / 15000)).toBe(
						Math.round(Date.now() / 15000)
					);
					done();
				}));

		test('If a habit is logged with a specified time, that time should be logged', done =>
			request
				.patch(`/api/habit/${habitId}/log`)
				.set('Authorization', token)
				.send({ logTime: 640821600000 })
				.end((err, res) => {
					if (err) throw err;
					expect(res.status).toBe(200);
					expect(res.body.habit.log.length).toBe(2);
					// Expect the latest logged time to be the specified time
					expect(Date.parse(res.body.habit.log[0])).toBe(640821600000);
					done();
				}));

		test('If a habit log entry is deleted but the log id is invalid, 400 status should be returned', done =>
			request
				.delete(`/api/habit/${habitId}/log/999`)
				.set('Authorization', token)
				.end((err, res) => {
					if (err) throw err;
					expect(res.status).toBe(400);
					expect(res.body.message).toBe('Log index is invalid');
					done();
				}));

		test('If a habit log entry is deleted and the log id is valid, that log entry should be deleted', done =>
			request
				.delete(`/api/habit/${habitId}/log/1`)
				.set('Authorization', token)
				.end((err, res) => {
					if (err) throw err;
					expect(res.status).toBe(200);
					// only remaining log entry should be a specified time
					expect(res.body.habit.log.length).toBe(1);
					expect(Date.parse(res.body.habit.log[0])).toBe(640821600000);
					done();
				}));
	});

	describe('Habit - Update', () => {
		test('It should require authorization', () =>
			request.put('/api/habit/52').then(response => {
				expect(response.statusCode).toBe(401);
			}));

		test('If no data is passed a 400 status should be returned with error', done =>
			request
				.put(`/api/habit/${habitId}`)
				.set('Authorization', token)
				.end((err, res) => {
					if (err) throw err;
					expect(res.status).toBe(400);
					expect(res.body.name).toBe('Habit name field is required');
					done();
				}));

		test('If an invalid habit ID is passed a 404 error should be returned', done =>
			request
				.put('/api/habit/something')
				.set('Authorization', token)
				.send(habit)
				.end((err, res) => {
					if (err) throw err;
					expect(res.status).toBe(404);
					expect(res.body.message).toBe('Habit not found');
					done();
				}));

		test('If a valid habit ID is passed, that habit should be updated', done => {
			habit.name = 'New habit updated';
			request
				.put(`/api/habit/${habitId}`)
				.set('Authorization', token)
				.send(habit)
				.end((err, res) => {
					if (err) throw err;
					expect(res.status).toBe(200);
					expect(res.body.habit.name).toBe('New habit updated');
					expect(res.body.habit.description).toBe(habit.description);
					expect(res.body.success).toBeTruthy();
					done();
				});
		});
	});

	describe('Habit - Delete', () => {
		test('It should require authorization', () =>
			request.delete('/api/habit/123').then(response => {
				expect(response.statusCode).toBe(401);
			}));

		test('If an invalid habit ID is passed a 404 error should be returned', done =>
			request
				.delete('/api/habit/nothing')
				.set('Authorization', token)
				.end((err, res) => {
					if (err) throw err;
					expect(res.status).toBe(404);
					expect(res.body.message).toBe('Habit not found');
					done();
				}));

		test('If a valid habit ID is passed, that habit should be deleted', done => {
			request
				.delete(`/api/habit/${habitId}`)
				.set('Authorization', token)
				.end((err, res) => {
					if (err) throw err;
					expect(res.status).toBe(200);
					expect(res.body.success).toBeTruthy();
					done();
				});
		});

		test('If the same habit ID is passed, it should no longer exist', done => {
			request
				.delete(`/api/habit/${habitId}`)
				.set('Authorization', token)
				.end((err, res) => {
					if (err) throw err;
					expect(res.status).toBe(404);
					expect(res.body.message).toBe('Habit not found');
					done();
				});
		});
	});
});
