import React from 'react';
import { ContentArea } from '../HabitForm.styled';
import Zero from './Step/Zero';
import One from './Step/One';
import Two from './Step/Two';

const Views = props => {
	const { step } = props;
	let view;
	switch (step) {
		case 0: {
			view = <Zero {...props} />;
			break;
		}
		case 1: {
			view = <One {...props} />;
			break;
		}
		case 2: {
			view = <Two {...props} />;
			break;
		}
		default:
			return null;
	}
	return <ContentArea>{view}</ContentArea>;
};

export default Views;
