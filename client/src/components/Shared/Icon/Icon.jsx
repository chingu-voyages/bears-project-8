import React from 'react';
import PropTypes from 'prop-types';
import Logo from './Icons/Logo';
import Write from './Icons/Write';
import Bell from './Icons/Bell';
import Log from './Icons/Log';
import Tick from './Icons/Tick';
import Rocket from './Icons/Rocket';
import ComputerGraph from './Icons/ComputerGraph';
import Circle from './Icons/Circle';

const Icon = ({ name, color, width, height, id }) => {
	switch (name) {
		case 'logo':
			return <Logo />;
		case 'write':
			return <Write color={color} />;
		case 'bell':
			return <Bell color={color} />;
		case 'log':
			return <Log color={color} />;
		case 'computerGraph':
			return <ComputerGraph color={color} />;
		case 'tick':
			return <Tick color={color} />;
		case 'rocket':
			return <Rocket color={color} />;
		case 'circle':
			return <Circle width={width} height={height} color={color} id={id} />;
		default:
			return <div>No icon provided</div>;
	}
};

Icon.propTypes = {
	name: PropTypes.string.isRequired,
	color: PropTypes.string,
	width: PropTypes.number,
	height: PropTypes.number,
	id: PropTypes.string,
};

Icon.defaultProps = {
	color: 'black',
	width: 100,
	height: 100,
	id: '',
};

export default Icon;
