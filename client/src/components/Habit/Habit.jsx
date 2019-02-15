import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import endOfWeek from 'date-fns/end_of_week';
import endOfDay from 'date-fns/end_of_day';
import endOfMonth from 'date-fns/end_of_month';
import differenceInHours from 'date-fns/difference_in_hours';
import differenceInDays from 'date-fns/difference_in_calendar_days';

import { $white, $elfGreen, $greyLavender, $tomato } from '../../assets/styledVars';
import {
	Container,
	FullHabit,
	FlexContainer,
	Description,
	Title,
	RepeatPeriod,
} from './Habit.styled';

import Button from '../Shared/Button/Button';
import Label from '../Shared/Label/Label';

const calculateDueDate = frequency => {
	const today = new Date();

	switch (frequency) {
		case 'Daily': {
			const diff = differenceInHours(endOfDay(today), Date.now());
			return `Due in ${diff} ${diff > 1 ? 'hours' : 'hour'}`;
		}
		case 'Weekly': {
			const diff = differenceInDays(endOfWeek(today), Date.now());
			// TODO: Handle case when the date is the last day due and difference should be calculated in hours instead of days
			return `Due in ${diff} ${diff > 1 ? 'days' : 'day'}`;
		}
		case 'Monthly': {
			const diff = differenceInDays(endOfMonth(today), Date.now());
			// TODO: Handle case when the date is the last day due and difference should be calculated in hours instead of days
			return `Due in ${diff} ${diff > 1 ? 'days' : 'day'}`;
		}
		default:
			return '';
	}
};

class Habit extends Component {
	static propTypes = {
		habit: PropTypes.shape({
			name: PropTypes.string.isRequired,
			frequency: PropTypes.shape({
				period: PropTypes.string,
			}),
		}).isRequired,
	};

	state = {
		isCollapsed: true,
	};

	toggleCollapse = () => this.setState(state => ({ isCollapsed: !state.isCollapsed }));

	handleLogHabit = e => {
		e.stopPropagation();
	};

	handleEditHabit = e => {
		e.stopPropagation();
		const { habit, history } = this.props;
		history.push(`/edithabit/${habit._id}`);
	};

	handleDeleteHabit = e => {
		e.stopPropagation();
	};

	render() {
		const { habit } = this.props;
		const { isCollapsed } = this.state;

		return (
			<Container isCollapsed={isCollapsed} onClick={this.toggleCollapse}>
				{isCollapsed ? (
					<Fragment>
						<p>
							<Title>{habit.name}</Title> <br />{' '}
							<RepeatPeriod>{habit.frequency.period}</RepeatPeriod>{' '}
						</p>
						<Button type="simple" clickHandler={() => null} size="small">
							{calculateDueDate(habit.frequency.period)}
						</Button>
					</Fragment>
				) : (
					<FullHabit>
						<Title>{habit.name}</Title>
						<FlexContainer>
							{habit.tags &&
								habit.tags.length > 0 &&
								habit.tags.map(tag => (
									<Label onClick={() => null} key={tag}>
										{tag}
									</Label>
								))}
						</FlexContainer>
						<Button type="simple" size="small" clickHandler={() => null}>
							{calculateDueDate(habit.frequency.period)}
						</Button>
						<Description>{habit.description}</Description>
						<RepeatPeriod>{habit.frequency.period}</RepeatPeriod>
						<FlexContainer>
							<Label onClick={() => null}>{habit.difficulty}</Label>
							<Label onClick={() => null}>{habit.type}</Label>
						</FlexContainer>
						<FlexContainer alignCenter>
							<Button
								clickHandler={this.handleLogHabit}
								type="filled"
								size="small"
								bgColor={$elfGreen}
								color={$white}
							>
								Log Habit
							</Button>
							<Button
								bgColor={$greyLavender}
								color={$white}
								clickHandler={this.handleEditHabit}
								size="icon"
								type="filled"
							>
								✎
							</Button>
							<Button
								bgColor={$tomato}
								color={$white}
								clickHandler={this.handleDeleteHabit}
								size="icon"
								type="filled"
							>
								&times;
							</Button>
						</FlexContainer>
					</FullHabit>
				)}
			</Container>
		);
	}
}

export default withRouter(Habit);
