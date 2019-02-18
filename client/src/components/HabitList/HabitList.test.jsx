import React from 'react';
import { shallow } from 'enzyme';

import HabitList from './HabitList';

// eslint-disable-next-line no-unused-vars
const habitsTest = [
	{
		name: 'Test habit',
		frequency: { period: 'Once every day' },
		status: 'Due Tomorrow',
		description: 'Zombie ipsum reversus ab viral inferno, nam rick grimes malum',
		type: 'Active',
		difficulty: 'Medium',
		id: 90672,
		tags: ['office', 'exercise'],
	},
	{
		name: 'Test habit 1',
		frequency: { period: 'Once every month' },
		status: 'Due',
		description:
			'Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis.',
		type: 'Active',
		difficulty: 'Medium',
		id: 72082,
		tags: ['exercise'],
	},
	{
		name: 'Test habit 2',
		frequency: { period: 'Once every week' },
		status: 'Due in 2 Days',
		description: 'Zombie ipsum reversus ab viral inferno, nam rick grimes malum',
		type: 'Active',
		difficulty: 'Medium',
		id: 75361,
		tags: ['office'],
	},
	{
		name: 'Test habit 3',
		frequency: { period: 'Twice a week' },
		status: 'Due',
		description:
			'Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​.',
		type: 'Active',
		difficulty: 'Medium',
		id: 17922,
		tags: ['web development', 'study'],
	},
];

describe('HabitList', () => {
	const setup = fullMount => {
		const props = {
			options: [{ id: 0, title: 'Test', onClick: () => jest.fn() }],
			title: 'Dropdown',
		};
		let component;
		if (fullMount) {
			component = fullMount(<HabitList {...props} />);
		} else {
			component = shallow(<HabitList {...props} />);
		}

		return {
			props,
			component,
		};
	};

	test('it does math', () => {
		expect(2 + 2).toBe(4);
	});
});
