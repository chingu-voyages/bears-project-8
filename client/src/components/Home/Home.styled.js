import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Layered content can get tricky, here are some z-indices to keep in mind
// background divs: 0
// background elements: 1 - 10
// baseline: 20 +

export const Container = styled.div`
	text-align: center;
	overflow-x: hidden;
`;

/* =============================================
									First Page
============================================= */

export const FirstPage = styled.div`
	z-index: 0;
	* {
		z-index: 20;
	}
	position: relative;
	width: 100%;
	min-height: 100vh;
	background: linear-gradient(15deg, #e8e8e8, #ffffff 80%);
	padding: 160px 2rem 4rem;

	.icon__logo {
		height: 322px;
		padding: 3rem 0;
	}
`;

export const HomeNav = styled.div`
	z-index: 20;
	position: absolute;
	top: 0;
	left: 0;
	height: 100px;
	width: 100%;
	display: flex;
	justify-content: center;
	padding: 0 2rem;
`;

export const NavContent = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	max-width: 1024px;
`;

export const Logo = styled.div`
	font-size: 24;
	color: #323232;
	font-size: 1.5rem;
	display: flex;
	justify-content: center;
	align-items: center;

	.icon__logo {
		height: 60px;
		padding-right: 1rem;
	}
`;

export const NavLinks = styled.div``;

export const NavLink = styled(Link)`
	transition: 0.3s;
	border-radius: 6px;
	display: inline-block;
	padding: 0.5rem 2rem;
	text-decoration: none;
	background: transparent;
	${({ highlight }) => highlight && 'border: 2px solid #D5F1E7; &:hover{ background: #d5f1e7 }'};
	color: #5e5e5e;
	font-size: 1.125rem;
	margin-left: 2rem;
	&:hover {
		color: #477d6a;
	}
`;

export const LargeTitle = styled.h1`
	color: #5e5e5e;
	font-size: 2.25rem;
	font-weight: 500;
`;

export const LargeSubtitle = styled.div`
	font-size: 1.5rem;
	color: #878787;
	line-height: 1.5;
`;

export const RegisterButton = styled.a`
	display: block;
	text-decoration: none;
	width: 200px;
	padding: 1rem;
	font-size: 1.125rem;
	color: #fff;
	background: #5cbc9a;
	margin: 3.5rem auto 0;
	border-radius: 6px;
	cursor: pointer;
	border: none;
	transition: 0.3s;
	&:hover {
		background: #bbead9;
		color: #477d6a;
	}
`;

export const SmallLink = styled.a`
	text-decoration: none;
	color: #5e5e5e;
	font-size: 0.8rem;
`;

/* =============================================
									Middle Section
============================================= */

export const MiddleSection = styled.div`
	z-index: 0;
	& * {
		z-index: 20;
	}
	position: relative;
	width: 100%;
	min-height: 100vh;
	background: #f8f8f8;
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
		color: #c4c4c4;
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

export const FlexRow = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	max-width: 860px;
	padding: 4rem 0;
	margin: 0 auto;

	@media (max-width: 700px) {
		display: block;
	}
`;

export const HabitStages = styled(FlexRow)`
	padding: 5rem 0 5.5rem;
`;

export const HabitStage = styled.div`
	width: 170px;
	h3 {
		color: #5e5e5e;
		font-weight: 400;
		text-align: center;
		padding: 1.5rem 0;
	}
	p {
		font-size: 0.9rem;
		color: #878787;
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

/* =============================================
									Last Page
============================================= */

export const LastPage = styled.div`
	z-index: 0;
	& * {
		z-index: 20;
	}
	position: relative;
	min-height: 200vh;
	overflow: hidden;
	background: linear-gradient(#e8e8e8, #ffffff 43%);
	padding: 0 2rem;

	${LargeTitle} {
		margin-top: 6rem;
	}
	${LargeSubtitle} {
		display: inline-block;
		font-size: 2.125rem;
		color: #5e5e5e;
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
		color: #5e5e5e;
		font-size: 1.5rem;
		font-weight: 400;
		padding-left: 2rem;
	}
	p {
		margin-top: 2rem;
		color: #7c7c7c;
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

export const FooterSmall = styled.p`
	font-size: 0.75rem;
	color: #7c7c7c;
	padding: 3rem 0;
	a {
		color: #7c7c7c;
	}
`;
