import Types from '../actions/types';
import isEmpty from '../utils/isEmpty';

const { SET_CURRENT_USER, EDIT_PROFILE, ADD_FRIEND } = Types;

const initialState = {
	isAuthenticated: false,
	user: { friends: [] },
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SET_CURRENT_USER:
			return {
				isAuthenticated: !isEmpty(action.payload),
				user: action.payload,
			};
		case EDIT_PROFILE:
			return {
				...state,
				user: {
					...state.user,
					...action.payload,
				},
			};
		case ADD_FRIEND:
			return {
				...state,
				user: {
					...state.user,
					friends: [...state.user.friends, action.payload],
				},
			};
		default:
			return state;
	}
};
