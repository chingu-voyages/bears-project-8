import React from 'react';
import PropTypes from 'prop-types';
import { CheckboxContainer, StyledCheckbox } from './Checkbox.styled';

const Checkbox = ({ options, onCheck, optionState }) => {
	const width = 100 / options.length - 2;
	const boxes = options.map(option => {
		const isActive = optionState[option];
		return (
			<StyledCheckbox
				active={isActive}
				style={{ width: `${width}%` }}
				onClick={() => onCheck(option)}
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
	onCheck: PropTypes.func.isRequired,
	// because this is a reusable component, we don't know what the keys here will be
	// eslint-disable-next-line react/forbid-prop-types
	optionState: PropTypes.object.isRequired,
};

export default Checkbox;
