import React from 'react';
import PropTypes from 'prop-types';

import { Container, CrumbLink, CurrentCrumb } from './Breadcrumbs.styled';

const Breadcrumbs = ({ crumbHistory, current, history }) => {
	const crumbList = crumbHistory.map(crumb => (
		<CrumbLink
			role="link"
			tabIndex="-1"
			onClick={() => history.push(crumb.link)}
			onKeyDown={() => history.push(crumb.link)}
			key={crumb.name}
		>
			{crumb.name} »
		</CrumbLink>
	));
	return (
		<Container>
			{crumbList}
			<CurrentCrumb>{current}</CurrentCrumb>
		</Container>
	);
};

Breadcrumbs.propTypes = {
	current: PropTypes.string.isRequired,
	crumbHistory: PropTypes.arrayOf(
		PropTypes.shape({
			link: PropTypes.string.isRequired,
		})
	),
};
Breadcrumbs.defaultProps = {
	crumbHistory: [],
};

export default Breadcrumbs;
