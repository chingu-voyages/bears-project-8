import styled from 'styled-components';
import { darken, lighten } from 'polished';

import { $grey } from '../../assets/styledVars';

import { ButtonWrapper } from '../Shared/Button/Button.styled';

export const Container = styled.div`
	display: flex;
	justify-content: space-between;
	padding: ${({ isCollapsed }) => (isCollapsed ? `1rem 2rem` : '0')};
	position: relative;
	border-bottom: 0.5px solid ${lighten(0.5, $grey)};
`;

export const FullHabit = styled.div`
	display: grid;
	background-color: ${lighten(0.5, $grey)};
	height: 180px;
	width: 100%;
	padding: 1rem 2rem;
	position: relative;
	grid-template-rows: 25% 1fr 25%;
	grid-template-columns: 25% 1fr min-content;
	align-items: center;

	${ButtonWrapper} {
		justify-self: end;
	}
`;

// TODO: See if this can be used as a shared style component
export const FlexContainer = styled.div`
	display: flex;
	${({ alignCenter }) => alignCenter && `align-items: center;`}
`;

export const Title = styled.p`
	font-size: 16px;
	font-weight: 500;
`;

export const RepeatPeriod = styled.p`
	font-size: 14px;
	font-weight: 300;
	font-style: italic;
`;

export const Description = styled.p`
	padding: 1rem 1.5rem;
	font-size: 14px;
	grid-column: 1/4;
	color: ${darken(0.2, $grey)};
	display: flex;
	justify-content: flex-start;
	align-items: center;
`;
