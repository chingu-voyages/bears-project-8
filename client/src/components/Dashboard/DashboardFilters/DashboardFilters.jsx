import React, { Fragment } from 'react';
// import PropTypes from 'prop-types';

import { FilterByTags, FilterByDifficulty, FilterByType } from '../Dashboard.styled';

import Label from '../../Shared/Label/Label';

const DashboardFilters = props => (
	<Fragment>
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
	</Fragment>
);

DashboardFilters.propTypes = {};

export default DashboardFilters;
