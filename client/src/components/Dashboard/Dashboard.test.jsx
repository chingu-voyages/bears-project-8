import React from 'react';
import { shallow } from 'enzyme';

import { _Dashboard as Dashboard } from './Dashboard';

describe('Dashboard', () => {
	const setup = fullMount => {
		const props = {
			options: [{ id: 0, title: 'Test', onClick: () => jest.fn() }],
			title: 'Dropdown',
		};
		let component;
		if (fullMount) {
			component = fullMount(<Dashboard {...props} />);
		} else {
			component = shallow(<Dashboard {...props} />);
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
