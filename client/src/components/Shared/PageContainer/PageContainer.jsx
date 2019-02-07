import React from 'react';
import { Container, PageBox } from './PageContainer.styled';

export default ({ children }) => (
	<Container>
		{/* <Breadcrumbs items={breadcrumbItems} /> */}
		<PageBox>{children}</PageBox>
	</Container>
);
