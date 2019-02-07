import styled from 'styled-components';
import { darken, lighten } from 'polished';
import { $grey, $animDuration } from '../../../assets/styledVars';

export const Container = styled.div`
	padding: 1.5rem;
	font-size: 1.2rem;
`;

export const CrumbLink = styled.span`
	cursor: pointer;
	color: ${lighten(0.2, $grey)};
	margin-right: 2rem;
	position: relative;
	transition: ${$animDuration};

	&:after {
		color: ${lighten(0.2, $grey)};
		position: absolute;
		right: -1rem;
		content: '»';
	}

	&:hover {
		color: ${darken(0.2, $grey)};
	}
`;

export const CurrentCrumb = styled.span`
	color: ${$grey};
`;
