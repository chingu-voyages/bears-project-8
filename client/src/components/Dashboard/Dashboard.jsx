import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import {
	Container,
	Breadcrumbs,
	Section,
	Sidebar,
	Dashboard,
	FilterByTags,
	FilterByDifficulty,
	FilterByType,
	Label,
	SidebarSection,
	SidebarOption,
} from './Dashboard.styled';

import HabitList from '../HabitList/HabitList';

export class _Dashboard extends Component {
	static propTypes = {};

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
					<Sidebar>
						<SidebarSection>
							<SidebarOption onClick={() => null}>
								All Habits
								<span>4</span>
							</SidebarOption>
							<SidebarOption onClick={() => null}>
								Due Habits
								<span>4</span>
							</SidebarOption>
							<SidebarOption onClick={() => null}>
								Upcoming Habits
								<span>4</span>
							</SidebarOption>
						</SidebarSection>
						<SidebarSection>
							<SidebarOption onClick={() => null}>
								Logbook
								<span>324</span>
							</SidebarOption>
							<SidebarOption onClick={() => null}>
								Insights
								<span />
							</SidebarOption>
						</SidebarSection>
					</Sidebar>
					<Dashboard>
						<FilterByTags>
							<span>Tags:</span> {/* Map through actual user tags here */}
							<Label bgColor="#fff" color="#c4c4c4">
								Health
							</Label>
							<Label bgColor="#fff" color="#c4c4c4">
								Web Development
							</Label>
							<Label bgColor="#fff" color="#c4c4c4">
								Meditation
							</Label>
						</FilterByTags>
						<FilterByDifficulty>
							<span>Difficulty:</span>
							<Label>Trivial</Label>
							<Label>Easy</Label>
							<Label>Medium</Label>
							<Label>Hard</Label>
							<Label>Epic</Label>
						</FilterByDifficulty>
						<FilterByType>
							<span>Type:</span>
							<Label>Active</Label>
							<Label>Passive</Label>
						</FilterByType>

						<HabitList habits={habits} />
					</Dashboard>
				</Section>
			</Container>
		);
	}
}

const mapStateToProps = state => ({});

export default withRouter(connect(mapStateToProps)(_Dashboard));
