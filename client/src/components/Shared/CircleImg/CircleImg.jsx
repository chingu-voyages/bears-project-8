import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Title, Subtitle, Image } from './CircleImg.styled';

const CircleImg = ({ type, size, imgUrl, title, subtitle, clickHandler }) => (
	<Wrapper>
		{title && <Title>{title}</Title>}
		<Image type={type} size={size} onClick={clickHandler} />
		{subtitle && <Subtitle>{subtitle}</Subtitle>}
	</Wrapper>
);

CircleImg.propTypes = {
	type: PropTypes.string.isRequired, // round | w plus
	imgUrl: PropTypes.string,
	title: PropTypes.string,
	subtitle: PropTypes.string,
	clickHandler: PropTypes.func.isRequired,
	size: PropTypes.string,
};

CircleImg.defaultProps = {
	imgUrl: '',
	title: '',
	subtitle: '',
	size: 'small',
};

export default CircleImg;
