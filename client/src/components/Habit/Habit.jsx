import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { Container, Title } from './Habit.styled';

import Button from '../Shared/Button/Button';

class Habit extends Component {
	static propTypes = {
		habit: PropTypes.shape({
			title: PropTypes.string.isRequired,
			frequency: PropTypes.string.isRequired,
		}).isRequired,
	};

	state = {
		isCollapsed: false,
	};

	render() {
		const { habit } = this.props;
		const { isCollapsed } = this.state;

		const dueDate = 'Due Tomorrow';

		return (
			<Container>
				{isCollapsed ? (
					<p>{habit.title}</p>
				) : (
					<Fragment>
						<div>
							<Title>{habit.title}</Title>
							<p>{habit.frequency}</p>
						</div>
						<div>
							<Button>{dueDate}</Button>
						</div>
					</Fragment>
				)}
			</Container>
		);
	}
}

export default Habit;
