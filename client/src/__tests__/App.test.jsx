import React from 'react';
import { shallow } from 'enzyme';

import App from '../components/App';
import { AppContainer } from '../components/App.styled';

it('renders without crashing', () => {
	const component = shallow(<App />);

	expect(component.find(AppContainer)).toHaveLength(1);

	component.unmount();
});
