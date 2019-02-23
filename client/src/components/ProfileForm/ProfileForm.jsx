import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { editProfile } from '../../actions/authActions';
import PageContainer from '../Shared/PageContainer/PageContainer';
import FormGroup from '../Shared/Forms/FormGroup';
import { Button } from '../Shared/Forms/Form.styled';

import { ContentArea, Row, Footer } from './ProfileForm.styled';

class ProfileForm extends Component {
	state = {
		name: '',
		imgUrl: '',
		about: '',
		goals: [],
	};

	static propTypes = {
		user: PropTypes.shape({
			name: PropTypes.string.isRequired,
			id: PropTypes.string.isRequired,
			about: PropTypes.string,
			goals: PropTypes.arrayOf(PropTypes.object),
		}).isRequired,
		editProfile: PropTypes.func.isRequired,
	};

	handleChange = ({ target }) => {
		const { name, value } = target;
		this.setState({ [name]: value });
	};

	handleSubmit = () => {
		console.log('submitting');
		const { history, user, editProfile } = this.props;
		const { goals, ...profileData } = this.state;
		editProfile(user, profileData, history);
	};

	render() {
		const { history } = this.props;
		const { name, imgUrl, about } = this.state;

		return (
			<PageContainer
				breadCrumbs={{
					crumbHistory: [
						{ name: 'Dashboard', link: 'dashboard' },
						{ name: 'Profile', link: '/profile' },
					],
					current: 'Edit',
				}}
				history={history}
			>
				<ContentArea>
					<Row>
						<FormGroup
							title="Name"
							description="Your real name or an alias — this will be public"
							name="name"
							value={name}
							onChange={this.handleChange}
							placeholder="E.g. John Smith"
							size={2}
							required
						/>
						<FormGroup
							title="Profile Picture"
							description="Customize it with an image URL"
							name="imgUrl"
							value={imgUrl}
							onChange={this.handleChange}
							placeholder="E.g. http://picture.com/profile.jpg"
							size={2}
						/>
					</Row>

					<FormGroup
						title="About"
						description="Something short and punchy to let people know who you are"
						name="about"
						value={about}
						onChange={this.handleChange}
						placeholder="E.g. I started habit tracking after an interdimensional rift rearranged my neurons"
						size={4}
					/>

					<FormGroup
						title="Habits"
						description="Goals can help keep our habits in perspective"
						name="goals"
						onChange={this.handleChange}
						placeholder="E.g. Run a half marathon by the end of this year"
						size={4}
					/>
				</ContentArea>
				<Footer>
					<Button type="submit" onClick={this.handleSubmit}>
						Save
					</Button>
				</Footer>
			</PageContainer>
		);
	}
}

const mapStateToProps = state => ({
	user: state.auth.user,
});

export default connect(
	mapStateToProps,
	{ editProfile }
)(withRouter(ProfileForm));
