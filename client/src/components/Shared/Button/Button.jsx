import React from 'react';
import PropTypes from 'prop-types';

import { ButtonWrapper } from './Button.styled';

const Button = ({ size, color, bgColor, children, clickHandler, type }) => (
	<ButtonWrapper size={size} type={type} bgColor={bgColor} color={color} onClick={clickHandler}>
		{children}
	</ButtonWrapper>
);

Button.propTypes = {
	color: PropTypes.string,
	bgColor: PropTypes.string,
	type: PropTypes.oneOf(['simple', 'filled']).isRequired,
	size: PropTypes.oneOf(['small', 'regular', 'large']),
	clickHandler: PropTypes.func.isRequired,
};

Button.defaultProps = {
	color: '#5cbc9a',
	size: 'regular',
	bgColor: '',
};

export default Button;
