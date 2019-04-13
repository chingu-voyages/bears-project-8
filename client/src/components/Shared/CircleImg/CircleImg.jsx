import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Subtitle, Image, PlusCircle } from './CircleImg.styled';

const CircleImg = ({ type, size, imgUrl, subtitle, clickHandler }) => (
	<Wrapper>
		{type !== 'wPlus' ? (
			<Image type={type} size={size} onClick={clickHandler} src={imgUrl} />
		) : (
			<PlusCircle size={size} onClick={clickHandler}>
				+
			</PlusCircle>
		)}

		{subtitle && <Subtitle>{subtitle}</Subtitle>}
	</Wrapper>
);

CircleImg.propTypes = {
	type: PropTypes.oneOf(['wPlus', 'avatar']).isRequired,
	imgUrl: PropTypes.string,
	subtitle: PropTypes.string,
	clickHandler: PropTypes.func.isRequired,
	size: PropTypes.string,
};

CircleImg.defaultProps = {
	imgUrl: '',
	subtitle: '',
	size: 'small',
};

export default CircleImg;
