import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { Container, Section, Dashboard } from './Dashboard.styled';

import Breadcrumbs from '../Shared/Breadcrumbs/Breadcrumbs';
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

	state = {};

	render() {
		const { history, habits } = this.props;

		return (
			<Container>
				<Breadcrumbs>
					<span
						role="link"
						tabIndex="-1"
						onClick={() => history.push('/dashboard')}
						onKeyDown={() => history.push('/dashboard')}
					>
						Dashboard
					</span>
				</Breadcrumbs>

				<Section>
					<DashboardSidebar />

					<Dashboard>
						<DashboardFilters />

						<HabitList habits={habits} />
					</Dashboard>
				</Section>
			</Container>
		);
	}
}

const mapStateToProps = ({ habits }) => ({
	habits: habits.habits,
});

export default withRouter(connect(mapStateToProps)(_Dashboard));
