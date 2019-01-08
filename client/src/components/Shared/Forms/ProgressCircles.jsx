import React from 'react';
import PropTypes from 'prop-types';
import ProgressCircle, { Container } from './ProgressCircle.styled';

const ProgressCircles = props => {
	const { step, totalSteps, setStep } = props;
	const circles = [];
	for (let i = 0; i < totalSteps; i += 1) {
		if (step === i) {
			circles.push(<ProgressCircle key={i} onClick={() => setStep(i)} current />);
		} else {
			circles.push(<ProgressCircle key={i} onClick={() => setStep(i)} />);
		}
	}
	return <Container>{circles}</Container>;
};
ProgressCircles.propTypes = {
	step: PropTypes.number.isRequired,
	totalSteps: PropTypes.number.isRequired,
	setStep: PropTypes.func.isRequired,
};

export default ProgressCircles;
