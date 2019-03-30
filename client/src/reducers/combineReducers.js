import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import habitReducer from './habitReducer';
import usersReducer from './usersReducer';

export default combineReducers({
	auth: authReducer,
	errors: errorReducer,
	habits: habitReducer,
	users: usersReducer,
});
