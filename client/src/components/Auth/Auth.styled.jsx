import styled from 'styled-components';
import { $greyLight, $greyLighter, $greyDarker } from '../../assets/styledVars';
import { Button } from '../Shared/Forms/Form.styled';

export const Container = styled.div`
	position: relative;
	width: 600px;
	background: #fff;
	border-radius: 6px;
	margin: 6rem auto;

	@media only screen and (max-width: 650px) {
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

export const TopText = styled.div`
	font-size: 1.1rem;
	color: ${$greyDarker};
	margin-bottom: 2rem;
	text-align: center;

	small {
		font-size: 0.8rem;
		color: ${$greyLight};
		display: block;
		width: 100%;
		margin: 1rem 0 2rem;

		a {
			color: ${$greyLight};
		}
	}
`;

export const ContentArea = styled.div`
	width: 100%;
	padding: 2rem 4rem;

	@media (max-width: 550px) {
		padding: 2rem 2rem;
	}
`;

export const Footer = styled(ContentArea)`
	padding: 3rem 0 2rem 0;
	text-align: center;

	@media (max-width: 550px) {
		${Button} {
			width: 100%;
		}
		padding: 3rem 0 2rem 0;
	}
`;
