import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Container, Habit, NoHabits } from './HabitList.styled';

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
