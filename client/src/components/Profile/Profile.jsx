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
	Connections,
	Goals,
} from './Profile.styled';

import CircleImg from '../Shared/CircleImg/CircleImg';
import Button from '../Shared/Button/Button';

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
						<p>User has logged a habit N times</p>
					</div>
				</UserInfo>
				{/* User actions */}
				<UserActions>
					<Button>Edit Profile</Button>
					<Button>Delete Profile</Button>
				</UserActions>
			</Sidebar>
			<Dashboard>
				<Connections>
					<SectionTitle>Friend Connections</SectionTitle>
					<p>
						Friends help keep each other on track with their goals by holding the other
						accountable
					</p>
					<div className="dashboard__friends">
						{/* Spread user's friends here as CircleImg's */}
						<CircleImg
							clickHandler={() => null}
							size="small"
							type="wPlus"
							subtitle="Invite Friends"
						/>
					</div>
				</Connections>
				<Goals>
					<SectionTitle>Goals</SectionTitle>
					<p>
						Goals can help keep our habits in perspective. They are a great reminder of
						why we want to stick to our habits
					</p>
					<div className="dashboard__goals">
						{/* Spread user's goals here, if no goals show some default message */}
						<p>
							Think about what you want. Add some goals{' '}
							<span aria-label="slightly smiling emoji" role="img">
								🙂
							</span>
							{/* Spread user's goals here, if no goals show some default message */}
						</p>
					</div>
				</Goals>
			</Dashboard>
		</ProfileSection>
	</Container>
);

export default withRouter(Profile);
