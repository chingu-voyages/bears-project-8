import Types from '../actions/types';

const { UPDATE_HABIT_LIST, ADD_HABIT, EDIT_HABIT, DELETE_HABIT, UPDATE_HABIT } = Types;

const initialState = {
	habits: [],
};

export default (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_HABIT_LIST:
			return {
				...state,
				habits: action.payload,
			};
		case ADD_HABIT:
			return {
				...state,
				habits: [action.payload, ...state.habits],
			};
		case EDIT_HABIT:
			return {
				habits: [
					...state.habits.map(habit =>
						habit._id === action.payload._id ? action.payload : habit
					),
				],
			};
		case DELETE_HABIT:
			return {
				...state,
				habits: [
					...state.habits.map(habit => {
						if (habit._id !== action.payload._id) return habit;
						return null;
					}),
				],
			};
		case UPDATE_HABIT:
			return {
				...state,
				habits: [
					...state.habits.map(habit => {
						if (habit._id === action.payload._id) return action.payload;
						return habit;
					}),
				],
			};
		default:
			return state;
	}
};
