import React from 'react';
import { shallow } from 'enzyme';

import HabitList from './HabitList';

describe('HabitList', () => {
	const setup = fullMount => {
		const props = {
			options: [{ id: 0, title: 'Test', onClick: () => jest.fn() }],
			title: 'Dropdown',
		};
		let component;
		if (fullMount) {
			component = fullMount(<HabitList {...props} />);
		} else {
			component = shallow(<HabitList {...props} />);
		}

		return {
			props,
			component,
		};
	};

	test('it does math', () => {
		expect(2 + 2).toBe(4);
	});
});
