import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { $greyDark, $mintLight, $elfGreen, $mintDark, $ash } from '../../assets/styledVars';

export const Container = styled.div`
	text-align: center;
	overflow-x: hidden;
`;

export const LargeTitle = styled.h1`
	color: ${$ash};
	font-size: 2.25rem;
	font-weight: 500;
`;

export const LargeSubtitle = styled.div`
	font-size: 1.5rem;
	color: ${$greyDark};
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
		background: ${$mintLight};
		color: ${$mintDark};
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
