import React from 'react';
import { withRouter } from 'react-router-dom';

import { Container, Breadcrumbs, ProfileSection, Sidebar, Dashboard } from './Profile.styled';

import CircleImg from '../Shared/CircleImg/CircleImg';

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
				Dashboard &gt;
			</span>{' '}
			Profile
		</Breadcrumbs>
		<ProfileSection>
			<Sidebar>
				<CircleImg
					clickHandler={() => {}}
					size="large"
					type="avatar"
					title="User name"
					subtitle="A short bio here that the user could edit, otherwise it has some dummy text"
				/>
				{/* User info */}
				{/* User actions */}
			</Sidebar>
			<Dashboard>Dashboard content</Dashboard>
		</ProfileSection>
	</Container>
);

export default withRouter(Profile);
