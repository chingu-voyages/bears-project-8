import React from 'react';
import { shallow } from 'enzyme';

import { _NavBar as NavBar } from './NavBar';

import { NavItem, NavMenu } from './NavBar.styled';
// import { _Dropdown as Dropdown } from '../Shared/Dropdown/Dropdown';
import AuthDropdown from './AuthDropdown/AuthDropdown';

describe('NavBar', () => {
	const setup = fullMount => {
		const props = {
			auth: {
				isAuthenticated: false,
				user: { name: '', avatar: '' },
			},
			logoutUser: jest.fn(),
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
			const dropDown = component.find(AuthDropdown);
			expect(dropDown).toHaveLength(0);
		});
	});

	describe('when user is authenticated', () => {
		it("shouldn't show login and Register buttons", () => {
			const { component } = setup();
			component.setProps({
				auth: {
					isAuthenticated: true,
					user: { name: '', avatar: '' },
				},
			});
			const navMenu = component.find(NavMenu);
			expect(navMenu).toHaveLength(1);
			expect(navMenu.find(NavItem)).toHaveLength(0);
		});

		it('should show Profile Dropdown', () => {
			const { component } = setup();
			component.setProps({
				auth: {
					isAuthenticated: true,
					user: { name: '', avatar: '' },
				},
			});
			const dropdown = component.find(AuthDropdown);
			expect(dropdown).toHaveLength(1);
		});
	});
});
