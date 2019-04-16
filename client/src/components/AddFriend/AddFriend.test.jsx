import React from 'react';
import { shallow } from 'enzyme';

import { _AddFriend as AddFriend } from './AddFriend';

const setup = (mountFn, customProps = {}) => {
	const initialProps = { errors: {}, addFriend: () => null };

	const wrapper = mountFn(<AddFriend {...initialProps} {...customProps} />);
	return wrapper;
};

describe('AddFriend with default state (no errors)', () => {
	let wrapper;
	const addFriend = jest.fn(email => email);

	beforeEach(() => {
		wrapper = setup(shallow, { addFriend });
	});

	it('renders without error', () => {
		expect(wrapper).toBeTruthy();
	});
	it('calls addFriend on form submit', () => {
		const form = wrapper.find('form');
		expect(form).toBeTruthy();
		form.prop('onSubmit')();
		expect(addFriend).toHaveBeenCalled();
	});
	it('passes input state to addFriend fn', () => {
		const form = wrapper.find('form');
		const newState = { email: 'tester@test.com', errors: {} };
		wrapper.setState(newState);
		expect(wrapper.state('email')).toBe(newState.email);
		form.prop('onSubmit')();
		expect(addFriend).toHaveBeenCalledWith(wrapper.state('email'), undefined);
	});
});

describe('AddFriend with errors', () => {
	let wrapper;
	const error = { email: "We couldn't find a user with email tester@test.com" };

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
});
