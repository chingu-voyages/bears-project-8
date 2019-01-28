import React from 'react';
import { shallow } from 'enzyme';

import Login from './Login';

describe('Login', () => {
	const setup = fullMount => {
		const props = {};
		let component;
		if (fullMount) {
			component = fullMount(<Login {...props} />);
		} else {
			component = shallow(<Login {...props} />);
		}

		return {
			props,
			component,
		};
	};

	test('it does math', () => {
		setup();
		expect(2 + 2).toBe(4);
	});
});
