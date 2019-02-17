import React from 'react';
import PropTypes from 'prop-types';

import { Sidebar, SidebarSection, SidebarOption } from '../Dashboard.styled';

const DashboardSidebar = ({ habitsLength, filterHabits, target }) => (
	<Sidebar>
		<SidebarSection>
			<SidebarOption active={target === 'all'} onClick={() => filterHabits('all')}>
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
	target: PropTypes.string,
};

DashboardSidebar.defaultProps = {
	target: '',
};

export default DashboardSidebar;
