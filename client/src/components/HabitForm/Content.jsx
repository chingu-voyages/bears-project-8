import React from 'react';
import PropTypes from 'prop-types';

const Content = props => {
	this.propTypes = {
		state: PropTypes.obj.isRequired,
		onChange: PropTypes.func.isRequired,
	};

	const {
		step,
		name,
		tags,
		description,
		times,
		period,
		reminderEvery,
		reminderTypes,
		difficulty,
		habitType,
		onChange,
	} = this.props;

	return <h1>Form Content</h1>;
};

export default Content;
