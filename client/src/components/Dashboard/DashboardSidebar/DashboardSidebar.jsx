import React from 'react';
import PropTypes from 'prop-types';

import { Sidebar, SidebarSection, SidebarOption } from '../Dashboard.styled';

const DashboardSidebar = ({ habitsLength, filterHabits }) => (
	<Sidebar>
		<SidebarSection>
			<SidebarOption onClick={() => filterHabits(null)}>
				All Habits
				<span>{habitsLength}</span>
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
);

DashboardSidebar.propTypes = {
	habitsLength: PropTypes.number.isRequired,
	filterHabits: PropTypes.func.isRequired,
};

export default DashboardSidebar;
