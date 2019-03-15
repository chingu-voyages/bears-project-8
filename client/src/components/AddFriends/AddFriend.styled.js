import styled from 'styled-components';
import { lighten } from 'polished';
import { $grey, $elfGreen } from '../../assets/styledVars';
import { Button } from '../Shared/Forms/Form.styled';

export const TopText = styled.div`
	font-size: 1.1rem;
	margin: 2rem 0 2rem;
	text-align: center;
	border-bottom: 1px solid ${lighten(0.4, $elfGreen)};
	small {
		font-size: 0.8rem;
		color: ${lighten(0.2, $grey)};
		display: inline-block;
		width: 100%;
		margin: 1rem 0 2rem;

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
