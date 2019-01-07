import React, { Component } from 'react';
import { Container, Header, Footer } from './HabitForm.styled';

import Content from './Content';

export default class NavBar extends Component {
	state = {
		step: 0,

		name: '',
		tags: [],
		value: '',
		times: '',
		period: '',
		reminderEvery: '',
		reminderTypes: [],
		difficulty: '',
		habitType: '',
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
		return (
			<Container>
				<Header>Add a New Habit</Header>
				<Content {...this.state} onChange={this.handleChange} />
				<Footer>Buttons go down here...</Footer>
			</Container>
		);
	}
}
