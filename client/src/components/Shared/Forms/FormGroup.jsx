import React from 'react';
import PropTypes from 'prop-types';
import { StyledFormGroup, Input, Label, Textarea } from './Form.styled';

const FormGroup = props => {
	const { title, name, value, onChange, type, placeholder, size, required } = props;
	const width = size < 4 ? `${size * 25 - 2}%` : `${size * 25}%`;
	return (
		<StyledFormGroup width={width}>
			<Label htmlFor={name}>
				{title} {required && <span style={{ color: '#d20f0f' }}>*</span>}
			</Label>
			{type === 'textarea' ? (
				<Textarea value={value} name={name} onChange={onChange} placeholder={placeholder} />
			) : (
				<Input
					value={value}
					name={name}
					onChange={onChange}
					type={type}
					placeholder={placeholder}
				/>
			)}
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
	// can be 1, 2 or 4 'quarters'
	size: PropTypes.number,
	required: PropTypes.bool,
};

FormGroup.defaultProps = {
	// TODO: can I add onChange function as a default here?
	type: 'text',
	// size of element defaults to fill the screen, i.e. four 'quarters'
	size: 4,
	required: false,
};

export default FormGroup;
