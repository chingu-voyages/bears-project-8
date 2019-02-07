import styled from 'styled-components';

export const Container = styled.div`
	position: relative;
	width: 1000px;
	margin: 6rem auto;

	@media only screen and (max-width: 1100px) {
		width: 90%;
	}
`;

export const PageBox = styled.div`
	width: 100%;
	background: #fff;
	border-radius: 6px;
`;
