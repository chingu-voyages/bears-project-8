import styled from 'styled-components';
import { Button } from '../Shared/Forms/Form.styled';

export const ContentArea = styled.div`
	padding: 3rem 4rem;

	@media only screen and (max-width: 650px) {
		padding: 3rem 2rem;
	}
`;

// TODO: this should not be necessary, implement this in CSS grid instead
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

export const Footer = styled.div`
	padding: 0 4rem 3rem;
	text-align: center;

	@media (max-width: 650px) {
		${Button} {
			width: 100%;
		}

		padding: 0 2rem 3rem;
	}
`;
