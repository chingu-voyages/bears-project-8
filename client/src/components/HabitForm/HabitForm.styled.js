import styled from 'styled-components';
// TODO: incorporate into global styles

export const Container = styled.div`
	position: relative;
	width: 1000px;
	background: #fff;
	border-radius: 6px;
	margin: 6rem auto;
	color: #757575;
`;

export const Header = styled.h2`
	text-align: center;
	width: 100%;
	font-weight: 400;
	border-bottom: 2px solid #e5e5e5;
	padding: 2rem;
	color: #2b2f30;
`;

export const ContentArea = styled.div`
	width: 100%;
	height: 310px;
	padding: 2rem 4rem;
`;

export const Row = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 1.5rem;
	&:last-child {
		margin: 0;
	}
`;

export const Footer = styled(ContentArea)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: auto;
`;
