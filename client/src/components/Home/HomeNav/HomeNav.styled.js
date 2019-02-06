import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { $greyDark, $greyDarker, $mintLight, $mintDark } from '../../../assets/styledVars';

export const StyledHomeNav = styled.div`
	z-index: 20;
	position: absolute;
	top: 0;
	left: 0;
	height: 100px;
	width: 100%;
	display: flex;
	justify-content: center;
	padding: 0 2rem;

	@media (max-width: 680px) {
		font-size: 12px;
	}
`;

export const NavContent = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	max-width: 1024px;
`;

export const Logo = styled.div`
	font-size: 24;
	color: ${$greyDarker};
	font-size: 1.5rem;
	display: flex;
	justify-content: center;
	align-items: center;

	.icon__logo {
		height: 60px;
		padding-right: 1rem;
	}
`;

export const NavLinks = styled.div``;

export const NavLink = styled(Link)`
	transition: 0.3s;
	border-radius: 6px;
	display: inline-block;
	padding: 0.5rem 2rem;
	text-decoration: none;
	background: transparent;
	${({ focused }) =>
		focused && `border: 2px solid ${$mintLight}; &:hover{ background: ${$mintLight} }`};
	color: ${$greyDark};
	font-size: 1.125rem;
	margin-left: 2rem;
	&:hover {
		color: ${$mintDark};
	}
`;
