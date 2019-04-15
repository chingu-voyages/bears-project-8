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
	it('adds friend to friends list on success', () => {
		const store = createTestStore();
		const mockFriend = {
			id: 1,
			name: 'tester',
			avatar: 'https://avatar.com/avatar.gif',
		};
		const historyMock = { push: () => null };

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
});
