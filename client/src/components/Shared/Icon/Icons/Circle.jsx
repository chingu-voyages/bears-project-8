import React from 'react';
import PropTypes from 'prop-types';

const Circle = ({ width, height, color, id }) => (
	<svg width={width} height={height} viewBox="0 0 100 100" className="icon__circle" id={id}>
		<circle cx="50" cy="50" r="50" fill={color} />
	</svg>
);

Circle.propTypes = {
	color: PropTypes.string,
	width: PropTypes.number,
	height: PropTypes.number,
	id: PropTypes.string,
};
Circle.defaultProps = {
	color: 'black',
	width: 100,
	height: 100,
	id: '',
};

export default Circle;
