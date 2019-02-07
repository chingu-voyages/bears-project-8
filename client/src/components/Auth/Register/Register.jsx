import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { registerUser } from '../../../actions/authActions';
import { Container, Header, TopText, ContentArea, Footer } from '../Auth.styled';
import FormGroup from '../../Shared/Forms/FormGroup';
import { Button } from '../../Shared/Forms/Form.styled';

class Register extends Component {
	state = {
		name: '',
		email: '',
		password: '',
		password2: '',
		errors: {},
	};

	static propTypes = {
		registerUser: PropTypes.func.isRequired,
		errors: PropTypes.shape({
			name: PropTypes.string,
			email: PropTypes.string,
			password: PropTypes.string,
			password2: PropTypes.string,
		}).isRequired,
		auth: PropTypes.shape({
			isAuthenticated: PropTypes.bool.isRequired,
			user: PropTypes.object.isRequired,
		}).isRequired,
	};

	static getDerivedStateFromProps(nextProps) {
		if (nextProps.errors) return { errors: nextProps.errors };
		return null;
	}

	componentWillMount() {
		const { auth, history } = this.props;
		if (auth.isAuthenticated) history.replace('/dashboard');
	}

	handleChange = e => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};

	handleSubmit = e => {
		e.preventDefault();
		// eslint-disable-next-line no-shadow
		const { registerUser, history } = this.props;
		const { errors, ...newUser } = this.state;
		registerUser(newUser, history);
	};

	render() {
		const { name, email, password, password2, errors } = this.state;
		return (
			<Container>
				<Header>Register</Header>
				<ContentArea>
					<TopText>
						All fields are required.
						<small>
							Already registered? Head to the
							<Link to="/auth/login">login page</Link>.
						</small>
					</TopText>
					<form onSubmit={this.handleSubmit} noValidate>
						<FormGroup
							title="Name"
							description="Your real name or an alias — this will be public"
							name="name"
							value={name}
							onChange={this.handleChange}
							placeholder="E.g. John Smith"
							type="text"
							size={4}
							errors={errors.name}
						/>
						<FormGroup
							title="Email"
							description="We can remind you when your habits are coming up"
							name="email"
							value={email}
							onChange={this.handleChange}
							placeholder="E.g. john@email.com"
							type="email"
							size={4}
							errors={errors.email}
						/>
						<FormGroup
							title="Password"
							description="Try to choose something no one could guess"
							name="password"
							value={password}
							onChange={this.handleChange}
							placeholder="E.g. e8a10c04d72b2f135dabe360c4bdd534"
							type="password"
							size={4}
							errors={errors.password}
						/>
						<FormGroup
							title="Confirm Password"
							description="Your password is important — enter it again to be sure"
							name="password2"
							value={password2}
							onChange={this.handleChange}
							placeholder="E.g. e8a10c04d72b2f135dabe360c4bdd534"
							type="password"
							size={4}
							errors={errors.password2}
						/>
						<Footer>
							<Button type="submit" width="40%">
								Submit
							</Button>
						</Footer>
					</form>
				</ContentArea>
			</Container>
		);
	}
}

const mapStateToProps = state => ({
	auth: state.auth,
	errors: state.errors,
});

export default connect(
	mapStateToProps,
	{ registerUser }
)(withRouter(Register));
