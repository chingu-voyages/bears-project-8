import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Row } from '../../HabitForm.styled';
import FormGroup from '../../../Shared/Forms/FormGroup';

const Zero = ({ name, tags, description, onChange }) => (
	<Fragment>
		<Row>
			<FormGroup
				title="Habit Name"
				name="name"
				value={name}
				onChange={onChange}
				placeholder="E.g. Running, Workout, Drink water, Floss..."
				size={2}
				required
			/>
			<FormGroup
				title="Tags"
				name="tags"
				value={tags}
				onChange={onChange}
				placeholder="E.g. Work, Exercise, Diet..."
				size={2}
			/>
		</Row>
		<FormGroup
			title="Description"
			name="description"
			value={description}
			onChange={onChange}
			type="textarea"
			placeholder="Add any details about the habit here..."
			size={4}
		/>
	</Fragment>
);

Zero.propTypes = {
	onChange: PropTypes.func.isRequired,
	name: PropTypes.string.isRequired,
	tags: PropTypes.arrayOf(PropTypes.string).isRequired,
	description: PropTypes.string.isRequired,
};

export default Zero;
