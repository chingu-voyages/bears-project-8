import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

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
							{habit.status || ''}
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
						<Button type="simple" size="small">
							{habit.status || ''}
						</Button>
						<Description>{habit.description}</Description>
						<RepeatPeriod>{habit.frequency.period}</RepeatPeriod>
						<FlexContainer>
							<Label>{habit.difficulty}</Label>
							<Label>{habit.type}</Label>
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
							>
								✎
							</Button>
							<Button
								bgColor={$tomato}
								color={$white}
								clickHandler={this.handleDeleteHabit}
								size="icon"
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

export default Habit;
