import React from 'react';
import PropTypes from 'prop-types';

import BadgeContainer from './Badge.styled';

const Badge = ({ text, clickHandler }) => (
	<BadgeContainer type="button" onClick={clickHandler}>
		{text}
	</BadgeContainer>
);

Badge.propTypes = {
	text: PropTypes.string.isRequired,
	clickHandler: PropTypes.func.isRequired,
};

export default Badge;
