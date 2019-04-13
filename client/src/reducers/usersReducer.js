import Types from '../actions/types';

export default (state = {}, action) => {
	switch (action.type) {
		case Types.FETCH_USER:
			return action.payload;
		case Types.CLEAR_USER:
			return {};
		default:
			return state;
	}
};
