import React from 'react';
import PropTypes from 'prop-types';

const Breadcrumbs = ({ children, onClick }) => (
	<button type="button" onClick={onClick}>
		{children}
	</button>
);

Breadcrumbs.propTypes = {
	onClick: PropTypes.func.isRequired,
};

export default Breadcrumbs;
