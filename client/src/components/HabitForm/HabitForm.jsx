import React, { Component } from 'react';

import { Container, Header, Footer } from './HabitForm.styled';
import { LeftButtons, RightButtons } from './Buttons';
import Content from './Content';
import ProgressCircles from '../Shared/Forms/ProgressCircles';

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

	handleChange = ({ target }) => {
		const { name, value } = target;
		this.setState({ [name]: value });
	};

	setStep = step => {
		this.setState({ step });
	};

	handleSubmit = () => {
		// TODO: validate form input and handle submit
	};

	render() {
		const { step } = this.state;
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
						onSubmit={this.handleSubmit}
					/>
				</Footer>
			</Container>
		);
	}
}
