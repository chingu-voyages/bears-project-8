import styled, { css } from 'styled-components';

import { $white } from '../../../assets/styledVars';

const sizeFunc = size => {
	switch (size) {
		case 'regular':
			return `
			width: 200px;
			height: 40px;
		`;
		case 'large':
			return `
			width: 240px; 
			height: 60px;
		`;
		default:
			return `
			width: 120px;
			height: 30px;
			`;
	}
};

export const ButtonWrapper = styled.button`
	border: ${({ color }) => `1px solid ${color}`};
	border-radius: 3px;
	background-color: ${({ bgColor }) => bgColor || $white};
	color: ${({ color }) => `${color}`};

	${({ size }) => sizeFunc(size)}

	cursor: pointer;
	transition: transform 200ms;

	&:hover {
		transform: scale(1.05);
	}
`;

export const member = 'value';
