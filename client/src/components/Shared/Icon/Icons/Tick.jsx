import React from 'react';
import PropTypes from 'prop-types';

const Tick = ({ color }) => (
	<svg width="42" height="42" viewBox="0 0 42 42">
		<circle cx="21" cy="21" r="21" fill={color} />
		<path
			d="M17.1038 24.5604L28.276 12.4025C28.9846 11.6313 30.1929 11.6058 30.9334 12.3464C31.6154 13.0283 31.6555 14.121 31.0253 14.8511L19.4857 28.2201C18.2517 29.6497 16.0196 29.5973 14.8542 28.1113L10.4577 22.5058C10.0334 21.9648 9.94433 21.2331 10.2265 20.6062C10.7816 19.3725 12.4305 19.1333 13.3133 20.1585L17.1038 24.5604Z"
			fill="white"
		/>
	</svg>
);

Tick.propTypes = {
	color: PropTypes.string,
};
Tick.defaultProps = {
	color: 'black',
};

export default Tick;
