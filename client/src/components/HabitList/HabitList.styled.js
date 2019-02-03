import styled from 'styled-components';

import { $greyLight } from '../../assets/styledVars';

export const Container = styled.section`
	grid-column: 1/3;
	padding: 2rem 3rem;
	overflow-y: auto;
`;

export const Habit = styled.div``;

export const NoHabits = styled.div`
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	letter-spacing: 1px;
	line-height: 160%;
	font-size: 17px;
	color: ${$greyLight};
	text-align: center;
`;
