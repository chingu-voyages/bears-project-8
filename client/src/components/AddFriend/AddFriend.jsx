import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import PageContainer from '../Shared/PageContainer/PageContainer';
import { TopText, ContentArea, Footer } from './AddFriend.styled';
import FormGroup from '../Shared/Forms/FormGroup';
import { Button } from '../Shared/Forms/Form.styled';
import { addFriend } from '../../actions/authActions';

export class AddFriend extends Component {
	state = {
		email: '',
		errors: {},
	};

	static propTypes = {
		errors: PropTypes.shape({
			email: PropTypes.string,
		}).isRequired,
		auth: PropTypes.shape({
			isAuthenticated: PropTypes.bool.isRequired,
			user: PropTypes.object.isRequired,
		}).isRequired,
		addFriend: PropTypes.func.isRequired,
	};

	static getDerivedStateFromProps(nextProps) {
		if (nextProps.errors) return { errors: nextProps.errors };
		return null;
	}

	handleChange = e => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};

	handleSubmit = e => {
		e.preventDefault();
		// eslint-disable-next-line no-shadow
		const { addFriend, history } = this.props;
		const { email } = this.state;
		addFriend(email, history);
	};

	render() {
		const { email, errors } = this.state;
		const { history } = this.props;
		return (
			<PageContainer
				size="small"
				breadCrumbs={{
					crumbHistory: [{ name: 'Profile', link: '/profile' }],
					current: 'Add Friend',
				}}
				history={history}
			>
				<ContentArea>
					<TopText>
						All fields are required.
						<small>
							If friends aren&apos;t registered, you can send them an invitation
							email.
						</small>
					</TopText>
					<form onSubmit={this.handleSubmit} noValidate>
						<FormGroup
							title="Email"
							description="Enter an email to add them as a friend"
							name="email"
							value={email}
							onChange={this.handleChange}
							placeholder="john@email.com"
							type="email"
							size={4}
							errors={errors.email}
						/>
						<Footer>
							<Button type="submit">Add friend</Button>
						</Footer>
					</form>
				</ContentArea>
			</PageContainer>
		);
	}
}

const mapStateToProps = state => ({
	auth: state.auth,
	errors: state.errors,
});

export default connect(
	mapStateToProps,
	{ addFriend }
)(withRouter(AddFriend));
