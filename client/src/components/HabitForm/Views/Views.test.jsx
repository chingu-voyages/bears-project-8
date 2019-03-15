import React from 'react';
import { shallow, mount } from 'enzyme';
import Views from './Views';
import Step0 from './Steps/Step0';
import Step1 from './Steps/Step1';
import Step2 from './Steps/Step2';

describe('HabitForm', () => {
	const onChange = jest.fn();

	// eslint-disable-next-line no-shadow
	const setup = fullMount => {
		const props = {
			step: 0,

			name: '',
			tags: [],
			tagSuggestions: [],
			description: '',
			times: '',
			period: '',
			reminderEvery: '',
			reminderTypes: {
				email: false,
				inApp: false,
				push: false,
			},
			difficulty: '',
			type: '',
			errors: {},
			startDate: '',

			onChange: () => null,
			setReminderType: () => null,
			onTagDelete: () => null,
			onTagAdd: () => null,
			onTagDrag: () => null,
		};
		let component;
		if (fullMount) {
			component = fullMount(<Views {...props} onChange={onChange} />);
		} else {
			component = shallow(<Views {...props} onChange={onChange} />);
		}
		return {
			props,
			component,
		};
	};

	describe('User is on the first page, step index 0', () => {
		const { component } = setup(mount);

		it('Should show the first view', () => {
			const stepView = component.find(Step0);
			expect(stepView).toHaveLength(1);
		});
	});

	describe('User is on the second page, step index 1', () => {
		const { component } = setup(mount);
		component.setProps({ step: 1 });

		it('Should show the first view, index2', () => {
			const stepView = component.find(Step1);
			expect(stepView).toHaveLength(1);
		});
	});

	describe('User is on the third page', () => {
		const { component } = setup(mount);
		component.setProps({ step: 2 });

		it('Should show the first view', () => {
			const stepView = component.find(Step2);
			expect(stepView).toHaveLength(1);
		});
	});
});
