// THIS IS JUST HERE FOR NOW TO TEST REDUX - STILL A LOT TO BE DONE WITH THIS

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { registerUser } from '../../actions/authActions';

class Register extends Component {
	state = {
		name: '',
		email: '',
		password: '',
		password2: '',
	};

	static propTypes = {
		registerUser: PropTypes.func.isRequired,
		errors: PropTypes.object.isRequired,
		auth: PropTypes.object.isRequired,
	};

	handleChange = e => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};

	handleSubmit = e => {
		e.preventDefault();
		const { history } = this.props;
		const { name, email, password, password2 } = this.state;
		const newUser = {
			name,
			email,
			password,
			password2,
		};
		this.props.registerUser(newUser, history);
	};

	render() {
		const { name, email, password, password2 } = this.state;
		return (
			<form onSubmit={this.handleSubmit}>
				<input name="name" placeholder="Name" value={name} onChange={this.handleChange} />
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
				<input
					name="password2"
					placeholder="Confirm Password"
					value={password2}
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
	{ registerUser }
)(withRouter(Register));
