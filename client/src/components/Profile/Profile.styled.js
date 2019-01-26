import styled from 'styled-components';

import { $gray } from '../../assets/styledVars';

export const Container = styled.section`
	height: 80vh;
	padding: 0 2.5rem;
`;

export const Breadcrumbs = styled.h1`
	padding: 1.5rem;
	font-weight: 400;
	font-size: 18px;

	& span {
		cursor: pointer;
		color: ${$gray};
	}
`;

export const ProfileSection = styled.section`
	display: grid;
	width: 100%;
	height: 100%;
	grid-template-columns: 30% 1fr;
`;

export const Sidebar = styled.aside`
	display: flex;
	flex-direction: column;
	background-color: #f8f8f8;
	/* justify-content: center; */
	/* align-items: center; */
`;

export const Dashboard = styled.div`
	border: 3px solid magenta;
`;
