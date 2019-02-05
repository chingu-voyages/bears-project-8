import React from 'react';
import PropTypes from 'prop-types';

import Breadcrumb from './Breadcrumbs.styled';

const Breadcrumbs = ({ children, onClick }) => (
	<Breadcrumb type="button" onClick={onClick}>
		{children}
	</Breadcrumb>
);

Breadcrumbs.propTypes = {
	onClick: PropTypes.func.isRequired,
};

export default Breadcrumbs;
