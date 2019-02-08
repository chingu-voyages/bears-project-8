import styled from 'styled-components';
import { lighten } from 'polished';
import { $grey } from '../../../assets/styledVars';

export const StyledDropdown = styled.div`
	position: relative;
`;

export const Top = styled.div`
	padding: 0;
	padding-right: 2rem;
	width: 60px;
	position: relative;
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
	height: 10px;
	background: ${lighten(0.2, $grey)};
	font-weight: 800;
	clip-path: polygon(0% 0%, 100% 0%, 50% 50%);
`;

export const Bottom = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: space-around;
	z-index: 99;
	width: 200px;
	height: 160px;
	position: absolute;
	bottom: -155px;
	right: -1rem;
	background: #fff;
	border-radius: 3px;
	box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
`;

export const BottomContent = styled.div``;

export const CurrentUser = styled.div`
	padding: 0.5rem;
	margin: 0.5rem;
	border-bottom: 1px solid #eee;
`;

export const AuthLink = styled.div`
	font-weight: 600;
	padding: 0.5rem;
	font-size: 0.9rem;
	cursor: pointer;
	color: ${lighten(0.2, $grey)};
	&:hover,
	&:hover a {
		background: ${$grey};
		color: ${lighten(0.2, $grey)};
	}
	a {
		display: inline-block;
		width: 100%;
		height: 100%;
		color: ${lighten(0.2, $grey)};
		text-decoration: none;
	}
`;

export const BottomArrow = styled.div`
	background: #fff;
	width: 20px;
	height: 20px;
	position: absolute;
	top: -18px;
	right: 66px;
	clip-path: polygon(50% 40%, 0% 100%, 100% 100%);
`;
