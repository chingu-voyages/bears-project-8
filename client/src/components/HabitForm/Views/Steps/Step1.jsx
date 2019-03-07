import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Row } from '../../HabitForm.styled';
import FormGroup from '../../../Shared/Forms/FormGroup';

const Step1 = ({
	errors,
	times,
	period,
	reminderEvery,
	reminderTypes,
	onChange,
	setReminderType,
}) => (
	<Fragment>
		<Row>
			<FormGroup
				title="How often do you want to complete this habit?"
				description="Once, twice, three times?"
				name="times"
				value={times}
				onChange={onChange}
				placeholder="Choose a frequency..."
				size={2}
				type="dropdown"
				options={['Once', 'Twice', '3 times', '4 times']}
				errors={errors && errors.times}
			/>
			<FormGroup
				title="&nbsp;"
				description="Every week? Every month?"
				name="period"
				value={period}
				onChange={onChange}
				placeholder="Choose a time period..."
				size={2}
				type="dropdown"
				options={['Daily', 'Weekly', 'Monthly', 'Biannually', 'Yearly']}
				errors={errors && errors.period}
			/>
		</Row>
		<Row>
			<FormGroup
				title="How often do you want to be reminded?"
				description="Keep your habits fresh with a cue"
				name="reminderEvery"
				value={reminderEvery}
				onChange={onChange}
				placeholder="Choose a time period..."
				size={2}
				type="dropdown"
				options={['Daily', 'Weekly', 'Monthly', 'Biannually', 'Yearly']}
				errors={errors && errors.reminderEvery}
			/>
			<FormGroup
				title="How do you want to be reminded?"
				description="This can always be changed later"
				name="reminderTypes"
				placeholder="Select how you would like to be reminded..."
				size={2}
				type="checkboxes"
				onCheck={setReminderType}
				optionState={reminderTypes}
				options={['Email', 'In-App', 'Push']}
				errors={errors && errors.reminderTypes}
			/>
		</Row>
	</Fragment>
);

Step1.propTypes = {
	onChange: PropTypes.func.isRequired,
	times: PropTypes.string.isRequired,
	period: PropTypes.string.isRequired,
	reminderEvery: PropTypes.string.isRequired,
	reminderTypes: PropTypes.shape({
		email: PropTypes.bool.isRequired,
		inApp: PropTypes.bool.isRequired,
		push: PropTypes.bool.isRequired,
	}).isRequired,
	errors: PropTypes.shape({
		times: PropTypes.string,
		period: PropTypes.string,
		reminderEvery: PropTypes.string,
		reminderTypes: PropTypes.string,
	}).isRequired,
	setReminderType: PropTypes.func.isRequired,
};

export default Step1;
