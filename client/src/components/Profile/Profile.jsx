import React from 'react';
import { withRouter } from 'react-router-dom';

import {
	Container,
	Breadcrumbs,
	ProfileSection,
	Sidebar,
	Dashboard,
	UserInfo,
	SectionTitle,
	UserActions,
	Label,
} from './Profile.styled';

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
					clickHandler={() => null}
					size="large"
					type="avatar"
					title="User name"
					subtitle="A short bio here that the user could edit, otherwise it has some dummy text"
				/>
				<UserInfo>
					<div>
						<SectionTitle>Top Tags</SectionTitle>
						<div className="user__tags">
							{/* Map through actual user tags here */}
							<Label>Health</Label>
							<Label>Web Development</Label>
							<Label>Meditation</Label>
						</div>
					</div>
					<div className="user__info">
						<em>Member since December 2018</em>
						<p>Samuel has logged a habit N times</p>
					</div>
				</UserInfo>
				{/* User actions */}
			</Sidebar>
			<Dashboard>Dashboard content</Dashboard>
		</ProfileSection>
	</Container>
);

export default withRouter(Profile);
