import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { logHabit, deleteHabit } from '../../actions/habitActions';
import calculateDueDate from '../../utils/calculateDueDate';

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

export class _Habit extends Component {
	static propTypes = {
		habit: PropTypes.shape({
			name: PropTypes.string.isRequired,
			frequency: PropTypes.shape({
				period: PropTypes.string.isRequired,
			}).isRequired,
			_id: PropTypes.string.isRequired,
		}).isRequired,
		logHabit: PropTypes.func.isRequired,
		deleteHabit: PropTypes.func.isRequired,
	};

	state = {
		isCollapsed: true,
	};

	toggleCollapse = () => this.setState(state => ({ isCollapsed: !state.isCollapsed }));

	handleLogHabit = e => {
		if (e) e.stopPropagation();
		const { habit } = this.props;
		this.props.logHabit(habit._id);
	};

	handleEditHabit = e => {
		if (e) e.stopPropagation();
		const { habit, history } = this.props;
		history.push(`/edithabit/${habit._id}`);
	};

	handleDeleteHabit = e => {
		if (e) e.stopPropagation();
		const { habit } = this.props;
		this.props.deleteHabit(habit._id);
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
						<Button
							color={$tomato}
							type="simple"
							clickHandler={() => null}
							size="small"
							data-test="habit-due-counter"
						>
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
						<Button
							color={$tomato}
							type="simple"
							size="small"
							clickHandler={() => null}
							data-test="habit-due-counter"
						>
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
								data-test="log-habit-button"
							>
								Log Habit
							</Button>
							<Button
								bgColor={$greyLavender}
								color={$white}
								clickHandler={this.handleEditHabit}
								size="icon"
								type="filled"
								data-test="edit-habit-button"
							>
								✎
							</Button>
							<Button
								bgColor={$tomato}
								color={$white}
								clickHandler={this.handleDeleteHabit}
								size="icon"
								type="filled"
								data-test="delete-habit-button"
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

export default connect(
	null,
	{ logHabit, deleteHabit }
)(withRouter(_Habit));
