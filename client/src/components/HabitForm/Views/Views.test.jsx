import React from 'react';
import { shallow, mount } from 'enzyme';
import Views from './Views';
import Zero from './Step/Zero';
import One from './Step/One';
import Two from './Step/Two';

describe('HabitForm', () => {
	const onChange = jest.fn();

	const setup = fullMount => {
		const props = {
			step: 0,

			name: '',
			tags: [],
			description: '',
			value: '',
			times: '',
			period: '',
			reminderEvery: '',
			reminderTypes: [],
			difficulty: '',
			habitType: '',
			habitStart: '',
		};
		let component;
		if (fullMount) {
			component = mount(<Views {...props} onChange={onChange} />);
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
			const stepView = component.find(Zero);
			expect(stepView).toHaveLength(1);
		});
	});

	describe('User is on the second page, step index 1', () => {
		const { component } = setup(mount);
		component.setProps({ step: 1 });

		it('Should show the first view, index2', () => {
			const stepView = component.find(One);
			expect(stepView).toHaveLength(1);
		});
	});

	describe('User is on the third page', () => {
		const { component } = setup(mount);
		component.setProps({ step: 2 });

		it('Should show the first view', () => {
			const stepView = component.find(Two);
			expect(stepView).toHaveLength(1);
		});
	});
});
