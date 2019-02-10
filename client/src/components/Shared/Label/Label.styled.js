import styled from 'styled-components';
import { lighten } from 'polished';

import { $grey, $white } from '../../../assets/styledVars';

export default styled.span`
	background-color: ${({ bgColor }) => bgColor || $white};
	color: ${({ color }) => color || $grey};
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
		background-color: ${lighten(0.2, $grey)};
	}
`;
