// THIS IS JUST HERE FOR NOW TO TEST REDUX - STILL A LOT TO BE DONE WITH THIS

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { loginUser } from '../../actions/authActions';

class Login extends Component {
	state = {
		email: '',
		password: '',
	};

	static propTypes = {
		loginUser: PropTypes.func.isRequired,
		errors: PropTypes.object.isRequired,
		auth: PropTypes.object.isRequired,
	};

	handleChange = e => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};

	handleSubmit = e => {
		e.preventDefault();
		const { name, email, password, password2 } = this.state;
		const newUser = {
			name,
			email,
			password,
			password2,
		};
		this.props.loginUser(newUser);
	};

	render() {
		const { email, password } = this.state;
		return (
			<form onSubmit={this.handleSubmit}>
				<input
					name="email"
					placeholder="Email"
					value={email}
					onChange={this.handleChange}
				/>
				<input
					name="password"
					placeholder="Password"
					value={password}
					onChange={this.handleChange}
				/>
				<button type="submit">Submit</button>
			</form>
		);
	}
}

const mapStateToProps = state => ({
	auth: state.auth,
	errors: state.errors,
});

export default connect(
	mapStateToProps,
	{ loginUser }
)(Login);
