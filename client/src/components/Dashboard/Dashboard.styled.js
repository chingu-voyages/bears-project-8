import styled from 'styled-components';

import { $gray, $white, $greyLighter } from '../../assets/styledVars';

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
	padding: 3.5rem 2rem;
	/* justify-content: center; */
	/* align-items: center; */
`;

export const SidebarSection = styled.div`
	display: flex;
	flex-direction: column;
	height: 50%;
`;

export const SidebarOption = styled.div`
	display: flex;
	justify-content: space-between;
	font-size: 18px;
	padding: 1rem;
	cursor: pointer;
	border-radius: 6px;
	transition: all 200ms;

	&:hover {
		background-color: ${$greyLighter};
	}

	& span {
		font-weight: 300;
	}
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
	padding: 5px 10px;
	margin: 3px;
	font-size: 14px;
	line-height: 0;
	cursor: pointer;
	transition: all 200ms;

	&:hover {
		background-color: ${$greyLighter};
	}
`;

export const Dashboard = styled.div`
	display: grid;
	grid-template-rows: repeat(2, min-content) 1fr;
	grid-template-columns: 65% 1fr;
	background-color: ${$white};
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
		font-size: 14px;
		margin-right: 1rem;
	}
`;

export const FilterByType = styled.div`
	display: flex;
	align-items: center;
	padding: 1rem;

	justify-content: flex-end;

	& span:first-of-type {
		font-size: 14px;
		margin-right: 0.5rem;
	}
`;
