import styled from 'styled-components';

import { $gray, $white } from '../../assets/styledVars';

export const Container = styled.section`
	height: 80vh;
	padding: 0 2.5rem;
	width: 100%;

	@media (min-width: 1000px) {
		width: 80%;
		margin: 0 auto;
	}
`;

// TODO: Make Breadcrumbs shared component
export const Breadcrumbs = styled.h1`
	padding: 1.5rem;
	font-weight: 400;
	font-size: 18px;

	& span {
		cursor: pointer;
		color: ${$gray};
	}
`;

export const SectionTitle = styled.h2`
	font-weight: normal;
	line-height: normal;
	font-size: 16px;
	margin-bottom: 10px;
`;

export const Section = styled.section`
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

// TODO: Make Label shared component
export const Label = styled.span`
	background-color: ${({ bgColor }) => bgColor || $white};
	color: ${({ color }) => color || $gray};
	border-radius: 5px;
	height: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 5px;
	margin: 3px;
	font-size: 14px;
	line-height: 0;
	cursor: pointer;
`;

export const Dashboard = styled.div`
	display: grid;
	grid-template-rows: repeat(2, min-content) 1fr;
	grid-template-columns: 70% 1fr;
	background-color: ${$white};

	& .dashboard__friends {
		display: flex;
		justify-content: flex-start;
		padding: 2rem;
		padding-bottom: 0;
	}

	& .dashboard__goals {
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 14px;
		height: 80%;
		font-weight: 300;
	}
`;

export const FilterByTags = styled.div`
	display: flex;
	align-items: center;
	background-color: #f8f8f8;
	padding: 1rem;
	grid-column: 1/3;

	& span {
		font-size: 12px;
		margin-right: 1rem;
	}
`;
export const FilterByDifficulty = styled.div`
	display: flex;
	align-items: center;
	padding: 1rem;

	justify-content: space-around;

	& span:first-of-type {
		font-size: 12px;
		margin-right: 1rem;
	}
`;

export const FilterByType = styled.div`
	display: flex;
	align-items: center;
	padding: 1rem;

	justify-content: flex-end;

	& span:first-of-type {
		font-size: 12px;
		margin-right: 0.5rem;
	}
`;
