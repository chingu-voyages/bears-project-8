import React from 'react';
import { shallow } from 'enzyme';

import Home from './Home';
import { Container } from './Home.styled';

test('renders without crashing', () => {
	const component = shallow(<Home />);

	expect(component.find(Container)).toHaveLength(1);

	component.unmount();
});
