import styled from 'styled-components';

import { $gray } from '../../../assets/styledVars';

export default styled.h1`
	padding: 1.5rem;
	font-weight: 400;
	font-size: 18px;
	border: none;
	margin: 0;

	& span {
		cursor: pointer;
		color: ${$gray};
	}
`;
