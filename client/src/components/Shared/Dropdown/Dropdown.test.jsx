import React from 'react';
import { shallow } from 'enzyme';

import { List, ListItem } from './Dropdown.styled';
import { _Dropdown as Dropdown } from './Dropdown';

describe('Dropdown', () => {
	const setup = fullMount => {
		const props = {
			options: [{ id: 0, title: 'Test', onClick: () => jest.fn() }],
			title: 'Dropdown',
		};
		let component;
		if (fullMount) {
			component = fullMount(<Dropdown {...props} />);
		} else {
			component = shallow(<Dropdown {...props} />);
		}

		return {
			props,
			component,
		};
	};

	it("shouldn't show dropdown list if isOpen is false", () => {
		const { component } = setup();
		const dropDown = component.find(List);
		expect(dropDown).toHaveLength(0);
	});

	it('should show list and its items if isOpen is true', () => {
		const { component } = setup();
		component.setState({ isOpen: true });
		const navMenu = component.find(List);
		expect(navMenu).toHaveLength(1);
		expect(navMenu.find(ListItem)).toHaveLength(1);
	});
});
