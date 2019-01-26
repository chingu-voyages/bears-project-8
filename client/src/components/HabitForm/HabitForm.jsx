import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Header, Footer } from './HabitForm.styled';
import Views from './Views/Views';
import { LeftButtons, RightButtons } from './Buttons/Buttons';
import ProgressCircles from '../Shared/ProgressCircles/ProgressCircles';

export default class HabitForm extends Component {
	state = {
		step: 0,

		name: '',
		tags: [{ id: 'Health', text: 'Health' }],
		tagSuggestions: [
			{ id: 'Fitness', text: 'Fitness' },
			{ id: 'Finesse', text: 'Finesse' },
			{ id: 'Work', text: 'Work' },
			{ id: 'Music', text: 'Music' },
		],
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

	// Tag input functions

	handleTagDelete = i => {
		this.setState(prevState => ({
			tags: prevState.tags.filter((tag, index) => index !== i),
		}));
	};

	handleTagAdd = tag => {
		this.setState(prevState => ({ tags: [...prevState.tags, tag] }));
	};

	handleTagDrag = (tag, currPos, newPos) => {
		const [tags] = this.state;
		const newTags = tags.slice();

		newTags.splice(currPos, 1);
		newTags.splice(newPos, 0, tag);

		this.setState({ tags: newTags });
	};

	render() {
		const { step } = this.state;
		const { onSubmit } = this.props;
		return (
			<Container>
				<Header>Add a New Habit</Header>
				<Views
					{...this.state}
					onChange={this.handleChange}
					onTagDelete={this.handleTagDelete}
					onTagAdd={this.handleTagAdd}
					onTagDrag={this.handleTagDrag}
				/>
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
