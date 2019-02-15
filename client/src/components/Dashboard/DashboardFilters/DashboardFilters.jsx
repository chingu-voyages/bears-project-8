import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { $grey, $white } from '../../../assets/styledVars';
import { FilterByTags, FilterByDifficulty, FilterByType } from '../Dashboard.styled';

import Label from '../../Shared/Label/Label';

const DIFFICULTIES = ['Trivial', 'Easy', 'Medium', 'Hard', 'Epic'];
const TYPES = ['Active', 'Passive'];

const DashboardFilters = ({ tags, filterHabits }) => (
	<Fragment>
		<FilterByTags>
			<span>Tags:</span>
			{tags.map(tag => (
				<Label
					key={tag}
					bgColor={$white}
					color={$grey}
					onClick={() => filterHabits('tags', tag)}
				>
					{tag}
				</Label>
			))}
		</FilterByTags>
		<FilterByDifficulty>
			<span>Difficulty:</span>
			{DIFFICULTIES.map(diff => (
				<Label key={diff} onClick={() => filterHabits('difficulty', diff)}>
					{diff}
				</Label>
			))}
		</FilterByDifficulty>
		<FilterByType>
			<span>Type:</span>
			{TYPES.map(type => (
				<Label key={type} onClick={() => filterHabits('type', type)}>
					{type}
				</Label>
			))}
		</FilterByType>
	</Fragment>
);

DashboardFilters.propTypes = {
	tags: PropTypes.arrayOf(PropTypes.string).isRequired,
	filterHabits: PropTypes.func.isRequired,
};

export default DashboardFilters;
