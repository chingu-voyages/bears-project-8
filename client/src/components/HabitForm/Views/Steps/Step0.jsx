import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Row } from '../../HabitForm.styled';
import FormGroup from '../../../Shared/Forms/FormGroup';

const Step0 = ({ name, tags, description, onChange, onTagDelete, onTagAdd, onTagDrag }) => (
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
				type="tagInput"
				placeholder="E.g. Work, Exercise, Diet..."
				size={2}
				tags={tags}
				onTagDelete={onTagDelete}
				onTagAdd={onTagAdd}
				onTagDrag={onTagDrag}
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

Step0.propTypes = {
	onChange: PropTypes.func.isRequired,
	name: PropTypes.string.isRequired,
	tags: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			text: PropTypes.string.isRequired,
		})
	).isRequired,
	description: PropTypes.string.isRequired,
	onTagDelete: PropTypes.func.isRequired,
	onTagAdd: PropTypes.func.isRequired,
	onTagDrag: PropTypes.func.isRequired,
};

export default Step0;