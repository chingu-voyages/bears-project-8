import React from 'react';
import PropTypes from 'prop-types';

import { ButtonWrapper } from './Button.styled';

const Button = ({ color, children, clickHandler, type }) => (
	<ButtonWrapper type={type} color={color} onClick={clickHandler}>
		{children}
	</ButtonWrapper>
);

Button.propTypes = {
	color: PropTypes.string,
	type: PropTypes.string.isRequired, // simple | filled
	clickHandler: PropTypes.func.isRequired,
};

Button.defaultProps = {
	color: 'green',
};

export default Button;
