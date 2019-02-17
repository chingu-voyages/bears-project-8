import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import PageContainer from '../Shared/PageContainer/PageContainer';
import { Section, Dashboard } from './Dashboard.styled';

import HabitList from '../HabitList/HabitList';

import DashboardSidebar from './DashboardSidebar/DashboardSidebar';
import DashboardFilters from './DashboardFilters/DashboardFilters';

export class _Dashboard extends Component {
	static propTypes = {
		habits: PropTypes.arrayOf(PropTypes.shape({})),
		filterHabits: PropTypes.func.isRequired,
	};

	static defaultProps = {
		habits: [],
	};

	state = {
		target: '',
		criteria: '',
	};

	filterHabitsBy = (target, criteria) => this.setState({ target, criteria });

	render() {
		const { history, habits } = this.props;
		const { target, criteria } = this.state;
		const allTags = habits.reduce((tagArr, habit) => tagArr.concat(habit.tags), []);
		const uniqueTagsArr = [...new Set(allTags)];

		return (
			<PageContainer
				breadCrumbs={{
					crumbHistory: [],
					current: 'Dashboard',
				}}
				history={history}
			>
				<Section>
					<DashboardSidebar
						filterHabits={this.filterHabitsBy}
						habitsLength={habits.length}
					/>

					<Dashboard>
						<DashboardFilters filterHabits={this.filterHabitsBy} tags={uniqueTagsArr} />

						<HabitList habits={habits} target={target} criteria={criteria} />
					</Dashboard>
				</Section>
			</PageContainer>
		);
	}
}

const mapStateToProps = ({ habits }) => ({
	habits,
});

export default withRouter(connect(mapStateToProps)(_Dashboard));
