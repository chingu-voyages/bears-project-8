import React, { Fragment } from 'react';
// import PropTypes from 'prop-types';

import { $greyLight, $white } from '../../../assets/styledVars';
import { FilterByTags, FilterByDifficulty, FilterByType } from '../Dashboard.styled';

import Label from '../../Shared/Label/Label';

const DIFFICULTIES = ['Trivial', 'Easy', 'Medium', 'Hard', 'Epic'];
const TYPES = ['Active', 'Passive'];

const DashboardFilters = ({ tags }) => (
	<Fragment>
		<FilterByTags>
			<span>Tags:</span> {/* Map through actual user tags here */}
			{tags.map(tag => (
				<Label bgColor={$white} color={$greyLight}>
					{tag}
				</Label>
			))}
		</FilterByTags>
		<FilterByDifficulty>
			<span>Difficulty:</span>
			{DIFFICULTIES.map(diff => (
				<Label>{diff}</Label>
			))}
		</FilterByDifficulty>
		<FilterByType>
			<span>Type:</span>
			{TYPES.map(type => (
				<Label>{type}</Label>
			))}
		</FilterByType>
	</Fragment>
);

DashboardFilters.propTypes = {};

export default DashboardFilters;
