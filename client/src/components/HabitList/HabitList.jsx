import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Container, NoHabits } from './HabitList.styled';

import Habit from '../Habit/Habit';

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

class HabitList extends Component {
	static propTypes = {
		habits: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	};

	state = {};

	render() {
		const { habits } = this.props;

		return (
			<Container>
				{habits ? (
					habits.map(habit => <Habit key={habit._id} habit={habit} />)
				) : (
					<NoHabits>
						Nothing to see here. <br /> Add some habits.
					</NoHabits>
				)}
			</Container>
		);
	}
}

export default HabitList;
