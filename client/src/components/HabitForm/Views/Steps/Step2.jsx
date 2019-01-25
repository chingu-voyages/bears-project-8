import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Row } from '../../HabitForm.styled';
import FormGroup from '../../../Shared/Forms/FormGroup';

const Two = ({ difficulty, habitType, habitStart, onChange }) => (
	<Fragment>
		<Row>
			<FormGroup
				title="Difficulty"
				name="difficulty"
				value={difficulty}
				onChange={onChange}
				placeholder="Choose a difficulty..."
				size={2}
				type="dropdown"
				options={['Trivial', 'Easy', 'Medium', 'Hard', 'Epic']}
			/>
			<FormGroup
				title="Habit Type"
				name="habitType"
				value={habitType}
				onChange={onChange}
				placeholder="Active, Passive..."
				size={2}
				type="dropdown"
				options={['Active', 'Passive']}
			/>
		</Row>
		<FormGroup
			title="When would you like to start this habit?"
			name="habitStart"
			value={habitStart}
			onChange={onChange}
			type="date"
			placeholder="Choose the date you would like to start this habit, or leave it blank to start today"
			size={2}
		/>
	</Fragment>
);

Two.propTypes = {
	onChange: PropTypes.func.isRequired,
	difficulty: PropTypes.string.isRequired,
	habitType: PropTypes.string.isRequired,
	habitStart: PropTypes.string.isRequired,
};

export default Two;
