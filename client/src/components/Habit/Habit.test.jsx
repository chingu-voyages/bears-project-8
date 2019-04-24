import React from 'react';
import { shallow } from 'enzyme';

import { _Habit as Habit } from './Habit';
import { Title } from './Habit.styled';

const setup = (mountFn, customProps = {}) => {
	const requiredProps = {
		habit: {
			name: 'habit',
			frequency: {
				period: 'daily',
			},
		},
	};
	const wrapper = mountFn(<Habit {...requiredProps} {...customProps} />);
	return wrapper;
};

describe('Minimal habit', () => {
	let wrapper;
	const logHabit = jest.fn();
	const deleteHabit = jest.fn();

	beforeEach(() => {
		wrapper = setup(shallow, { logHabit, deleteHabit });
	});

	it('renders without error', () => {
		expect(wrapper).toBeTruthy();
	});
});
