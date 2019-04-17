import moxios from 'moxios';

import { createMockStore, createTestStore } from '../utils/testUtils';
import { loginUser, registerUser, addFriend } from './authActions';

describe('registerUser action creator', () => {
	beforeEach(() => {
		moxios.install();
	});
	afterEach(() => {
		moxios.uninstall();
	});

	const historyMock = { push: () => null };

	it('returns an error on failure', () => {
		const store = createTestStore();
		const mockUser = {
			name: 'Tester',
			email: 'test@test.com',
			avatar: 'https://avatar.com/avatar.gif',
			password: 'password',
		};
		const mockError = {
			email: 'Email is already in use',
		};

		moxios.wait(() => {
			const request = moxios.requests.mostRecent();
			request.respondWith({
				status: 400,
				response: mockError,
			});
		});
		return store.dispatch(registerUser(mockUser, historyMock)).then(() => {
			const newState = store.getState();
			expect(newState.errors).toEqual(mockError);
		});
	});
	it('registers user and returns no action (directly)', () => {
		const store = createMockStore();
		const mockUser = {
			name: 'Tester',
			email: 'test@test.com',
			avatar: 'https://avatar.com/avatar.gif',
			password: 'password',
		};

		moxios.wait(() => {
			const request = moxios.requests.mostRecent();
			request.respondWith({
				status: 200,
				response: mockUser,
			});
		});

		return store.dispatch(registerUser(mockUser, historyMock)).then(() => {
			const actions = store.getActions();
			expect(actions).toEqual([]);
		});
	});
});

describe('loginUser action creator', () => {
	beforeEach(() => {
		moxios.install();
	});
	afterEach(() => {
		moxios.uninstall();
	});

	const historyMock = { push: () => null };

	it('returns an error on failure', () => {
		const store = createTestStore();
		const mockUser = {
			email: 'test@test.com',
			password: 'password',
		};
		const mockError = {
			email: 'A user with that email does not exist',
		};

		moxios.wait(() => {
			const request = moxios.requests.mostRecent();
			request.respondWith({
				status: 404,
				response: mockError,
			});
		});

		return store.dispatch(loginUser(mockUser, historyMock)).then(() => {
			const newState = store.getState();
			expect(newState.errors).toEqual(mockError);
		});
	});
	it('logs user in on success', () => {
		const store = createMockStore();
		const mockUser = {
			email: 'test@test.com',
			password: 'password',
		};
		const mockToken =
			'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYjc0MjQ2OWRhMjNhOWUzOWFiYzE1YyIsIm5hbWUiOiJ0ZXN0ZXIiLCJlbWFpbCI6InRlc3RAdGVzdC5jb20iLCJhdmF0YXIiOiJodHRwczovLy8vd3d3LmdyYXZhdGFyLmNvbS9hdmF0YXIvYjY0MmI0MjE3YjM0YjFlOGQzYmQ5MTVmYzY1YzQ0NTI_cz0yMDAmcj1wZyZkPW1wIiwiYWJvdXQiOmZhbHNlLCJnb2FscyI6W10sImZyaWVuZHMiOltdLCJpYXQiOjE1NTU1MTM5MzUsImV4cCI6MTU1NTUxNzUzNX0.cIJjHzRYhguJmE9TrDn56o0ctKFH7IZYNIcpRBbim1Y';

		moxios.wait(() => {
			const request = moxios.requests.mostRecent();
			request.respondWith({
				status: 200,
				response: {
					message: 'Auth successful',
					token: mockToken,
				},
			});
		});

		return store.dispatch(loginUser(mockUser, historyMock)).then(() => {
			// check that the set current user action gets called
			const actions = store.getActions();
			expect(actions[0].type).toBe('SET_CURRENT_USER');
		});
	});
});

describe('addFriend action creator', () => {
	beforeEach(() => {
		moxios.install();
	});
	afterEach(() => {
		moxios.uninstall();
	});

	const historyMock = { push: () => null };

	it('adds friend to friends list on success', () => {
		const store = createTestStore();
		const mockFriend = {
			id: 1,
			name: 'tester',
			avatar: 'https://avatar.com/avatar.gif',
		};

		moxios.wait(() => {
			const request = moxios.requests.mostRecent();
			request.respondWith({
				status: 200,
				response: {
					message: 'Friend added successfully',
					friend: mockFriend,
				},
			});
		});

		return store.dispatch(addFriend('', historyMock)).then(() => {
			const newState = store.getState();
			expect(newState.auth.user.friends[0]).toEqual(mockFriend);
		});
	});
	it('returns an error on failure', () => {
		const store = createTestStore();
		const error = { email: `We couldn't find a user with email test@test.com` };

		moxios.wait(() => {
			const request = moxios.requests.mostRecent();
			request.respondWith({
				status: 404,
				response: error,
			});
		});

		return store.dispatch(addFriend('', historyMock)).then(() => {
			const newState = store.getState();
			expect(newState.errors).toEqual(error);
		});
	});
});
