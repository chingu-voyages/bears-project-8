import moxios from 'moxios';

import { createTestStore } from '../utils/testUtils';
import { loginUser, registerUser, addFriend } from './authActions';

describe('registerUser action creator', () => {
	beforeEach(() => {
		moxios.install();
	});
	afterEach(() => {
		moxios.uninstall();
	});

	const historyMock = { push: () => null };

	it('registers user and logs in on success', () => {
		const store = createTestStore();
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

		return (
			store
				.dispatch(registerUser(mockUser, historyMock))
				// return the register async thunk
				.then(() => {
					store
						.dispatch(loginUser({ email: mockUser.email, password: mockUser.password }))
						// return the login async thunk
						.then(() => {
							const newState = store.getState();
							expect(newState.auth.user.email).toEqual(mockUser.email);
						});
				})
		);
	});
	it('returns an error on failure', () => {
		const store = createTestStore();
		const mockUser = {
			name: 'Tester',
			email: 'test@test.com',
			avatar: 'https://avatar.com/avatar.gif',
			password: 'password',
		};
		const mockErrors = {
			email: 'Email is already in use',
		};

		moxios.wait(() => {
			const request = moxios.requests.mostRecent();
			request.respondWith({
				status: 400,
				response: mockErrors,
			});
		});

		return store.dispatch(registerUser(mockUser, historyMock)).then(() => {
			const newState = store.getState();
			expect(newState.errors).toEqual(mockErrors);
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

	it('logs user in on success', () => {});
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
