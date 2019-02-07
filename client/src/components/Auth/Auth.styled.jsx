import styled from 'styled-components';
import { lighten } from 'polished';
import { $grey } from '../../assets/styledVars';
import { Button } from '../Shared/Forms/Form.styled';

export const Header = styled.h2`
	text-align: center;
	width: 100%;
	font-weight: 400;
	border-bottom: 2px solid ${lighten(0.4, $grey)};
	padding: 2rem;
`;

export const TopText = styled.div`
	font-size: 1rem;

	small {
		font-size: 0.8rem;
		color: ${lighten(0.2, $grey)};
		display: inline-block;
		width: 100%;
		margin-bottom: 2rem;

		a {
			color: ${lighten(0.2, $grey)};
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
