import React from 'react';
import { shallow } from 'enzyme';

import Register from './Register';

describe('Register', () => {
	const setup = fullMount => {
		const props = {};
		let component;
		if (fullMount) {
			component = fullMount(<Register {...props} />);
		} else {
			component = shallow(<Register {...props} />);
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
