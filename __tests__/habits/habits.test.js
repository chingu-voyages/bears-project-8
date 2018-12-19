/* eslint-disable no-underscore-dangle, import/order */
const mongoose = require('mongoose');
const { app } = require('../../server');
const request = require('supertest').agent(app);

const habit = {
	name: 'Test habit',
	user: '5c0cee8d8c452f13fbfe2281',
	description: 'This is a habit',
	tags: ['office', 'work', 'omg'],
	type: 'Positive',
	frequency: {
		times: 2,
		period: 'Daily',
	},
	difficulty: 'Epic',
};

describe('API - Habit', () => {
	afterAll(done => {
		try {
			const { habits } = mongoose.connection.collections;
			// Collection is being dropped.
			habits
				.drop()
				// Connection to Mongo killed.
				.then(() => mongoose.disconnect(done));
			// Server connection closed.
			// .then(() => server.close(done));
		} catch (err) {
			console.error(err);
		}
	});

	// Store generated habit ID for later use
	let habitId;

	describe('Habit - Create', () => {
		test('If no data is passed a 400 status should be returned with error', done =>
			request
				.post('/api/habit/create')
				.send({ user: '5c0cee8d8c452f13fbfe2281' })
				.end((err, res) => {
					if (err) throw err;
					expect(res.status).toBe(400);
					expect(res.body.name).toBe('Habit name field is required');
					done();
				}));

		test('If only a habit name is passed a new habit should be created with defaults', done =>
			request
				.post('/api/habit/create')
				.send({ user: '5c0cee8d8c452f13fbfe2281', name: 'Habit' })
				.end((err, res) => {
					if (err) throw err;
					expect(res.status).toBe(200);
					expect(res.body.name).toBe('Habit');
					expect(res.body.difficulty).toBe('Medium');
					expect(res.body.type).toBe('Negative');
					expect(res.body.frequency.times).toBe(1);
					expect(res.body.frequency.period).toBe('Daily');
					// Store habit ID for later use
					expect(res.body._id).toBeTruthy();
					habitId = res.body._id;
					done();
				}));

		test('If correct data is passed new habit should be created', done =>
			request
				.post('/api/habit/create')
				.send(habit)
				.end((err, res) => {
					if (err) throw err;
					expect(res.status).toBe(200);
					expect(res.body.name).toBe('Test habit');
					expect(res.body.description).toBe('This is a habit');
					expect(res.body.type).toBe('Positive');
					expect(res.body.frequency.times).toBe(2);
					expect(res.body.frequency.period).toBe('Daily');
					expect(res.body._id).toBeTruthy();
					done();
				}));
	});

	describe('Habit - Log', () => {
		// TODO: Add authentication tests

		test('If a habit is logged without a time, the current time should be logged', done =>
			request.post(`/api/habit/${habitId}/log`).end((err, res) => {
				if (err) throw err;
				expect(res.status).toBe(200);
				expect(res.body.log.length).toBe(1);
				// Expect the latest logged time to be within 10 seconds of the current time
				expect(Math.round(Date.parse(res.body.log[0]) / 10000)).toBe(
					Math.round(Date.now() / 10000)
				);
				done();
			}));
	});

	describe('Habit - Delete', () => {
		test('If an invalid habit ID is passed a 404 error should be returned', done =>
			request.delete('/api/habit/nothing').end((err, res) => {
				if (err) throw err;
				expect(res.status).toBe(404);
				expect(res.body.message).toBe('Habit not found');
				done();
			}));

		test('If a valid habit ID is passed, that habit should be deleted', done => {
			request.delete(`/api/habit/${habitId}`).end((err, res) => {
				if (err) throw err;
				expect(res.status).toBe(200);
				expect(res.body.success).toBeTruthy();
				done();
			});
		});

		test('If the same habit ID is passed, it should no longer exist', done => {
			request.delete(`/api/habit/${habitId}`).end((err, res) => {
				if (err) throw err;
				expect(res.status).toBe(404);
				expect(res.body.message).toBe('Habit not found');
				done();
			});
		});
	});
});
