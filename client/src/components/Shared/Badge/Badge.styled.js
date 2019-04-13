import styled from 'styled-components';
import { lighten, darken } from 'polished';

import { $grey, $elfGreen, $white, $animDuration } from '../../../assets/styledVars';

export default styled.span`
	border: none;
	border-radius: 15px;
	position: relative;
	color: ${$grey};
	cursor: pointer;
	background: ${$white};
	padding: 0.4rem 0.9rem 0.4rem 2.2rem;
	width: 150px; /*DT TODO: Make this dynamic */

	display: flex;
	align-items: center;
	justify-content: center;

	text-align: center;
	text-decoration: none;
	font-size: 0.9rem;
	font-weight: 400;

	transition: ${$animDuration};

	&:before {
		content: '+';
		position: absolute;
		left: 0.2rem;
		transition: ${$animDuration};
		background: transparent;
		color: ${lighten(0.1, $elfGreen)};
		font-weight: 500;
		border-radius: 50%;
		font-size: 1.7rem;
		width: 1.7rem;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	&:hover {
		color: ${darken(0.3, $grey)};
		&:before {
			color: ${$elfGreen};
		}
	}
`;
