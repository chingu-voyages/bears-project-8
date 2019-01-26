import React from 'react';
import PropTypes from 'prop-types';
import { CheckboxContainer, StyledCheckbox } from './Checkbox.styled';

const Checkbox = ({ options, setReminderType, reminderTypes }) => {
	const width = 100 / options.length - 2;
	const boxes = options.map(option => {
		const isActive = reminderTypes[option];
		return (
			<StyledCheckbox
				active={isActive}
				style={{ width: `${width}%` }}
				onClick={() => setReminderType(option)}
				key={option}
			>
				{option}
			</StyledCheckbox>
		);
	});
	return <CheckboxContainer>{boxes}</CheckboxContainer>;
};

Checkbox.propTypes = {
	options: PropTypes.arrayOf(PropTypes.string).isRequired,
	setReminderType: PropTypes.func.isRequired,
	reminderTypes: PropTypes.shape({
		email: PropTypes.bool.isRequired,
		inApp: PropTypes.bool.isRequired,
		push: PropTypes.bool.isRequired,
	}).isRequired,
};

export default Checkbox;
