import styled from 'styled-components';

import { $midGray, $elfGreen, $textDark } from '../../assets/styledVars';

export const Container = styled.div`
	display: flex;
	height: 60px;
	background-color: ${$midGray};
	justify-content: space-between;
	align-items: center;
	box-shadow: 0px 13px 26px rgba(0, 0, 0, 0.1);
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
	color: ${$textDark};
	cursor: pointer;

	&:last-of-type {
		margin-right: 20px;
	}
`;

// Placeholder for now, gonna put some image here later
export const Logo = styled.div`
	width: 40px;
	height: 40px;
	background: ${$elfGreen};
	border-radius: 50%;
	margin-right: 10px;
	display: flex;
	align-items: center;
	justify-content: center;
`;
