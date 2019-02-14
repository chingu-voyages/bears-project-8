import styled from 'styled-components';
import { lighten, darken } from 'polished';
import { Link } from 'react-router-dom';

import { $grey } from '../../assets/styledVars';

export const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 70px;
	background-color: ${lighten(0.5, $grey)};
	box-shadow: 0 4px 32px ${lighten(0.4, $grey)};
`;

export const NavContent = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	max-width: 1200px;
	padding: 0 2rem;
`;

export const NavMenu = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
`;

export const NavItem = styled.span`
	display: flex;
	justify-content: space-between;
	align-items: center;
	color: ${darken(0.2, $grey)};

	${({ link }) => link && `cursor: pointer; hover { color: ${darken(0.4, $grey)} }`};
`;

export const Logo = styled.div`
	cursor: pointer;
	color: ${darken(0.4, $grey)};
	font-size: 1.25rem;
	display: flex;
	justify-content: center;
	align-items: center;

	.icon__logo {
		height: 50px;
		padding-right: 1rem;
	}
`;

export const AddHabitLink = styled(Link)`
	color: ${darken(0.3, $grey)};
	text-decoration: none;
	border: 1px solid ${lighten(0.3, $grey)};
	border-radius: 3px;
	padding: 0.4rem 0.5rem;
	margin-right: 3rem;
`;
