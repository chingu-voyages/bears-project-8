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
	it('adds friend to friends list on success', () => {});
});
