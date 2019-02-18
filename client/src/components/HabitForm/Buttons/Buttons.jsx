import React from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonGroup } from '../../Shared/Forms/Form.styled';

export const LeftButtons = ({ step, setStep }) => {
	if (step > 0)
		return (
			<Button secondary onClick={() => setStep(step - 1)}>
				Back
			</Button>
		);
	// empty div to push over right buttons
	return <div />;
};
LeftButtons.propTypes = {
	step: PropTypes.number.isRequired,
	setStep: PropTypes.func.isRequired,
};

export const RightButtons = ({ step, totalSteps, setStep, onSubmit }) => {
	if (step < totalSteps - 1) {
		return (
			<ButtonGroup>
				<Button secondary onClick={onSubmit}>
					Skip
				</Button>
				<Button onClick={() => setStep(step + 1)}>Next</Button>
			</ButtonGroup>
		);
	}
	if (step === totalSteps - 1) {
		return (
			<ButtonGroup>
				<Button onClick={onSubmit}>Done</Button>
			</ButtonGroup>
		);
	}
	return null;
};
RightButtons.propTypes = {
	step: PropTypes.number.isRequired,
	totalSteps: PropTypes.number,
	setStep: PropTypes.func.isRequired,
	onSubmit: PropTypes.func.isRequired,
};
RightButtons.defaultProps = {
	totalSteps: 3,
};
