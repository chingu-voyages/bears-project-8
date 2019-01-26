import React from 'react';
import { withRouter } from 'react-router-dom';

import { Container, Breadcrumbs, ProfileSection, Sidebar, Dashboard } from './Profile.styled';

const Profile = ({ history }) => (
	<Container>
		<Breadcrumbs>
			{' '}
			<span
				role="link"
				tabIndex="-1"
				onClick={() => history.push('/dashboard')}
				onKeyDown={() => history.push('/dashboard')}
			>
				Dashboard
			</span>
			&gt; Profile
		</Breadcrumbs>
		<ProfileSection>
			<Sidebar>Sidebar</Sidebar>
			<Dashboard>Dashboard content</Dashboard>
		</ProfileSection>
	</Container>
);

export default withRouter(Profile);
