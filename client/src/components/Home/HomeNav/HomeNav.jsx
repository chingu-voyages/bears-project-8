import React from 'react';
import Icon from '../../Shared/Icon/Icon';
import { StyledHomeNav, NavContent, Logo, NavLinks, NavLink } from './HomeNav.styled';

export default () => (
	<StyledHomeNav>
		<NavContent>
			<Logo>
				<Icon name="logo" />
				Habit Tracker
			</Logo>
			<NavLinks>
				<NavLink to="/auth/register" focused>
					Register
				</NavLink>
				<NavLink to="/auth/login">Login</NavLink>
			</NavLinks>
		</NavContent>
	</StyledHomeNav>
);
