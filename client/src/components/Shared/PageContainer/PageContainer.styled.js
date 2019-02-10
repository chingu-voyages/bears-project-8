import styled from 'styled-components';

export const Container = styled.div`
	position: relative;
	margin: 3rem auto 6rem;
	${({ size }) => {
		switch (size) {
			case 'small':
				return `width: 600px;
				@media only screen and (max-width: 650px) {
					width: 90%;
				}`;
			case 'regular':
			default:
				return `width: 1000px;
				@media only screen and (max-width: 1100px) {
					width: 90%;
				}`;
		}
	}};
`;

export const PageBox = styled.div`
	width: 100%;
	background: #fff;
	border-radius: 6px;
`;
