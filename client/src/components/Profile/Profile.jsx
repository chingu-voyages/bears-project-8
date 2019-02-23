import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import PageContainer from '../Shared/PageContainer/PageContainer';
import {
	ProfileSection,
	Sidebar,
	Dashboard,
	UserInfo,
	SectionTitle,
	UserActions,
	Label,
	Connections,
	Goals,
	Goal,
} from './Profile.styled';

import CircleImg from '../Shared/CircleImg/CircleImg';
import Button from '../Shared/Button/Button';

const Profile = ({ user, history }) => (
	<PageContainer
		breadCrumbs={{
			crumbHistory: [{ name: 'Dashboard', link: '/dashboard' }],
			current: 'Profile',
		}}
		history={history}
	>
		<ProfileSection>
			<Sidebar>
				<CircleImg
					clickHandler={() => null}
					imgUrl={user.avatar}
					size="large"
					type="avatar"
					title={user.name}
					subtitle={
						user.about || 'Edit your profile and add something about yourself here!'
					}
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
						<p>User has logged a habit 0 times</p>
					</div>
				</UserInfo>
				{/* User actions */}
				<UserActions>
					<Button type="simple" clickHandler={() => history.push('/profile/edit')}>
						Edit Profile
					</Button>
					<Button type="simple" clickHandler={() => {}}>
						Delete Profile
					</Button>
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
						{user.friends &&
							user.friends.length > 0 &&
							user.friends.map(fr => (
								<CircleImg
									imgUrl={fr.avatar}
									subtitle={fr.name}
									clickHandler={() => null}
									size="small"
								/>
							))}
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
						{user.goals && user.goals.length > 0 ? (
							<Goal />
						) : (
							<p>
								Think about what you want. Then add some goals{' '}
								<span aria-label="slightly smiling emoji" role="img">
									🙂
								</span>
								{/* Add some goals should be a link to a new goal form */}
							</p>
						)}
					</div>
				</Goals>
			</Dashboard>
		</ProfileSection>
	</PageContainer>
);

const mapStateToProps = ({ auth }) => ({
	user: auth.user,
});

Profile.propTypes = {
	user: PropTypes.shape({
		name: PropTypes.string.isRequired,
		avatar: PropTypes.string,
		goals: PropTypes.arrayOf(PropTypes.shape({})),
		friends: PropTypes.arrayOf(PropTypes.shape({})),
		dateCreated: PropTypes.string,
	}).isRequired,
	// habitsLogged: PropTypes.number,
};

export default withRouter(connect(mapStateToProps)(Profile));
