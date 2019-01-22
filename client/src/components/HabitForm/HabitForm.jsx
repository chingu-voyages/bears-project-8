import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Container, Header, Footer } from './HabitForm.styled';
import { LeftButtons, RightButtons } from './Buttons/Buttons';
import Content from './Content/Content';
import ProgressCircles from '../Shared/ProgressCircles/ProgressCircles';

export default class HabitForm extends Component {
	state = {
		step: 0,

		name: '',
		tags: [],
		description: '',
		value: '',
		times: '',
		period: '',
		reminderEvery: '',
		reminderTypes: [],
		difficulty: '',
		habitType: '',
		habitStart: '',
	};

	static propTypes = {
		onSubmit: PropTypes.func.isRequired,
	};

	handleChange = ({ target }) => {
		const { name, value } = target;
		this.setState({ [name]: value });
	};

	setStep = step => {
		this.setState({ step });
	};

	render() {
		const { step } = this.state;
		const { onSubmit } = this.props;
		return (
			<Container>
				<Header>Add a New Habit</Header>
				<Content {...this.state} onChange={this.handleChange} />
				<Footer>
					<LeftButtons step={step} setStep={this.setStep} />
					<ProgressCircles step={step} totalSteps={3} setStep={this.setStep} />
					<RightButtons
						step={step}
						totalSteps={3}
						setStep={this.setStep}
						onSubmit={onSubmit}
					/>
				</Footer>
			</Container>
		);
	}
}
