import Types from '../actions/types';

const { UPDATE_HABIT_LIST, ADD_HABIT, DELETE_HABIT, UPDATE_HABIT } = Types;

export const filterHabitsSelector = (state, { target, criteria }) => {
	if (!target) return state;

	let filteredState = [];

	if (target === 'tags') {
		filteredState = state.filter(item => item[target].includes(criteria));
	} else {
		filteredState = state.filter(item => item[target] === criteria);
	}

	return filteredState;
};

export default (state = [], action) => {
	switch (action.type) {
		case UPDATE_HABIT_LIST:
			return action.payload;
		case ADD_HABIT:
			return [action.payload, ...state];
		case DELETE_HABIT:
			return state.filter(habit => habit._id !== action.payload._id);
		case UPDATE_HABIT:
			return state.map(habit => (habit._id === action.payload._id ? action.payload : habit));
		default:
			return state;
	}
};
