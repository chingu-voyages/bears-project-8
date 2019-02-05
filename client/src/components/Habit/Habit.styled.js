import styled from 'styled-components';

import { $greyLightest, $greyDark } from '../../assets/styledVars';

export const Container = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 1rem 2rem;
	position: relative;
	border-bottom: 0.5px solid ${$greyLightest};
`;

export const FullHabit = styled.div`
	display: grid;
	background-color: ${$greyLightest};
	height: 180px;
	width: 100%;
	padding: 1rem 2rem;
	position: relative;
	grid-template-rows: 25% 1fr 25%;
	grid-template-columns: 25% 1fr 25%;
`;

// TODO: See if this can be used as a shared style component
export const FlexContainer = styled.div`
	display: flex;
`;

export const Description = styled.p`
	padding: 1rem 1.5rem;
	font-size: 14px;
	grid-column: 1/4;
	color: ${$greyDark};
	display: flex;
	justify-content: flex-start;
	align-items: center;
`;
