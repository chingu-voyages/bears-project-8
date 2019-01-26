import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Row } from '../../HabitForm.styled';
import FormGroup from '../../../Shared/Forms/FormGroup';

const Step1 = ({ times, period, reminderEvery, reminderTypes, onChange }) => (
	<Fragment>
		<Row>
			<FormGroup
				title="How often do you want to complete this habit?"
				name="times"
				value={times}
				onChange={onChange}
				placeholder="Choose a frequency..."
				size={2}
				type="dropdown"
				options={['Once', 'Twice', '3 times', '4 times']}
			/>
			<FormGroup
				title="&nbsp;"
				name="period"
				value={period}
				onChange={onChange}
				placeholder="Choose a time period..."
				size={2}
				type="dropdown"
				options={['Daily', 'Weekly', 'Monthly', 'Biannually', 'Yearly']}
			/>
		</Row>
		<Row>
			<FormGroup
				title="How often do you want to be reminded?"
				name="reminderEvery"
				value={reminderEvery}
				onChange={onChange}
				placeholder="Choose a time period..."
				size={2}
				type="dropdown"
				options={['Daily', 'Weekly', 'Monthly', 'Biannually', 'Yearly']}
			/>
			<FormGroup
				title="How do you want to be reminded?"
				name="reminderTypes"
				value={reminderTypes}
				onChange={onChange}
				placeholder="Select how you would like to be reminded..."
				size={2}
				type="dropdown"
				options={['Email', 'In-App', 'Push']}
			/>
		</Row>
	</Fragment>
);

Step1.propTypes = {
	onChange: PropTypes.func.isRequired,
	times: PropTypes.string.isRequired,
	period: PropTypes.string.isRequired,
	reminderEvery: PropTypes.string.isRequired,
	reminderTypes: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Step1;
