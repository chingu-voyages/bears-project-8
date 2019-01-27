import styled from 'styled-components';
import { $greyLighter } from '../../assets/styledVars';

export const Container = styled.div`
	position: relative;
	width: 600px;
	background: #fff;
	border-radius: 6px;
	margin: 6rem auto;

	@media only screen and (max-width: 1100px) {
		width: 90%;
	}
`;

export const Header = styled.h2`
	text-align: center;
	width: 100%;
	font-weight: 400;
	border-bottom: 2px solid ${$greyLighter};
	padding: 2rem;
`;

export const ContentArea = styled.div`
	width: 100%;
	padding: 2rem 4rem;
`;

export const Footer = styled(ContentArea)`
	padding: 2rem;
	text-align: center;
`;
