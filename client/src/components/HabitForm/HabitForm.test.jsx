import React from 'react';
import { shallow, mount } from 'enzyme';

import HabitForm from './HabitForm';
import Content from './Content/Content';
import { LeftButtons, RightButtons } from './Buttons/Buttons';
import ProgressCircles from '../Shared/ProgressCircles/ProgressCircles';
import { Button, ButtonGroup } from '../Shared/Forms/Form.styled';

describe('HabitForm', () => {
	const setup = mount => {
		const props = {
			onSubmit: jest.fn(),
		};
		let component;
		if (mount) {
			component = mount(<HabitForm {...props} />);
		} else {
			component = shallow(<HabitForm {...props} />);
		}
		return {
			props,
			component,
		};
	};

	it('Should load without problems', () => {
		const { component } = setup();
		const formContent = component.find(Content);
		expect(formContent).toHaveLength(1);
	});

	describe('User is on the first page', () => {
		it('Should show skip and next buttons', () => {
			// Left button area should be empty
			const { component } = setup(mount);
			const leftButtons = component.find(LeftButtons);
			expect(leftButtons.find(Button)).toHaveLength(0);

			// Right button area should contain 'skip' and 'next'
			const rightButtons = component.find(RightButtons);
			expect(rightButtons.find(Button)).toHaveLength(2);

			// // Skip button
			// const skipButton = rightButtons.find('[secondary=true]');
			// expect(skipButton).toHaveLength(1);
			// skipButton.simulate('click');
			// expect(component.props.onSubmit).toHaveBeenCalled(1);

			// Next button
			// const nextButton = rightButtons.find('[secondary]')
		});
	});

	describe('User is on a middle page', () => {
		it('Should show back, skip and next buttons', () => {
			const { component } = setup(mount);
			component.setState({ step: 1 });
			const leftButtons = component.find(LeftButtons);
			expect(leftButtons.find(Button)).toHaveLength(1);
			const rightButtons = component.find(RightButtons);
			expect(rightButtons.find(Button)).toHaveLength(2);
		});
	});

	describe('User is on the last page', () => {
		it('Should show back and submit buttons', () => {
			const { component } = setup(mount);
			component.setState({ step: 2 });
			const leftButtons = component.find(LeftButtons);
			expect(leftButtons.find(Button)).toHaveLength(1);
			const rightButtons = component.find(RightButtons);
			expect(rightButtons.find(Button)).toHaveLength(1);
		});
	});
});
