import React from 'react';
import { ContentArea } from '../HabitForm.styled';
import Step0 from './Steps/Step0';
import Step1 from './Steps/Step1';
import Step2 from './Steps/Step2';

const Views = props => {
	const { step } = props;
	let view;
	switch (step) {
		case 0: {
			view = <Step0 {...props} />;
			break;
		}
		case 1: {
			view = <Step1 {...props} />;
			break;
		}
		case 2: {
			view = <Step2 {...props} />;
			break;
		}
		default:
			return null;
	}
	return <ContentArea>{view}</ContentArea>;
};

export default Views;
