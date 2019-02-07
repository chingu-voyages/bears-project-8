import styled from 'styled-components';
import { lighten, darken } from 'polished';
import { Link } from 'react-router-dom';
import { $grey, $elfGreen } from '../../assets/styledVars';

export const Container = styled.div`
	text-align: center;
	overflow-x: hidden;
`;

export const LargeTitle = styled.h1`
	color: ${darken(0.2, $grey)};
	font-size: 2.25rem;
	font-weight: 500;
`;

export const LargeSubtitle = styled.div`
	font-size: 1.5rem;
	color: ${darken(0.2, $grey)};
	line-height: 1.5;
`;

export const RegisterButton = styled(Link)`
	display: block;
	text-decoration: none;
	width: 200px;
	padding: 1rem;
	font-size: 1.125rem;
	color: #fff;
	background: ${$elfGreen};
	margin: 3.5rem auto 0;
	border-radius: 6px;
	cursor: pointer;
	border: none;
	transition: 0.3s;
	&:hover {
		background: ${lighten(0.3, $elfGreen)};
		color: ${darken(0.2, $elfGreen)};
	}
`;

export const SmallLink = styled.a`
	text-decoration: none;
	color: $
	font-size: 0.8rem;
`;

export const FlexRow = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	max-width: 860px;
	padding: 4rem 0;
	margin: 0 auto;

	@media (max-width: 700px) {
		display: block;
	}
`;
