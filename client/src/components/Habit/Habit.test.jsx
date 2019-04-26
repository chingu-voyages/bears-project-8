import React from 'react';
import { shallow } from 'enzyme';

import { _Habit as Habit } from './Habit';
import { Container, Title, Description } from './Habit.styled';

const setup = (mountFn, customProps = {}) => {
	const wrapper = mountFn(<Habit {...customProps} />);
	return wrapper;
};

describe('Minimal habit', () => {
	let wrapper;
	const logHabit = jest.fn();
	const deleteHabit = jest.fn();
	const habit = {
		name: 'habit',
		frequency: {
			period: 'daily',
		},
		_id: '3',
	};

	beforeEach(() => {
		wrapper = setup(shallow, { logHabit, deleteHabit, habit });
	});

	it('renders without error', () => {
		expect(wrapper).toBeTruthy();
	});
	it("renders the habit's name", () => {
		const title = wrapper.find(Title);
		expect(title.text()).toBe(habit.name);
	});
	it("renders text for the habit's due date", () => {
		const habitDueCounter = wrapper.find('[data-test="habit-due-counter"]');
		expect(habitDueCounter.length).toBe(1);
		expect(habitDueCounter.text().length).not.toBe(0);
	});
	it('changes isCollapsed state when clicked', () => {
		expect(wrapper.state('isCollapsed')).toBeTruthy();
		const container = wrapper.find(Container);
		container.simulate('click');
		expect(wrapper.state('isCollapsed')).toBeFalsy();
	});
	it('shows habit details when not collapsed', () => {
		wrapper.setState({ isCollapsed: false });
		const description = wrapper.find(Description);
		expect(description.text()).toBe('');
		// other details tested in 'maximal habit'
	});
	it('passes the log habit function as a prop to a button', () => {
		wrapper.setState({ isCollapsed: false });
		const logHabitButton = wrapper.find('[data-test="log-habit-button"]');
		expect(logHabitButton.length).toBe(1);
		logHabitButton.prop('clickHandler')();
		expect(logHabit).toHaveBeenCalledTimes(1);
	});
	it('history pushes to habit id to edit a habit', () => {
		const history = {
			push: jest.fn(),
		};
		wrapper.setProps({ history });
		wrapper.setState({ isCollapsed: false });
		const editHabitButton = wrapper.find('[data-test="edit-habit-button"]');
		expect(editHabitButton.length).toBe(1);
		editHabitButton.prop('clickHandler')();
		expect(history.push).toHaveBeenCalledTimes(1);
		expect(history.push).toHaveBeenCalledWith(`/edithabit/${habit._id}`);
	});
	it('passes the delete habit function as a prop to a button', () => {
		wrapper.setState({ isCollapsed: false });
		const deleteHabitButton = wrapper.find('[data-test="delete-habit-button"]');
		expect(deleteHabitButton.length).toBe(1);
		deleteHabitButton.prop('clickHandler')();
		expect(deleteHabit).toHaveBeenCalledTimes(1);
	});
});

describe('maximal habit', () => {
	let wrapper;
	const logHabit = jest.fn();
	const deleteHabit = jest.fn();
	const habit = {
		_id: '3',
		name: 'habit',
		description: 'habit description',
		tags: ['t', 'ta', 'tag'],
		difficulty: 'Medium',
		type: 'Active',
		frequency: {
			times: 1,
			period: 'Daily',
		},
	};

	beforeEach(() => {
		wrapper = setup(shallow, { logHabit, deleteHabit, habit });
	});

	it('renders without error', () => {
		expect(wrapper).toBeTruthy();
	});
	it("renders the habit's name", () => {
		const title = wrapper.find(Title);
		expect(title.text()).toBe(habit.name);
	});
	it("renders the habit's description when expanded", () => {
		wrapper.setState({ isCollapsed: false });
		const description = wrapper.find(Description);
		expect(description.text()).toBe(habit.description);
	});
	it("renders the habit's tags when expanded", () => {
		wrapper.setState({ isCollapsed: false });
		const tags = wrapper.find('[data-test="habit-tags"]');
		expect(tags.children().length).toBe(habit.tags.length);
		expect(
			tags
				.children()
				.first()
				.render()
				.text()
		).toBe(habit.tags[0]);
	});
	it("renders the habit's difficulty when expanded", () => {
		wrapper.setState({ isCollapsed: false });
		const difficulty = wrapper.findWhere(node => node.text() === habit.difficulty);
		expect(difficulty.length).toBe(1);
	});
	it("renders the habit's type when expanded", () => {
		wrapper.setState({ isCollapsed: false });
		const type = wrapper.findWhere(node => node.text() === habit.type);
		expect(type.length).toBe(1);
	});
});
