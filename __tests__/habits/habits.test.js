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
});
