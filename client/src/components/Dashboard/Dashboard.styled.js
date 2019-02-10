import styled from 'styled-components';
import { lighten } from 'polished';

import { $white, $grey } from '../../assets/styledVars';

export const Container = styled.section`
	height: 80vh;
	padding: 0 2.5rem;
	width: 100%;

	@media (min-width: 1000px) {
		width: 80%;
		margin: 0 auto;
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
	background-color: ${lighten(0.5, $grey)};
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
		background-color: ${lighten(0.4, $grey)};
	}

	& span {
		font-weight: 300;
		color: ${lighten(0.2, $grey)};
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
	background-color: ${lighten(0.5, $grey)};
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
