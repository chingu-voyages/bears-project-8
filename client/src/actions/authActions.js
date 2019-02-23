import axios from 'axios';
// eslint-disable-next-line camelcase
import jwt_decode from 'jwt-decode';
import Types from './types';
import { getHabits } from './habitActions';
import setAuthToken from '../utils/setAuthToken';

const { SET_CURRENT_USER, GET_ERRORS, EDIT_PROFILE } = Types;

// Register user
export const registerUser = (userData, history) => dispatch =>
	axios
		.post('api/auth/register', userData)
		.then(() => history.push('/auth/login'))
		.catch(err =>
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data,
			})
		);

// Set logged in user
export const setCurrentUser = decoded => ({
	type: SET_CURRENT_USER,
	payload: decoded,
});

// Login - get user token
export const loginUser = (userData, history) => dispatch =>
	axios
		.post('api/auth/login', userData)
		.then(res => {
			// Save to localStorage
			const { token } = res.data;
			localStorage.setItem('jwtToken', token);
			// Set token to auth header
			setAuthToken(token);
			// Decode token for user data
			const decoded = jwt_decode(token);
			// Set current user
			dispatch(setCurrentUser(decoded));
			// Get user's habits
			dispatch(getHabits());
		})
		.then(() => history.push('/dashboard'))
		.catch(err =>
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data,
			})
		);

// Log the user out
export const logoutUser = () => dispatch => {
	// Remove token from localStorage
	localStorage.removeItem('jwtToken');
	// Remove auth header for future requests
	setAuthToken(null);
	// Set current user to {} - this set isAuthenticated to false
	dispatch(setCurrentUser({}));
};

// Edit profile
export const editProfile = (user, profileData, history) => dispatch =>
	axios
		.put(`api/user/${user.id}`, profileData)
		.then(res => {
			// Edit current user profile
			dispatch({
				type: EDIT_PROFILE,
				payload: res.data.user,
			});
		})
		.then(() => history.push('/profile'))
		.catch(err =>
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data,
			})
		);

/*
	The problem above is that if the user changes their profile and then refreshes the app, the old info from the JWT token will be loaded.
	Perhaps a get user info route is needed, so that only the user id is pulled from the JWT token
*/
