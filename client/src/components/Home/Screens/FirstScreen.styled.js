import styled from 'styled-components';
import { $greyLighter } from '../../../assets/styledVars';

const StyledFirstScreen = styled.div`
	z-index: 0;
	* {
		z-index: 20;
	}
	position: relative;
	width: 100%;
	min-height: 100vh;
	background: linear-gradient(15deg, ${$greyLighter}, #fff 80%);
	padding: 160px 2rem 4rem;

	.icon__logo {
		height: 322px;
		padding: 3rem 0;
	}
`;

export default StyledFirstScreen;
