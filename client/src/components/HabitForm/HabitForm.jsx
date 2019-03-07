/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { addHabit, editHabit } from '../../actions/habitActions';

import PageContainer from '../Shared/PageContainer/PageContainer';
import { Footer } from './HabitForm.styled';
import Views from './Views/Views';
import { LeftButtons, RightButtons } from './Buttons/Buttons';
import ProgressCircles from '../Shared/ProgressCircles/ProgressCircles';

const initialState = () => ({
	isEditing: false,
	step: 0,

	errors: {},
	name: '',
	tags: [],
	description: '',
	times: '',
	period: '',
	reminderEvery: '',
	reminderTypes: {
		email: false,
		inApp: false,
		push: false,
	},
	difficulty: '',
	type: '',
	startDate: '',
});

export class _HabitForm extends Component {
	state = initialState();

	static propTypes = {
		addHabit: PropTypes.func.isRequired,
		editHabit: PropTypes.func.isRequired,
		habitDetails: PropTypes.shape({
			name: PropTypes.string.isRequired,
			tags: PropTypes.arrayOf(PropTypes.string),
			description: PropTypes.string,
			times: PropTypes.string,
			period: PropTypes.string,
			reminderEvery: PropTypes.string,
			reminderTypes: PropTypes.object,
			difficulty: PropTypes.string,
			type: PropTypes.string,
			startDate: PropTypes.string,
		}),
	};

	static defaultProps = {
		habitDetails: null,
	};

	static getDerivedStateFromProps(nextProps, prevState) {
		// If the user is editing a habit
		if (
			nextProps.match &&
			Object.keys(nextProps.match.params).length &&
			prevState._id !== nextProps.match.params.id
		) {
			// Format and pre-populate from existing habit
			const { habits, match } = nextProps;
			const { id } = match.params;
			const targetHabit = habits.find(habit => habit._id === id);
			const tagsFormatted =
				targetHabit && targetHabit.tags.map(tag => ({ id: tag, text: tag }));

			let updatedHabit;
			if (targetHabit) {
				updatedHabit = {
					...targetHabit,
					tags: tagsFormatted,
					times: (() => {
						switch (targetHabit.frequency.times) {
							case 1:
								return 'Once';
							case 2:
								return 'Twice';
							default:
								return `${targetHabit.frequency.times} times`;
						}
					})(),
					period: targetHabit.frequency.period,
					isEditing: true,
				};
				if (Object.keys(updatedHabit).length > 1) {
					return updatedHabit;
				}
			}

			// If the user is creating a new habit
		} else if (nextProps.match && !nextProps.match.params.id && prevState._id) {
			return initialState();
		}
		// Return error state;
		if (nextProps.errors) return { errors: nextProps.errors };
		return null;
	}

	handleChange = ({ target }) => {
		const { name, value } = target;
		this.setState({ [name]: value });
	};

	handleSubmit = () => {
		// eslint-disable-next-line no-shadow
		const { addHabit, editHabit, history } = this.props;
		const { step, isEditing, errors, ...habit } = this.state;
		habit.tags = habit.tags.map(t => t.text);

		const formatFrequency = (times, period) => {
			switch (habit.times) {
				case 'Once':
					return { times: 1, period };
				case 'Twice':
					return { times: 2, period };
				case '':
					return { times: 1, period };
				default:
					return { times: Number(times), period };
			}
		};
		if (habit.period) {
			habit.frequency = formatFrequency(habit.times, habit.period);
		} else {
			habit.frequency = { times: 1, period: 'Daily' };
		}
		delete habit.times;
		delete habit.period;

		if (isEditing) return editHabit(habit, history);
		return addHabit(habit, history);
	};

	setStep = step => {
		this.setState({ step });
	};

	setReminderType = type => {
		this.setState(prevState => ({
			reminderTypes: { ...prevState.reminderTypes, [type]: !prevState.reminderTypes[type] },
		}));
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
		const { tags } = this.state;
		const newTags = [...tags];

		newTags.splice(currPos, 1);
		newTags.splice(newPos, 0, tag);

		this.setState({ tags: newTags });
	};

	render() {
		const { step, isEditing } = this.state;
		const { history } = this.props;
		const breadCrumbs = isEditing
			? {
					crumbHistory: [{ name: 'Dashboard', link: '/dashboard' }],
					current: `Edit Habit`,
			  }
			: {
					crumbHistory: [{ name: 'Dashboard', link: '/dashboard' }],
					current: `Add Habit`,
			  };

		return (
			<PageContainer breadCrumbs={breadCrumbs} history={history}>
				<Views
					{...this.state}
					onChange={this.handleChange}
					setReminderType={this.setReminderType}
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
						onSubmit={this.handleSubmit}
					/>
				</Footer>
			</PageContainer>
		);
	}
}

const mapStateToProps = state => ({
	habits: state.habits,
	errors: state.errors,
});

export default withRouter(
	connect(
		mapStateToProps,
		{ addHabit, editHabit }
	)(_HabitForm)
);
