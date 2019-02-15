import React from 'react';
import HabitForm from '../Shared/HabitForm/HabitForm';
import PageContainer from '../Shared/PageContainer/PageContainer';

export default props => {
	const { history } = props;
	return (
		<PageContainer
			breadCrumbs={{
				crumbHistory: [{ name: 'Dashboard', link: '/dashboard' }],
				current: 'Add Habit',
			}}
			history={history}
		>
			<HabitForm />
		</PageContainer>
	);
};
