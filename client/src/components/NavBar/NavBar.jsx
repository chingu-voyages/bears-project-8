import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { logoutUser } from '../../actions/authActions';
import Dropdown from '../Shared/Dropdown/Dropdown';
import Icon from '../Shared/Icon/Icon';
import { Container, NavContent, NavItem, NavMenu, Logo } from './NavBar.styled';

export const _NavBar = ({ isAuthenticated, logoutUser: logout, history }) => {
	const userDropdownOpts = [
		{
			id: 0,
			title: 'Profile',
			onClick: () => history.push(`/profile`),
		},
		{
			id: 1,
			title: 'Logout',
			onClick: () => logout(),
		},
	];

	return (
		<Container>
			<NavContent>
				<NavItem onClick={() => history.push('/dashboard')}>
					<Logo>
						<Icon name="logo" />
						Habit Tracker
					</Logo>
				</NavItem>
				<NavMenu>
					{isAuthenticated ? (
						<NavItem>
							<Dropdown title="Profile" options={userDropdownOpts} />
						</NavItem>
					) : (
						<Fragment>
							<NavItem onClick={() => history.push('/auth/login')}>Login</NavItem>
							<NavItem onClick={() => history.push('/auth/register')}>
								Register
							</NavItem>
						</Fragment>
					)}
				</NavMenu>
			</NavContent>
		</Container>
	);
};

_NavBar.propTypes = {
	isAuthenticated: PropTypes.bool.isRequired,
	logoutUser: PropTypes.func.isRequired,
};

const mapStateToProps = ({ auth }) => ({
	isAuthenticated: auth.isAuthenticated,
});

export default withRouter(
	connect(
		mapStateToProps,
		{ logoutUser }
	)(_NavBar)
);
