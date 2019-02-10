import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { $white, $elfGreen, $greyLavender, $tomato } from '../../assets/styledVars';
import { Container, FullHabit, FlexContainer, Description } from './Habit.styled';

import Button from '../Shared/Button/Button';
import Label from '../Shared/Label/Label';

class Habit extends Component {
	static propTypes = {
		habit: PropTypes.shape({
			name: PropTypes.string.isRequired,
			frequency: PropTypes.string.isRequired,
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
							<strong>{habit.name}</strong> <br /> <em>{habit.frequency.period}</em>{' '}
						</p>
						<Button size="small">{habit.status || ''}</Button>
					</Fragment>
				) : (
					<FullHabit>
						<strong>{habit.name}</strong>
						<FlexContainer>
							{habit.tags &&
								habit.tags.length > 0 &&
								habit.tags.map(tag => (
									<Label onClick={() => null} key={tag}>
										{tag}
									</Label>
								))}
						</FlexContainer>
						<Button size="small">{habit.status || ''}</Button>
						<Description>{habit.description}</Description>
						<small>{habit.frequency.period}</small>
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
