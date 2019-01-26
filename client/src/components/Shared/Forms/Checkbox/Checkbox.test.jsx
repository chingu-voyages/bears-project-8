import React from 'react';
import { shallow, mount } from 'enzyme';
import Checkbox from './Checkbox';
import { CheckboxContainer, StyledCheckbox } from './Checkbox.styled';

describe('HabitForm', () => {
	const onCheck = jest.fn();

	const setup = fullMount => {
		const props = {
			options: ['option1', 'option2'],
			onCheck,
			optionState: {
				option1: false,
				option2: false,
			},
		};
		let component;
		if (fullMount) {
			component = mount(<Checkbox {...props} />);
		} else {
			component = shallow(<Checkbox {...props} />);
		}
		return {
			props,
			component,
		};
	};

	describe('No options are selected', () => {
		const { component } = setup(mount);

		it('Should display three checkboxes', () => {
			const container = component.find(CheckboxContainer);
			expect(container).toHaveLength(1);
			const checkboxes = component.find(StyledCheckbox);
			expect(checkboxes).toHaveLength(2);
		});

		it('Should not contain any active checkboxes', () => {
			const active = component.find('[active=true]');
			expect(active).toHaveLength(0);
		});
	});

	describe('Second option is selected', () => {
		const { component } = setup();
		component.setProps({ optionState: { option1: false, option2: true } });

		it('Should pass an active prop to the selected checkbox', () => {
			const checkboxes = component.find(StyledCheckbox);
			expect(checkboxes).toHaveLength(2);
			const active = component.find('[active=true]');
			console.log(active.debug());
			expect(active).toHaveLength(1);
			expect(checkboxes.first).not.toEqual(active);
		});
	});
});
