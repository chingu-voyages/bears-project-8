import React from 'react';
import PropTypes from 'prop-types';

import LabelBtn from './Label.styled';

const Label = ({ children, onClick, ...rest }) => (
	<LabelBtn type="button" onKeyDown={onClick} onClick={onClick} {...rest}>
		{children}
	</LabelBtn>
);

Label.propTypes = {
	onClick: PropTypes.func.isRequired,
};

export default Label;
