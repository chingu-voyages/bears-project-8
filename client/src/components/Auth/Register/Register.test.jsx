import React from 'react';
import { shallow } from 'enzyme';

import { _Register as Register } from './Register';

const setup = (mountFn, customProps = {}) => {
	const initialProps = {
		registerUser: () => null,
		errors: {},
		auth: {
			isAuthenticated: false,
			user: {},
		},
	};

	const wrapper = mountFn(<Register {...initialProps} {...customProps} />);
	return wrapper;
};

describe('Register already authenticated', () => {
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

describe('Register without auth', () => {
	let wrapper;
	const registerUser = jest.fn();

	beforeEach(() => {
		wrapper = setup(shallow, { registerUser });
	});

	it('calls registerUser fn on submit', () => {
		const form = wrapper.find('form');
		expect(form).toBeTruthy();
		form.prop('onSubmit')();
		expect(registerUser).toHaveBeenCalled();
	});
	it('passes input state to registerUser fn', () => {
		const form = wrapper.find('form');
		const newState = {
			email: 'test@tester.com',
			name: 'tester',
			password: 'password',
			password2: 'password',
		};
		wrapper.setState(newState);
		expect(wrapper.state('email')).toBe(newState.email);
		form.prop('onSubmit')();
		expect(registerUser).toHaveBeenCalledWith(newState, undefined);
	});
});

describe('Register with errors', () => {
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
