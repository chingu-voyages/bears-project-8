import React from 'react';
import { shallow } from 'enzyme';

import { _NavBar as NavBar } from './NavBar';

import { NavItem, NavMenu } from './NavBar.styled';
import { _Dropdown as Dropdown } from '../Shared/Dropdown/Dropdown';

describe('NavBar', () => {
	const setup = fullMount => {
		const props = {
			isAuthenticated: false,
			logoutUser: jest.fn(),
			user: {},
		};
		let component;
		if (fullMount) {
			component = fullMount(<NavBar {...props} />);
		} else {
			component = shallow(<NavBar {...props} />);
		}

		return {
			props,
			component,
		};
	};

	describe('when user is not authenticated', () => {
		it('should show login and Register buttons', () => {
			const { component } = setup();
			const navMenu = component.find(NavMenu);
			expect(navMenu).toHaveLength(1);
			expect(navMenu.find(NavItem)).toHaveLength(2);
		});

		it("shouldn't show Profile Dropdown", () => {
			const { component } = setup();
			const dropDown = component.find(Dropdown);
			expect(dropDown).toHaveLength(0);
		});
	});

	describe('when user is authenticated', () => {
		it("shouldn't show login and Register buttons", () => {
			const { component } = setup();
			component.setProps({ isAuthenticated: true });
			const navMenu = component.find(NavMenu);
			expect(navMenu).toHaveLength(1);
			expect(navMenu.find(NavItem)).toHaveLength(1);
		});

		it('should show Profile Dropdown', () => {
			const { component } = setup();
			component.setProps({ isAuthenticated: true });
			const dropDown = component.find(Dropdown);
			expect(dropDown).toHaveLength(1);
		});
	});
});
