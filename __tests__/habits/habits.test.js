/* eslint-disable no-underscore-dangle */
const request = require('supertest');
const { app } = require('../../server');

const habit = {
	name: 'Test habit',
	description: 'This is a habit',
	type: 'Positive',
	difficulty: 'Epic',
	user: '5c158c5e591fbd0297c082be',
};

describe('API - Habit', () => {
	describe('Habit - Create', () => {
		test('Create route should expect name and user at least', done =>
			request(app)
				.post('/api/habit/create')
				.end((err, res) => {
					if (err) throw err;
					expect(res.body.name).toBe('Habit name field is required');
					expect(res.body.user).toBe('Invalid user ID');
					done();
				}));

		test('If correct data is passed new habit should be created', done =>
			request(app)
				.post('/api/habit/create')
				.send(habit)
				.end((err, res) => {
					if (err) throw err;
					expect(res.status).toBe(200);
					expect(res.body.name).toBe('Test habit');
					expect(res.body.description).toBe('This is a habit');
					expect(res.body.type).toBe('Positive');
					expect(res.body._id).toBeTruthy();
					done();
				}));
	});
});
