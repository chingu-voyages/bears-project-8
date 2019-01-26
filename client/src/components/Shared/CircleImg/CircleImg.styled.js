import styled from 'styled-components';

import { $gray, $greyDark } from '../../../assets/styledVars';

export const Wrapper = styled.figure`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border: 1px solid black;
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
	color: ${$greyDark};
`;

export const Image = styled.img`
	background-color: ${$gray};
	border: 1px solid ${$gray};
	border-radius: 50%;

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
