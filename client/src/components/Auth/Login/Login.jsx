import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { loginUser } from '../../../actions/authActions';
import PageContainer from '../../Shared/PageContainer/PageContainer';
import { TopText, ContentArea, Footer } from '../Auth.styled';
import FormGroup from '../../Shared/Forms/FormGroup';
import { Button } from '../../Shared/Forms/Form.styled';

class Login extends Component {
	state = {
		email: '',
		password: '',
		errors: {},
	};

	static propTypes = {
		loginUser: PropTypes.func.isRequired,
		errors: PropTypes.shape({
			email: PropTypes.string,
			password: PropTypes.string,
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

	componentDidMount() {
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
		const { loginUser, history } = this.props;
		const { errors, ...newUser } = this.state;
		loginUser(newUser, history);
	};

	render() {
		const { email, password, errors } = this.state;
		const { history } = this.props;
		return (
			<PageContainer
				size="small"
				breadCrumbs={{
					crumbHistory: [{ name: 'Home', link: '/' }],
					current: 'Login',
				}}
				history={history}
			>
				<ContentArea>
					<TopText>
						All fields are required.
						<small>
							Not registered? Head to the{' '}
							<Link to="/auth/register">register page</Link>.
						</small>
					</TopText>
					<form onSubmit={this.handleSubmit} noValidate>
						<FormGroup
							title="Email"
							description="The email you used to sign up"
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
							description="Don't let anybody see!"
							name="password"
							value={password}
							onChange={this.handleChange}
							placeholder="Enter a password..."
							type="password"
							size={4}
							errors={errors.password}
						/>
						<Footer>
							<Button type="submit">Submit</Button>
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
	{ loginUser }
)(withRouter(Login));
