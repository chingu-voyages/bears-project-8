import styled from 'styled-components';

import { $white } from '../../../assets/styledVars';

export const ButtonWrapper = styled.button`
	border: ${({ color }) => `1px solid ${color}`};
	border-radius: 3px;
	background-color: ${$white};
	width: 200px;
	height: 40px;
	color: ${({ color }) => `${color}`};
	cursor: pointer;
	transition: transform 200ms;

	&:hover {
		transform: scale(1.05);
	}
`;

export const member = 'value';