import React from 'react';
import { shallow } from 'enzyme';

import { _Login as Login } from './Login';

const setup = (mountFn, customProps = {}) => {
	const initialProps = {
		loginUser: () => null,
		errors: {},
		auth: {
			isAuthenticated: false,
			user: {},
		},
	};

	const wrapper = mountFn(<Login {...initialProps} {...customProps} />);
	return wrapper;
};

describe('Login already authenticated', () => {
	let wrapper;
	const authProps = {
		isAuthenticated: true,
		user: {},
	};
	const historyMock = {
		replace: jest.fn(),
	};

	beforeEach(() => {
		wrapper = setup(shallow, { auth: authProps, history: historyMock });
	});

	it('renders without error', () => {
		expect(wrapper).toBeTruthy();
	});
	it('redirects', () => {
		expect(historyMock.replace).toHaveBeenCalled();
	});
});

describe('Login without auth', () => {
	let wrapper;
	const loginUser = jest.fn();

	beforeEach(() => {
		wrapper = setup(shallow, { loginUser });
	});

	it('calls loginUser fn on submit', () => {
		const form = wrapper.find('form');
		expect(form).toBeTruthy();
		form.prop('onSubmit')();
		expect(loginUser).toHaveBeenCalled();
	});
	it('passes input state to loginUser fn', () => {
		const form = wrapper.find('form');
		const newState = { email: 'test@tester.com', password: 'password' };
		wrapper.setState(newState);
		expect(wrapper.state('email')).toBe(newState.email);
		form.prop('onSubmit')();
		expect(loginUser).toHaveBeenCalledWith(newState, undefined);
	});
});

describe('Login with errors', () => {
	let wrapper;
	const error = {
		email: "We couldn't find a user with email tester@test.com",
		password: 'Incorrect password',
	};

	beforeEach(() => {
		wrapper = setup(shallow, {
			errors: error,
		});
	});

	it('sends the error to the email FormGroup component', () => {
		const emailFormGroup = wrapper
			.find('FormGroup')
			.filterWhere(group => group.prop('name') === 'email');
		expect(emailFormGroup.length).toBe(1);
		expect(emailFormGroup.prop('errors')).toEqual(error.email);
	});

	it('sends the error to the password FormGroup component', () => {
		const passwordFormGroup = wrapper
			.find('FormGroup')
			.filterWhere(group => group.prop('name') === 'password');
		expect(passwordFormGroup.length).toBe(1);
		expect(passwordFormGroup.prop('errors')).toEqual(error.password);
	});
});
