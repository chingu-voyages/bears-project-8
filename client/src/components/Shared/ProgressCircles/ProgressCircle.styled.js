import styled from 'styled-components';
import { $animDuration, $greyLighter, $greyLight, $greyDark } from '../../../assets/styledVars';

const ProgressCircle = styled.div`
	${props => (props.current ? `background: ${$greyDark};` : `background: ${$greyLighter};`)}
	display: inline-block;
	border-radius: 50%;
	width: 25px;
	height: 25px;
	margin: 0 0.6rem;
	transition: ${$animDuration};

	&:hover {
		cursor: pointer;
		background: ${$greyLight};
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
