import styled from 'styled-components';

const ProgressCircle = styled.div`
	${props => (props.current ? 'background: #757575;' : 'background: #e8e8e8;')}
	display: inline-block;
	border-radius: 50%;
	width: 25px;
	height: 25px;
	margin: 0 0.6rem;

	&:hover {
		cursor: pointer;
		background: #c4c4c4;
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
