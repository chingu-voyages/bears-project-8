import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { Container, Title, FullHabit, FlexContainer, Description } from './Habit.styled';

import Button from '../Shared/Button/Button';
import Label from '../Shared/Label/Label';

class Habit extends Component {
	static propTypes = {
		habit: PropTypes.shape({
			title: PropTypes.string.isRequired,
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

	render() {
		const { habit } = this.props;
		const { isCollapsed } = this.state;

		return (
			<Container onClick={this.toggleCollapse}>
				{isCollapsed ? (
					<Fragment>
						<p>
							<strong>{habit.title}</strong> <br /> <em>{habit.frequency}</em>{' '}
						</p>
						<Button size="small">{habit.status}</Button>
					</Fragment>
				) : (
					<FullHabit>
						<strong>{habit.title}</strong>
						<FlexContainer>
							{habit.tags &&
								habit.tags.length > 0 &&
								habit.tags.map(tag => (
									<Label onClick={() => null} key={tag}>
										{tag}
									</Label>
								))}
						</FlexContainer>
						<Button size="small">{habit.status}</Button>
						<Description>{habit.description}</Description>
						<small>{habit.frequency}</small>
						<FlexContainer>
							<Label>{habit.difficulty}</Label>
							<Label>{habit.type}</Label>
						</FlexContainer>
						<Button
							clickHandler={this.handleLogHabit}
							type="filled"
							size="small"
							bgColor="#5cbc9a"
							color="#fff"
						>
							Log Habit
						</Button>
					</FullHabit>
				)}
			</Container>
		);
	}
}

export default Habit;
