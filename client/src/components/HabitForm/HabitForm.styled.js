import styled from 'styled-components';
import { $greyLighter } from '../../assets/styledVars';

export const Container = styled.div`
	position: relative;
	width: 1000px;
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
	height: 310px;
	padding: 2rem 4rem;

	@media only screen and (max-width: 650px) {
		height: auto;
	}
`;

export const Row = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 2.5rem;
	&:last-child {
		margin: 0;
	}

	@media only screen and (max-width: 650px) {
		display: block;
	}
`;

export const Footer = styled(ContentArea)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: auto;

	@media only screen and (max-width: 960px) {
		padding: 1rem 4rem 6rem;
	}
`;
