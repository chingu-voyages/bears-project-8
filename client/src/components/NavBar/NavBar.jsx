import React from 'react';

import { Container, NavItem, NavMenu, Logo } from './NavBar.styled';

const NavBar = props => (
	<Container>
		<NavItem>
			<Logo>H</Logo> Habit Tracker
		</NavItem>
		<NavMenu>
			<NavItem>Login</NavItem>
			<NavItem>Register</NavItem>
		</NavMenu>
	</Container>
);

export default NavBar;
