import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { $greyLight, $white } from '../../../assets/styledVars';
import { FilterByTags, FilterByDifficulty, FilterByType } from '../Dashboard.styled';

import Label from '../../Shared/Label/Label';

const DIFFICULTIES = ['Trivial', 'Easy', 'Medium', 'Hard', 'Epic'];
const TYPES = ['Active', 'Passive'];

const DashboardFilters = ({ tags }) => (
	<Fragment>
		<FilterByTags>
			<span>Tags:</span>
			{tags.map(tag => (
				<Label key={tag} bgColor={$white} color={$greyLight} onClick={() => null}>
					{tag}
				</Label>
			))}
		</FilterByTags>
		<FilterByDifficulty>
			<span>Difficulty:</span>
			{DIFFICULTIES.map(diff => (
				<Label key={diff} onClick={() => null}>
					{diff}
				</Label>
			))}
		</FilterByDifficulty>
		<FilterByType>
			<span>Type:</span>
			{TYPES.map(type => (
				<Label key={type} onClick={() => null}>
					{type}
				</Label>
			))}
		</FilterByType>
	</Fragment>
);

DashboardFilters.propTypes = {
	tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default DashboardFilters;
