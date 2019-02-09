import styled from 'styled-components';

import { $gray, $white, $greyLighter } from '../../../assets/styledVars';

export default styled.span`
	background-color: ${({ bgColor }) => bgColor || $white};
	color: ${({ color }) => color || $gray};
	border: none;
	border-radius: 5px;
	height: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 5px 10px;
	margin: 3px;
	font-size: 14px;
	line-height: 0;
	cursor: pointer;
	transition: all 200ms;

	&:hover {
		background-color: ${$greyLighter};
	}
`;
