import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { Container, NavItem, NavMenu, Logo } from './NavBar.styled';

import { logoutUser } from '../../actions/authActions';

import Dropdown from '../Shared/Dropdown/Dropdown';

const NavBar = ({ user, isAuthenticated, logoutUser: logout, history }) => {
	const userDropdownOpts = [
		{
			id: 0,
			title: 'Profile',
			onClick: () => history.push(`/profile/${user._id}`),
		},
		{
			id: 1,
			title: 'Logout',
			onClick: () => logout(),
		},
	];

	return (
		<Container>
			<NavItem onClick={() => history.push('/dashboard')}>
				<Logo>H</Logo> Habit Tracker
			</NavItem>
			<NavMenu>
				{!isAuthenticated ? (
					<Fragment>
						<NavItem>
							<Dropdown options={userDropdownOpts} />
						</NavItem>
					</Fragment>
				) : (
					<Fragment>
						<NavItem onClick={() => history.push('/auth/login')}>Login</NavItem>
						<NavItem onClick={() => history.push('/auth/register')}>Register</NavItem>
					</Fragment>
				)}
			</NavMenu>
		</Container>
	);
};

NavBar.propTypes = {
	isAuthenticated: PropTypes.bool.isRequired,
	logoutUser: PropTypes.func.isRequired,
	user: PropTypes.shape({
		_id: PropTypes.string,
	}).isRequired,
};

const mapStateToProps = ({ auth }) => ({
	isAuthenticated: auth.isAuthenticated,
	user: auth.user,
});

export default withRouter(
	connect(
		mapStateToProps,
		{ logoutUser }
	)(NavBar)
);
