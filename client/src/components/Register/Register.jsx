import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { registerUser } from '../../actions/authActions';
import { Container, Header, ContentArea, Footer } from './Register.styled';
import FormGroup from '../Shared/Forms/FormGroup';
import { Button } from '../Shared/Forms/Form.styled';

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

	componentWillReceiveProps(nextProps) {
		if (nextProps.errors) {
			this.setState({ errors: nextProps.errors });
		}
	}

	handleChange = e => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};

	handleSubmit = e => {
		e.preventDefault();
		// eslint-disable-next-line no-shadow
		const { history, registerUser } = this.props;
		const { name, email, password, password2 } = this.state;
		const newUser = {
			name,
			email,
			password,
			password2,
		};
		registerUser(newUser, history);
	};

	render() {
		const { name, email, password, password2, errors } = this.state;
		return (
			<Container>
				<Header>Register</Header>
				<ContentArea>
					<form onSubmit={this.handleSubmit} noValidate>
						<FormGroup
							title="Name"
							name="name"
							value={name}
							onChange={this.handleChange}
							placeholder="John Smith"
							type="text"
							size={4}
							errors={errors.name}
						/>
						<FormGroup
							title="Email"
							name="email"
							value={email}
							onChange={this.handleChange}
							placeholder="john@email.com"
							type="email"
							size={4}
							errors={errors.email}
						/>
						<FormGroup
							title="Password"
							name="password"
							value={password}
							onChange={this.handleChange}
							placeholder="Enter a password..."
							type="password"
							size={4}
							errors={errors.password}
						/>
						<FormGroup
							title="Confirm Password"
							name="password2"
							value={password2}
							onChange={this.handleChange}
							placeholder="Enter it again (just to be sure)..."
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
