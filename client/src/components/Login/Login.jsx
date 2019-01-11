// THIS IS JUST HERE FOR NOW TO TEST REDUX - STILL A LOT TO BE DONE WITH THIS

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { loginUser } from '../../actions/authActions';

class Login extends Component {
	state = {
		email: '',
		password: '',
		errors: {},
	};

	static propTypes = {
		loginUser: PropTypes.func.isRequired,
		errors: PropTypes.object.isRequired,
		auth: PropTypes.object.isRequired,
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
		const { email, password, errors } = this.state;
		return (
			<form onSubmit={this.handleSubmit}>
				<input
					name="email"
					placeholder="Email"
					value={email}
					onChange={this.handleChange}
				/>
				{errors.email && <div>errors.email</div>}
				<input
					name="password"
					placeholder="Password"
					value={password}
					onChange={this.handleChange}
				/>
				{errors.password && <div>errors.password</div>}
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
