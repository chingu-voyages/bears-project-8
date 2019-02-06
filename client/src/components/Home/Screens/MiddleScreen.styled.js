import styled from 'styled-components';
import { $greyLightest, $greyLight, $greyDark, $ash } from '../../../assets/styledVars';
import { LargeTitle, LargeSubtitle, SmallLink, FlexRow } from '../Home.styled';

export const StyledMiddleScreen = styled.div`
	z-index: 0;
	& * {
		z-index: 20;
	}
	position: relative;
	width: 100%;
	min-height: 100vh;
	background: ${$greyLightest};
	padding: 5rem 2rem 0;

	${LargeTitle} {
		max-width: 600px;
		margin: 0 auto;
	}

	${LargeSubtitle} {
		margin: 3rem 0 0 0;
	}

	${SmallLink} {
		display: inline-block;
		margin: 1rem 0;
		color: ${$greyLight};
	}

	#circle__one {
		z-index: -10;
		position: absolute;
		left: 88%;
		top: -100px;
	}
	#circle__two {
		z-index: -9;
		position: absolute;
		left: 94%;
		top: 135px;
	}
	#circle__three {
		z-index: -10;
		position: absolute;
		right: 94%;
		top: 335px;
	}
`;

export const HabitStages = styled(FlexRow)`
	padding: 5rem 0 5.5rem;

	@media (max-width: 700px) {
		padding: 6.5rem 0 5.5rem;
	}
`;

export const HabitStage = styled.div`
	width: 170px;
	h3 {
		color: ${$ash};
		font-weight: 400;
		text-align: center;
		padding: 1.5rem 0;
	}
	p {
		font-size: 0.9rem;
		color: ${$greyDark};
		line-height: 1.75;
	}
	svg {
		height: 99px;
	}

	@media (max-width: 700px) {
		margin: 0 auto 3rem;
		width: 50%;
	}
`;
