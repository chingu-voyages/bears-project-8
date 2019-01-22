import React from 'react';
import PropTypes from 'prop-types';

import { ContentArea, Row } from '../HabitForm.styled';
import FormGroup from '../../Shared/Forms/FormGroup';

const Content = ({
	step,
	name,
	tags,
	description,
	times,
	period,
	reminderEvery,
	reminderTypes,
	difficulty,
	habitType,
	habitStart,
	onChange,
}) => {
	switch (step) {
		case 0:
			return (
				<ContentArea>
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
				</ContentArea>
			);
		case 1:
			return (
				<ContentArea>
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
				</ContentArea>
			);
		case 2:
			return (
				<ContentArea>
					<Row>
						{/* TODO: make this a dropdown */}
						<FormGroup
							title="Difficulty"
							name="difficulty"
							value={difficulty}
							onChange={onChange}
							placeholder="Trivial, Easy, Medium, Hard, Epic..."
							size={2}
						/>
						{/* TODO: make this a dropdown */}
						<FormGroup
							title="Habit Type"
							name="habitType"
							value={habitType}
							onChange={onChange}
							placeholder="Active, Passive..."
							size={2}
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
				</ContentArea>
			);
		default:
			return <ContentArea>No form content to show!</ContentArea>;
	}
};

// TODO: make dropdown elements a oneOf PropType
Content.propTypes = {
	onChange: PropTypes.func.isRequired,
	step: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
	tags: PropTypes.arrayOf(PropTypes.string).isRequired,
	description: PropTypes.string.isRequired,
	times: PropTypes.string.isRequired,
	period: PropTypes.string.isRequired,
	reminderEvery: PropTypes.string.isRequired,
	reminderTypes: PropTypes.arrayOf(PropTypes.string).isRequired,
	difficulty: PropTypes.string.isRequired,
	habitType: PropTypes.string.isRequired,
};

export default Content;
