import Types from '../actions/types';
import isEmpty from '../utils/isEmpty';

const { SET_CURRENT_USER } = Types;

const initialState = {
	isAuthenticated: false,
	user: {},
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SET_CURRENT_USER:
			return {
				...state,
				isAuthenticated: !isEmpty(action.payload),
				user: action.payload,
			};
		default:
			return state;
	}
};
