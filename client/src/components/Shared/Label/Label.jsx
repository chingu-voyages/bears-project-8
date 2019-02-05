import React from 'react';
import PropTypes from 'prop-types';

const Label = ({ children, onClick }) => (
	<button type="button" onKeyDown={onClick} onClick={onClick}>
		{children}
	</button>
);

Label.propTypes = {
	onClick: PropTypes.func.isRequired,
};

export default Label;
