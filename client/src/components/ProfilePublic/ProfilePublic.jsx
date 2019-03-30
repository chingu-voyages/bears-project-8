import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import PageContainer from '../Shared/PageContainer/PageContainer';
import CircleImg from '../Shared/CircleImg/CircleImg';

import { ProfileSection, Header, About, ProfileName } from './ProfilePublic.styled';

const ProfilePublic = ({ history, user }) => (
	<PageContainer
		breadCrumbs={{
			crumbHistory: [{ name: 'Dashboard', link: '/dashboard' }],
			current: 'Profile',
		}}
		history={history}
	>
		<ProfileSection>
			<Header>
				{/* Add friend badge somewhere here */}
				<ProfileName>{user.name}</ProfileName>
				<CircleImg
					clickHandler={() => null}
					imgUrl={user.avatar}
					size="large"
					type="avatar"
					subtitle={user.about || 'Nothing here yet!'}
				/>
			</Header>
			<About>
				<div>
					<h3 className="about__title">Friends:</h3>
					<div className="about__friends">
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
					</div>
				</div>
				<div>
					<h3 className="about__title">Goals:</h3>
					<div className="about__goals">
						{/* We're still missing Goals form, I'll leave this here as TODO */}
						{user.goals && user.goals.length > 0 ? null : (
							<p>User don&apos;t have any shared goals</p>
						)}
					</div>
				</div>
			</About>
		</ProfileSection>
	</PageContainer>
);

ProfilePublic.propTypes = {
	user: PropTypes.shape({
		name: PropTypes.string.isRequired,
		avatar: PropTypes.string,
		goals: PropTypes.arrayOf(PropTypes.shape({})),
		friends: PropTypes.arrayOf(PropTypes.shape({})),
		dateCreated: PropTypes.string,
	}).isRequired,
};

const mapStateToProps = state => ({
	user: state.auth.user,
});

export default withRouter(connect(mapStateToProps)(ProfilePublic));
