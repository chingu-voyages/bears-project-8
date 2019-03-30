import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchUser, clearUser } from '../../actions/userActions';

import PageContainer from '../Shared/PageContainer/PageContainer';
import CircleImg from '../Shared/CircleImg/CircleImg';
import Badge from '../Shared/Badge/Badge';

import { ProfileSection, Header, About, ProfileName } from './ProfilePublic.styled';

class ProfilePublic extends Component {
	componentDidMount() {
		console.log('MOUNTED');
		if (!this.props.isMainUser) {
			// fetch another users' profile
			this.props.fetchUser(this.props.match.params.id);
		}
	}

	componentDidUpdate(prevProps) {
		if (this.props.match.params.id !== prevProps.match.params.id) {
			this.props.fetchUser(this.props.match.params.id);
		}
	}

	componentWillUnmount() {
		this.props.clearUser();
	}

	render() {
		const { history, user } = this.props;

		console.log('USER', user);

		return (
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
						<div className="badge__wrapper">
							<Badge text="Add friend" clickHandler={() => null} />
						</div>
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
								{user.friends && user.friends.length > 0 ? (
									user.friends.map(friend => (
										<CircleImg
											key={friend.id}
											imgUrl={friend.avatar}
											subtitle={friend.name}
											clickHandler={() =>
												history.push(`/profile/${friend.id}`)
											}
											size="small"
											type="avatar"
										/>
									))
								) : (
									<p>
										{user.name} have no friends :({' '}
										<span className="link" clickHandler={() => null}>
											Connect?
										</span>
									</p>
								)}
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
	}
}

ProfilePublic.propTypes = {
	user: PropTypes.shape({
		name: PropTypes.string.isRequired,
		avatar: PropTypes.string,
		goals: PropTypes.arrayOf(PropTypes.shape({})),
		friends: PropTypes.arrayOf(PropTypes.shape({})),
		dateCreated: PropTypes.string,
	}).isRequired,
	isMainUser: PropTypes.bool.isRequired,
	fetchUser: PropTypes.func.isRequired,
	clearUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => {
	const isMainUser = state.auth.user.id === ownProps.match.params.id;
	const user = isMainUser ? state.auth.user : state.users;

	return {
		user,
		isMainUser,
	};
};
export default withRouter(
	connect(
		mapStateToProps,
		{ fetchUser, clearUser }
	)(ProfilePublic)
);
