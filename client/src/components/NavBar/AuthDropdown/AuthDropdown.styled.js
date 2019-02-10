import styled from 'styled-components';
import { lighten, darken } from 'polished';
import { $grey, $animDuration } from '../../../assets/styledVars';

export const StyledDropdown = styled.div`
	position: relative;
`;

export const Top = styled.div`
	position: relative;
	padding: 0 1.5rem 0 0;
	width: 60px;
	box-sizing: content-box;
	cursor: pointer;
`;

export const ProfPic = styled.div`
	display: inline-block;
	border-radius: 50%;
	width: 50px;
	height: 50px;
	background: center / contain no-repeat ${lighten(0.2, $grey)} url(${({ profPic }) => profPic});
`;

export const TopArrow = styled.div`
	position: absolute;
	right: 15px;
	top: 25px;
	width: 10px;
	height: 5px;
	background: ${darken(0.2, $grey)};
	font-weight: 800;
	clip-path: polygon(0% 0%, 100% 0%, 50% 100%);
	transition: ${$animDuration};
	${({ open }) => open && 'transform: rotate(180deg)'};
`;

export const Bottom = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	z-index: 99;
	width: 200px;
	height: 190px;
	position: absolute;
	bottom: -205px;
	right: -1rem;
	background: #fff;
	border-radius: 3px;
	box-shadow: 0 3px 16px rgba(0, 0, 0, 0.3);
`;

export const BottomContent = styled.div``;

export const CurrentUser = styled.div`
	text-align: center;
	padding: 0.5rem 1rem 1rem;
	margin: 0 auto 0.5rem;
	border-bottom: 1px solid #eee;
	font-size: 0.9rem;
`;

export const AuthLink = styled.div`
	width: 100%;
	padding: 0.5rem 1.5rem;
	font-size: 0.9rem;
	color: ${$grey};
	font-size: 1.1rem;
	font-weight: 300;
	cursor: pointer;
	a {
		font-size: 1.1rem;
		font-weight: 300;
		display: inline-block;
		width: 100%;
		height: 100%;
		color: ${$grey};
		text-decoration: none;
	}
	&:hover,
	&:hover a {
		background: ${$grey};
		color: ${lighten(0.6, $grey)};
	}
`;

export const BottomArrow = styled.div`
	background: #fff;
	width: 30px;
	height: 20px;
	position: absolute;
	top: -18px;
	right: 59px;
	clip-path: polygon(50% 40%, 0% 100%, 100% 100%);
`;
