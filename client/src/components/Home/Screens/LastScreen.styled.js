import styled from 'styled-components';
import { darken, lighten } from 'polished';
import { LargeTitle, LargeSubtitle, RegisterButton, FlexRow } from '../Home.styled';
import { $grey } from '../../../assets/styledVars';

export const LastPage = styled.div`
	z-index: 0;
	& * {
		z-index: 20;
	}
	position: relative;
	min-height: 200vh;
	overflow: hidden;
	background: linear-gradient(${lighten(0.4, $grey)}, #fff 43%);
	padding: 0 2rem;

	${LargeTitle} {
		margin: 6rem auto 1rem;
	}
	${LargeSubtitle} {
		display: inline-block;
		font-size: 2.125rem;
		color: ${darken(0.2, $grey)};
		max-width: 800px;
		margin: 16rem auto 10rem;
		z-index: 1;
		position: relative;
		svg {
			position: absolute;
			top: -188px;
			left: -110px;
			z-index: -1;
		}
	}
	${RegisterButton} {
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 1.5rem;
		padding: 1rem;
		height: 80px;
		min-width: 500px;

		@media (max-width: 650px) {
			min-width: 90%;
			width: 80%;
		}
	}

	#circle__four {
		z-index: -10;
		position: absolute;
		right: 94%;
		top: 335px;
	}
	#circle__five {
		z-index: -10;
		position: absolute;
		right: 88%;
		bottom: 50px;
	}
	#circle__six {
		z-index: -10;
		position: absolute;
		right: 83%;
		bottom: -40px;
	}
	#circle__seven {
		z-index: -10;
		position: absolute;
		left: 88%;
		bottom: 120px;
	}
`;

export const AppFeatures = styled(FlexRow)`
	max-width: 770px;
`;

export const AppFeature = styled.div`
	position: relative;
	width: 210px;
	text-align: left;
	svg {
		position: absolute;
		top: -4px;
		left: -21px;
		width: 36px;
	}
	h3 {
		display: inline-block;
		color: ${darken(0.2, $grey)};
		font-size: 1.5rem;
		font-weight: 400;
		padding-left: 2rem;
	}
	p {
		margin-top: 2rem;
		color: ${darken(0.2, $grey)};
		font-size: 1.125rem;
		line-height: 1.5;
	}

	@media (max-width: 700px) {
		margin: 0 auto 4rem;
		width: 66%;
	}
`;

export const StyledScreenshot = styled.img`
	display: block;
	margin: 0 auto;
	width: 100%;
	max-width: 873px;
`;

export const FooterSmall = styled.div`
	font-size: 0.75rem;
	color: ${darken(0.2, $grey)};
	padding: 3rem 0;
	a {
		color: ${darken(0.2, $grey)};
	}
`;
