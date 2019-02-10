import styled from 'styled-components';
import { darken, lighten } from 'polished';

import { $grey, $white } from '../../../assets/styledVars';

export const Wrapper = styled.figure`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 1.5rem;
	margin: 0;
`;

export const Title = styled.span`
	text-align: center;
	padding-bottom: 1rem;
`;

export const Subtitle = styled.figcaption`
	font-size: 14px;
	text-align: center;
	padding: 1rem 0;
	color: ${darken(0.2, $grey)};
`;

export const Image = styled.img`
	background-color: ${lighten(0.2, $grey)};
	border-radius: 50%;
	cursor: pointer;

	${({ size }) =>
		size === 'small'
			? `
			height: 75px;
			width: 75px;`
			: `
			height: 150px;
			width: 150px;
		`}
`;

export const PlusCircle = styled.div`
	background-color: ${$white};
	border: 5px solid #b9eddb;
	border-radius: 50%;
	font-size: 48px;
	display: flex;
	justify-content: center;
	align-items: center;
	color: #5cbc9a;
	cursor: pointer;

	${({ size }) =>
		size === 'small'
			? `
			height: 75px;
			width: 75px;`
			: `
			height: 150px;
			width: 150px;
		`}
`;
