import styled from 'styled-components';
import { lighten } from 'polished';

import { $grey } from '../../assets/styledVars';

export const Container = styled.section`
	grid-column: 1/3;
	padding: 2rem 3rem;
	overflow-y: auto;
	max-height: 500px;
`;

export const NoHabits = styled.div`
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	letter-spacing: 1px;
	line-height: 160%;
	font-size: 17px;
	color: ${lighten(0.2, $grey)};
	text-align: center;
`;
