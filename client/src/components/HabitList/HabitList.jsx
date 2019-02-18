import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { filterHabitsSelector } from '../../reducers/habitReducer';
import { Container, NoHabits } from './HabitList.styled';

import Habit from '../Habit/Habit';

export default class HabitList extends Component {
	static propTypes = {
		habits: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
		target: PropTypes.string,
		criteria: PropTypes.string,
	};

	static defaultProps = {
		target: '',
		criteria: '',
	};

	state = {};

	render() {
		const { habits, target, criteria } = this.props;
		const derivedHabits = filterHabitsSelector(habits, { target, criteria });

		return (
			<Container>
				{habits ? (
					derivedHabits.map(habit => <Habit key={habit._id} habit={habit} />)
				) : (
					<NoHabits>
						Nothing to see here. <br /> Add some habits.
					</NoHabits>
				)}
			</Container>
		);
	}
}
