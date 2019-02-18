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
	};

	static defaultProps = {
		habits: [],
	};

	state = {
		target: 'all',
		criteria: '',
	};

	filterHabitsBy = (target = '', criteria = '') => this.setState({ target, criteria });

	render() {
		const { history, habits } = this.props;
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
						{...this.state}
					/>

					<Dashboard>
						<DashboardFilters
							filterHabits={this.filterHabitsBy}
							tags={uniqueTagsArr}
							{...this.state}
						/>

						<HabitList habits={habits} {...this.state} />
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
