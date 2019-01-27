import React from 'react';
import { shallow } from 'enzyme';

import Profile from './Profile';

describe('Profile', () => {
	const setup = fullMount => {
		const props = {
			options: [{ id: 0, title: 'Test', onClick: () => jest.fn() }],
			title: 'Dropdown',
		};
		let component;
		if (fullMount) {
			component = fullMount(<Profile {...props} />);
		} else {
			component = shallow(<Profile {...props} />);
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
