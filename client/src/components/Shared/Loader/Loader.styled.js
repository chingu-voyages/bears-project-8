import styled, { css, keyframes } from 'styled-components';

import { $white } from '../../../assets/styledVars';
import styledHelpers from '../../../assets/styledHelpers';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export default styled.span`
	display: block;
	width: 100px;
	height: 100px;
	border-radius: 50%;
	border: 9px solid rgba(255, 255, 255, 0.25);
	border-top-color: ${$white};
	animation: ${spin} 1s infinite linear;

	${props =>
		props.centerAll &&
		css`
			${styledHelpers.centerAll}
		`};
`;
