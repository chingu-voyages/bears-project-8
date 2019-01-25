import React from 'react';
import PropTypes from 'prop-types';
import { StyledFormGroup, Input, Label, Textarea, StyledDropdown } from './Form.styled';

const FormGroup = props => {
	const { size, name, title, required, type, onChange } = props;
	const width = size < 4 ? `${size * 25 - 2}%` : `${size * 25}%`;
	let component;
	switch (type) {
		case 'date':
		case 'text':
		case 'email':
		case 'password': {
			component = <Input type={type} {...props} />;
			break;
		}
		case 'textarea': {
			component = <Textarea {...props} />;
			break;
		}
		case 'dropdown': {
			component = (
				<StyledDropdown
					{...props}
					// calls prop onChange with a regular e.target name and value
					onChange={({ value }) => onChange({ target: { name, value } })}
				/>
			);
			break;
		}
		default:
			break;
	}
	return (
		<StyledFormGroup width={width}>
			<Label htmlFor={name}>
				{title} {required && <span style={{ color: '#d20f0f' }}>*</span>}
			</Label>
			{component}
		</StyledFormGroup>
	);
};

FormGroup.propTypes = {
	title: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	value: PropTypes.oneOfType([PropTypes.array, PropTypes.string]).isRequired,
	onChange: PropTypes.func.isRequired,
	placeholder: PropTypes.string.isRequired,
	type: PropTypes.string,
	size: PropTypes.oneOf([1, 2, 4]),
	required: PropTypes.bool,
};

FormGroup.defaultProps = {
	type: 'text',
	// size of element defaults to fill the screen, i.e. four 'quarters'
	size: 4,
	required: false,
};

export default FormGroup;
