import styled from 'styled-components';
import { darken, lighten } from 'polished';
import { $animDuration, $grey } from '../../../assets/styledVars';

const ProgressCircle = styled.div`
	${props =>
		props.current
			? `background: ${darken(0.2, $grey)};`
			: `background: ${lighten(0.4, $grey)};`}
	display: inline-block;
	border-radius: 50%;
	width: 25px;
	height: 25px;
	margin: 0 0.6rem;
	transition: ${$animDuration};

	&:hover {
		cursor: pointer;
		background: ${lighten(0.2, $grey)};
	}

	@media only screen and (max-width: 960px) {
		position: relative;
		top: 4rem;
	}
`;

ProgressCircle.defaultProps = {
	current: false,
};

export default ProgressCircle;

export const Container = styled.div`
	position: absolute;
	left: 50%;
	transform: translate(-50%, 0);
`;
