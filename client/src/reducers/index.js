import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
// TODO: Add habit reducer

export default combineReducers({
	auth: authReducer,
	errors: errorReducer,
});
