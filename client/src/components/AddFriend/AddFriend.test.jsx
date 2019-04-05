import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';

import { createTestStore } from '../../utils/testUtils';
import { _AddFriend as AddFriend } from './AddFriend';

const addFriend = jest.fn(() => null);

const setup = (mountFn, initialState = {}) => {
	const storeState = { errors: {}, ...initialState };
	const store = createTestStore(storeState);

	const props = {
		addFriend,
	};

	const wrapper = mountFn(
		<Provider store={store}>
			<AddFriend {...props} />
		</Provider>
	);
	return wrapper;
};

describe('AddFriend with default state (no errors)', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = setup(mount);
	});
	it('renders without error', () => {
		expect(wrapper).toBeTruthy();
	});
});
