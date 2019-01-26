import React from 'react';
import PropTypes from 'prop-types';
import { WithContext as ReactTags } from 'react-tag-input';
import {
	StyledFormGroup,
	Input,
	Label,
	Textarea,
	StyledDropdown,
	StyledTagInput,
} from './Form.styled';

const FormGroup = props => {
	const {
		placeholder,
		size,
		name,
		title,
		required,
		type,
		onChange,
		tags,
		tagSuggestions,
		onTagDelete,
		onTagAdd,
		onTagDrag,
	} = props;
	const width = size < 4 ? `${size * 25 - 2}%` : `${size * 25}%`;
	let component;
	switch (type) {
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
		case 'tagInput': {
			component = (
				<StyledTagInput>
					<ReactTags
						tags={tags}
						tagSuggestions={tagSuggestions}
						handleDelete={onTagDelete}
						handleAddition={onTagAdd}
						handleDrag={onTagDrag}
						// what separates tags -- keycodes for enter, comma and tab
						delimiters={[188, 13, 9]}
						autofocus={false}
						placeholder={placeholder}
					/>
				</StyledTagInput>
			);
			break;
		}
		default: {
			component = <Input type={type} {...props} />;
		}
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
