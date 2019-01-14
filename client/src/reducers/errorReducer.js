import Types from '../actions/types';

const { GET_ERRORS } = Types;

const initialState = {};

// Passes the payload into global 'errors' state
export default (state = initialState, action) => {
	switch (action.type) {
		case GET_ERRORS:
			return action.payload;
		default:
			return state;
	}
};
