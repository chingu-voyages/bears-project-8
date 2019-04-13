import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import PageContainer from '../Shared/PageContainer/PageContainer';
import {
	ProfileSection,
	UserName,
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
import { deleteUser } from '../../actions/authActions';

// eslint-disable-next-line no-shadow
const Profile = ({ user, history, deleteUser }) => (
	<PageContainer
		breadCrumbs={{
			crumbHistory: [{ name: 'Dashboard', link: '/dashboard' }],
			current: 'Profile',
		}}
		history={history}
	>
		<ProfileSection>
			<Sidebar>
				<UserName>{user.name}</UserName>
				<CircleImg
					clickHandler={() => null}
					imgUrl={user.avatar}
					size="large"
					type="avatar"
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
					<Button type="simple" clickHandler={() => deleteUser(user.id, history)}>
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
							user.friends.map(friend => (
								<CircleImg
									key={friend.id}
									imgUrl={friend.avatar}
									subtitle={friend.name}
									clickHandler={() => history.push(`/profile/${friend.id}`)}
									size="small"
									type="avatar"
								/>
							))}
						<CircleImg
							clickHandler={() => history.push('/profile/addfriends')}
							size="small"
							type="wPlus"
							subtitle="Add Friends"
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
	deleteUser: PropTypes.func.isRequired,
};

export default withRouter(
	connect(
		mapStateToProps,
		{ deleteUser }
	)(Profile)
);
