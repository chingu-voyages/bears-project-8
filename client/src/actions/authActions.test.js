import moxios from 'moxios';

import { createTestStore } from '../utils/testUtils';
import { addFriend } from './authActions';

describe('addFriend action creator', () => {
	beforeEach(() => {
		// moxios will intercept requests during the test
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
