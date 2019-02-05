import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Container, NoHabits } from './HabitList.styled';

import Habit from '../Habit/Habit';

const habits = [
	{
		title: 'Test habit',
		frequency: 'Once every day',
		status: 'Due Tomorrow',
		description: 'Zombie ipsum reversus ab viral inferno, nam rick grimes malum',
		type: 'Active',
		difficulty: 'Medium',
		id: 90672,
		tags: ['office', 'exercise'],
	},
	{
		title: 'Test habit 1',
		frequency: 'Once every month',
		status: 'Due',
		description:
			'Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis.',
		type: 'Active',
		difficulty: 'Medium',
		id: 72082,
		tags: ['exercise'],
	},
	{
		title: 'Test habit 2',
		frequency: 'Once every week',
		status: 'Due in 2 Days',
		description: 'Zombie ipsum reversus ab viral inferno, nam rick grimes malum',
		type: 'Active',
		difficulty: 'Medium',
		id: 75361,
		tags: ['office'],
	},
	{
		title: 'Test habit 3',
		frequency: 'Twice a week',
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
		// habits: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	};

	state = {};

	render() {
		// const { habits } = this.props;
		return (
			<Container>
				{habits ? (
					habits.map(habit => <Habit key={habit.id} habit={habit} />)
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
