import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import { Container, NavItem, NavMenu, Logo } from './NavBar.styled';

const NavBar = ({ isAuthenticated }) => (
	<Container>
		<NavItem>
			<Logo>H</Logo> Habit Tracker
		</NavItem>
		<NavMenu>
			{isAuthenticated ? (
				<Fragment>
					<NavItem>Profile</NavItem>
					<NavItem> (dropdown here) </NavItem>
				</Fragment>
			) : (
				<Fragment>
					<NavItem>Login</NavItem>
					<NavItem>Register</NavItem>
				</Fragment>
			)}
		</NavMenu>
	</Container>
);

const mapStateToProps = ({ auth }) => ({
	isAuthenticated: auth.isAuthenticated,
});

export default connect(mapStateToProps)(NavBar);
