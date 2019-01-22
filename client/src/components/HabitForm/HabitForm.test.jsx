import React from 'react';
import { shallow } from 'enzyme';

import HabitForm from './HabitForm';
import Content from './Content/Content';

describe('HabitForm', () => {
	const setup = mount => {
		let component;
		if (mount) {
			component = mount(<HabitForm />);
		} else {
			component = shallow(<HabitForm />);
		}
		return component;
	};

	it('Should load without problems', () => {
		const component = setup();
		const formContent = component.find(Content);
		expect(formContent).toHaveLength(1);
	});
});
