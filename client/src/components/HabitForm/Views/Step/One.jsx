import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Row } from '../../HabitForm.styled';
import FormGroup from '../../../Shared/Forms/FormGroup';

const One = ({ times, period, reminderEvery, reminderTypes, onChange }) => (
	<Fragment>
		<Row>
			{/* TODO: make this a dropdown -- use an external library for now? */}
			<FormGroup
				title="How often do you want to complete this habit?"
				name="times"
				value={times}
				onChange={onChange}
				placeholder="Once, Twice..."
				size={2}
			/>
			{/* TODO: make this a dropdown */}
			<FormGroup
				title="&nbsp;"
				name="period"
				value={period}
				onChange={onChange}
				placeholder="Daily, Weekly, Monthly, Yearly..."
				size={2}
			/>
		</Row>
		<Row>
			{/* TODO: make this a dropdown */}
			<FormGroup
				title="How often would you like to be reminded?"
				name="reminderEvery"
				value={reminderEvery}
				onChange={onChange}
				placeholder="Daily, Weekly, Monthly..."
				size={2}
			/>
			{/* TODO: make this a dropdown */}
			<FormGroup
				title="How would you like to be reminded?"
				name="reminderTypes"
				value={reminderTypes}
				onChange={onChange}
				placeholder="Email, Push, In-App..."
				size={2}
			/>
		</Row>
	</Fragment>
);

One.propTypes = {
	onChange: PropTypes.func.isRequired,
	times: PropTypes.string.isRequired,
	period: PropTypes.string.isRequired,
	reminderEvery: PropTypes.string.isRequired,
	reminderTypes: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default One;
