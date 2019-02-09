import React from 'react';
import { shallow } from 'enzyme';

import Habit from './Habit';

describe('Habit', () => {
	const setup = fullMount => {
		const props = {
			options: [{ id: 0, title: 'Test', onClick: () => jest.fn() }],
			title: 'Dropdown',
		};
		let component;
		if (fullMount) {
			component = fullMount(<Habit {...props} />);
		} else {
			component = shallow(<Habit {...props} />);
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
