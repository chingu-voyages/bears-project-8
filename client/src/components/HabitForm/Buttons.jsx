import React from 'react';
import { Button } from './Form.styled';

export const LeftButtons = props => {
	const { step, setStep } = props;
	if (step > 0) return <Button onClick={() => setStep(step - 1)}>Back</Button>;
	return null;
};

export const RightButtons = props => {
	const { step, totalSteps, setStep, onSubmit } = props;
	if (step < totalSteps - 1) {
		return (
			<div style={{ width: '270px' }}>
				<Button secondary onClick={onSubmit}>
					Skip
				</Button>
				<Button onClick={() => setStep(step + 1)}>Next</Button>
			</div>
		);
	}
	if (step === totalSteps - 1) {
		return (
			<div style={{ width: '270px', justifyContent: 'flex-end' }}>
				<Button onClick={onSubmit}>Done</Button>
			</div>
		);
	}
	return null;
};
