import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
	StyledDropdown,
	Top,
	ProfPic,
	TopArrow,
	Bottom,
	CurrentUser,
	AuthLink,
	BottomArrow,
} from './AuthDropdown.styled';

export default class AuthDropdown extends Component {
	state = {
		open: false,
	};

	static propTypes = {
		user: PropTypes.shape({
			name: PropTypes.string.isRequired,
			avatar: PropTypes.string.isRequired,
		}).isRequired,
		logout: PropTypes.func.isRequired,
	};

	onToggle = () =>
		this.setState(prevState => ({
			open: !prevState.open,
		}));

	render() {
		const { open } = this.state;
		const { user, logout, history } = this.props;
		return (
			<StyledDropdown>
				<Top onClick={this.onToggle}>
					<ProfPic profPic={`https://${user.avatar}`} />
					<TopArrow open={open} />
				</Top>
				{open && (
					<Bottom>
						<CurrentUser>
							Logged in as <strong>{user.name}</strong>
						</CurrentUser>
						<AuthLink>
							<Link to="/dashboard" onClick={this.onToggle}>
								Dashboard
							</Link>
						</AuthLink>
						<AuthLink>
							<Link to="/profile" onClick={this.onToggle}>
								Profile
							</Link>
						</AuthLink>
						<AuthLink
							onClick={() => {
								logout();
								history.push('/');
							}}
						>
							Logout
						</AuthLink>
						<BottomArrow />
					</Bottom>
				)}
			</StyledDropdown>
		);
	}
}
