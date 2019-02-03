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
	Habits,
} from './Dashboard.styled';

export class _Dashboard extends Component {
	static propTypes = {};

	state = {};

	render() {
		const { history } = this.props;

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
							<SidebarOption>
								All Habits
								<span>4</span>
							</SidebarOption>
							<SidebarOption>
								Due Habits
								<span>4</span>
							</SidebarOption>
							<SidebarOption>
								Upcoming Habits
								<span>4</span>
							</SidebarOption>
						</SidebarSection>
						<SidebarSection>
							<SidebarOption>
								Logbook
								<span>324</span>
							</SidebarOption>
							<SidebarOption>
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
						<Habits>Habits</Habits>
					</Dashboard>
				</Section>
			</Container>
		);
	}
}

const mapStateToProps = state => ({});

export default withRouter(connect(mapStateToProps)(_Dashboard));
