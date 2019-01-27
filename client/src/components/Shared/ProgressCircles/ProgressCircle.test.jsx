import React from 'react';
import { shallow } from 'enzyme';

import ProgressCircles from './ProgressCircles';
import ProgressCircle from './ProgressCircle.styled';

describe('ProgressCircle', () => {
	const setStep = jest.fn();

	const setup = fullMount => {
		const props = {
			setStep,
			step: 0,
			totalSteps: 3,
		};
		let component;
		if (fullMount) {
			component = fullMount(<ProgressCircles {...props} />);
		} else {
			component = shallow(<ProgressCircles {...props} />);
		}
		return {
			props,
			component,
		};
	};

	describe('At step index 0 out of 3 totalSteps', () => {
		const { component } = setup();
		const circles = component.find(ProgressCircle);

		it('Should contain 3 progress circles', () => {
			expect(circles).toHaveLength(3);
		});

		it('Should highlight the first progress circle', () => {
			const current = circles.find('[current=true]');
			expect(current).toHaveLength(1);
			expect(circles.first()).toEqual(current);
		});

		it('Should call setStep when a circle is clicked', () => {
			circles.at(2).simulate('click');
			expect(setStep).toHaveBeenCalledTimes(1);
			expect(setStep).toHaveBeenCalledWith(2);
		});
	});

	describe('At step index 3 out of 7 totalSteps', () => {
		const { component } = setup();
		component.setProps({ step: 3, totalSteps: 7 });
		const circles = component.find(ProgressCircle);

		it('Should contain 7 circles', () => {
			expect(circles).toHaveLength(7);
		});

		it('Should highlight the 4th circle', () => {
			const current = circles.find('[current=true]');
			expect(current).toHaveLength(1);
			expect(circles.at(3)).toEqual(current);
		});

		it('Should call setStep when another circle is clicked', () => {
			circles.at(6).simulate('click');
			expect(setStep).toHaveBeenCalledTimes(2);
			expect(setStep).toHaveBeenCalledWith(6);
		});
	});
});
