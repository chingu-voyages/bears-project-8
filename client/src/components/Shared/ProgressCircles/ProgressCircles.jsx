import React from 'react';
import PropTypes from 'prop-types';
import ProgressCircle, { Container } from './ProgressCircle.styled';

const ProgressCircles = ({ step, totalSteps, setStep }) => {
	const circles = [];
	for (let i = 0; i < totalSteps; i += 1) {
		circles.push(<ProgressCircle key={i} onClick={() => setStep(i)} current={step === i} />);
	}
	return <Container>{circles}</Container>;
};
ProgressCircles.propTypes = {
	step: PropTypes.number.isRequired,
	totalSteps: PropTypes.number.isRequired,
	setStep: PropTypes.func.isRequired,
};

export default ProgressCircles;
