import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import { createTestStore } from '../../utils/testUtils';

import { AddFriend } from './AddFriend';

const defaultState = {
	errors: {},
	auth: {
		user: {},
	},
};

const setup = (mountFn, initialState = {}) => {
	const storeState = { ...defaultState, ...initialState };
	const store = createTestStore(storeState);
	const wrapper = mountFn(
		<Provider store={store}>
			<AddFriend />
		</Provider>
	);
	return wrapper;
};

describe('Add friends with default state', () => {
	const wrapper = setup(shallow);
	it('renders without error', () => {
		expect(wrapper).toBeTruthy();
	});
});
