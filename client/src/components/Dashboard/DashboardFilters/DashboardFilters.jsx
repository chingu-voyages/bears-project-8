import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { $grey, $white } from '../../../assets/styledVars';
import { FilterByTags, FilterByDifficulty, FilterByType } from '../Dashboard.styled';

import Label from '../../Shared/Label/Label';

const DIFFICULTIES = ['Trivial', 'Easy', 'Medium', 'Hard', 'Epic'];
const TYPES = ['Active', 'Passive'];

const DashboardFilters = ({ tags, filterHabits, criteria }) => (
	<Fragment>
		<FilterByTags>
			<span>Tags:</span>
			{tags.map(tag => (
				<Label
					key={tag}
					bgColor={criteria === tag ? $grey : $white}
					color={criteria === tag ? $white : $grey}
					onClick={() => filterHabits('tags', tag)}
				>
					{tag}
				</Label>
			))}
		</FilterByTags>
		<FilterByDifficulty>
			<span>Difficulty:</span>
			{DIFFICULTIES.map(diff => (
				<Label
					bgColor={criteria === diff ? $grey : $white}
					color={criteria === diff ? $white : $grey}
					key={diff}
					onClick={() => filterHabits('difficulty', diff)}
				>
					{diff}
				</Label>
			))}
		</FilterByDifficulty>
		<FilterByType>
			<span>Type:</span>
			{TYPES.map(type => (
				<Label
					bgColor={criteria === type ? $grey : $white}
					color={criteria === type ? $white : $grey}
					key={type}
					onClick={() => filterHabits('type', type)}
				>
					{type}
				</Label>
			))}
		</FilterByType>
	</Fragment>
);

DashboardFilters.propTypes = {
	tags: PropTypes.arrayOf(PropTypes.string).isRequired,
	filterHabits: PropTypes.func.isRequired,
	criteria: PropTypes.string,
};

DashboardFilters.defaultProps = {
	criteria: '',
};

export default DashboardFilters;
