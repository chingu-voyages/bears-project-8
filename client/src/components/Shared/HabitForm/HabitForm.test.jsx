import React from 'react';
import { shallow, mount } from 'enzyme';
import { _HabitForm as HabitForm } from './HabitForm';
import Views from './Views/Views';
import { LeftButtons, RightButtons } from './Buttons/Buttons';
import { Button } from '../Forms/Form.styled';

describe('HabitForm', () => {
	const historyMock = { push: jest.fn() };
	// eslint-disable-next-line no-shadow
	const setup = fullMount => {
		const props = {
			addHabit: jest.fn(),
			history: historyMock,
		};
		let component;
		if (fullMount) {
			component = fullMount(<HabitForm {...props} />);
		} else {
			component = shallow(<HabitForm {...props} />);
		}
		return {
			props,
			component,
		};
	};

	it('Should load with content', () => {
		const { component } = setup();
		const formView = component.find(Views);
		expect(formView).toHaveLength(1);
	});

	describe('User is on the first page', () => {
		const { component } = setup(mount);

		it('Should have skip and next buttons', () => {
			// Left button area should be empty
			const leftButtons = component.find(LeftButtons);
			expect(leftButtons.find(Button)).toHaveLength(0);

			// Right button area should contain 'skip' and 'next'
			const rightButtons = component.find(RightButtons);
			expect(rightButtons.find(Button)).toHaveLength(2);

			// Skip button
			const skipButton = rightButtons.find('[secondary]').first();
			skipButton.simulate('click');
			expect(component.props().addHabit).toHaveBeenCalledTimes(1);

			// Done button
			const doneButton = rightButtons
				.find(Button)
				.not('[secondary]')
				.first();
			doneButton.simulate('click');
			expect(component.state('step')).toBe(1);
		});
	});

	describe('User is on a middle page', () => {
		it('Should have back, skip and next buttons', () => {
			const { component } = setup(mount);
			component.setState({ step: 1 });
			const leftButtons = component.find(LeftButtons);
			expect(leftButtons.find(Button)).toHaveLength(1);
			const rightButtons = component.find(RightButtons);
			expect(rightButtons.find(Button)).toHaveLength(2);

			// Back button
			const backButton = leftButtons.find(Button);
			backButton.simulate('click');
			expect(component.state('step')).toBe(0);
		});
	});

	describe('User is on the last page', () => {
		it('Should have back and submit buttons', () => {
			const { component } = setup(mount);
			component.setState({ step: 2 });
			const leftButtons = component.find(LeftButtons);
			expect(leftButtons.find(Button)).toHaveLength(1);
			const rightButtons = component.find(RightButtons);
			expect(rightButtons.find(Button)).toHaveLength(1);

			// Submit button
			const submitButton = rightButtons.find(Button);
			expect(submitButton).toHaveLength(1);
			submitButton.simulate('click');
			expect(component.props().addHabit).toHaveBeenCalledTimes(1);
		});
	});
});
