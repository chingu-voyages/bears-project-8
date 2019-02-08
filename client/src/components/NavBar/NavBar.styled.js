import styled from 'styled-components';
import { lighten, darken } from 'polished';

import { $grey } from '../../assets/styledVars';

export const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 80px;
	background-color: ${lighten(0.5, $grey)};
`;

export const NavContent = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	max-width: 1024px;
`;

export const NavMenu = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	width: 50%;
`;

export const NavItem = styled.span`
	display: flex;
	align-items: center;
	margin-left: 20px;
	color: ${darken(0.2, $grey)};
	cursor: pointer;

	&:last-of-type {
		margin-right: 20px;
	}
`;

export const Logo = styled.div`
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
