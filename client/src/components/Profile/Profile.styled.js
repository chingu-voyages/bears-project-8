import styled from 'styled-components';

export const Container = styled.section`
	width: 100%;
	height: 80vh;
`;

export const Breadcrumbs = styled.h1`
	padding: 1.5rem;
	font-weight: 400;
	font-size: 18px;
	cursor: pointer;
`;

export const ProfileSection = styled.section`
	display: grid;
	width: 100%;
	height: 100%;
	grid-template-columns: 25% 1fr;
`;

export const Sidebar = styled.aside`
	border: 3px solid lime;
`;

export const Dashboard = styled.div`
	border: 3px solid magenta;
`;
