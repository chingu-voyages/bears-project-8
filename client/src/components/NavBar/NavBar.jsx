import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { logoutUser } from '../../actions/authActions';
import Icon from '../Shared/Icon/Icon';
import AuthDropdown from './AuthDropdown/AuthDropdown';
import { Container, NavContent, NavItem, NavMenu, Logo, AddHabitLink } from './NavBar.styled';

export const _NavBar = ({ auth, logoutUser: logout, history }) => {
	const { isAuthenticated, user } = auth;

	const logoLink = isAuthenticated ? '/dashboard' : '/';

	const menuContent = isAuthenticated ? (
		<NavItem>
			<AuthDropdown
				profPic={`https://${user.avatar}`}
				user={user}
				logout={logout}
				history={history}
			/>
		</NavItem>
	) : (
		<Fragment>
			<NavItem link onClick={() => history.push('/auth/register')}>
				Register
			</NavItem>
			<NavItem link onClick={() => history.push('/auth/login')}>
				Login
			</NavItem>
		</Fragment>
	);

	return (
		<Container>
			<NavContent>
				<NavItem onClick={() => history.push(logoLink)}>
					<Logo>
						<Icon name="logo" />
						Habit Tracker
					</Logo>
				</NavItem>
				<NavItem>
					<AddHabitLink to="/habitform">Add Habit</AddHabitLink>
					<NavMenu>{menuContent}</NavMenu>
				</NavItem>
			</NavContent>
		</Container>
	);
};

_NavBar.propTypes = {
	// isAuthenticated: PropTypes.bool.isRequired,
	logoutUser: PropTypes.func.isRequired,
	auth: PropTypes.shape({
		isAuthenticated: PropTypes.bool.isRequired,
		user: PropTypes.object.isRequired,
	}).isRequired,
};

const mapStateToProps = ({ auth }) => ({
	auth,
});

export default withRouter(
	connect(
		mapStateToProps,
		{ logoutUser }
	)(_NavBar)
);
