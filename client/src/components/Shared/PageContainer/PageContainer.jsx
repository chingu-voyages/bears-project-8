import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import { Container, PageBox } from './PageContainer.styled';

const PageContainer = ({ size, children, breadCrumbs, history }) => (
	<Container size={size}>
		<Breadcrumbs {...breadCrumbs} history={history} />
		<PageBox>{children}</PageBox>
	</Container>
);

PageContainer.propTypes = {
	size: PropTypes.string,
};
PageContainer.defaultProps = {
	size: 'regular',
};

export default withRouter(PageContainer);
