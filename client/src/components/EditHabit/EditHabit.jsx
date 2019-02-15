import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import HabitForm from '../Shared/HabitForm/HabitForm';
import PageContainer from '../Shared/PageContainer/PageContainer';

const EditHabit = props => {
	const { habits, match } = props;
	const { id } = match.params;
	const editHabit = habits.filter(habit => habit._id === id)[0];
	const { history } = props;
	return (
		<PageContainer
			breadCrumbs={{
				crumbHistory: [{ name: 'Dashboard', link: '/dashboard' }],
				current: `Edit Habit`,
			}}
			history={history}
		>
			<HabitForm habitDetails={editHabit} />
		</PageContainer>
	);
};

EditHabit.propTypes = {
	habits: PropTypes.arrayOf({
		name: PropTypes.string.isRequired,
	}).isRequired,
};

const mapStateToProps = ({ habits }) => ({
	habits: habits.habits,
});

export default connect(mapStateToProps)(EditHabit);
