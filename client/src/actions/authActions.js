import axios from 'axios';
// eslint-disable-next-line camelcase
import jwt_decode from 'jwt-decode';
import { toast } from 'react-toastify';
import Types from './types';
import { getHabits } from './habitActions';
import setAuthToken from '../utils/setAuthToken';

const { SET_CURRENT_USER, GET_ERRORS, EDIT_PROFILE } = Types;

// Register user
export const registerUser = (userData, history) => dispatch =>
	axios
		.post('api/auth/register', userData)
		.then(() => {
			history.push('/auth/login');
			toast.success('Successfully registered!');
		})
		.catch(err => {
			toast.error('Oops! There was a problem registering...');
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data,
			});
		});

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
			// Display success message
			toast.success('Successfully logged in!');
		})
		.then(() => history.push('/dashboard'))
		.catch(err => {
			toast.error('Oops! There was a problem logging in...');
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data,
			});
		});

// Log the user out
export const logoutUser = () => dispatch => {
	// Remove token from localStorage
	localStorage.removeItem('jwtToken');
	// Remove auth header for future requests
	setAuthToken(null);
	// Set current user to {} - this set isAuthenticated to false
	dispatch(setCurrentUser({}));
	// Success toast message
	toast.success('Successfully logged out!');
};

// Set a new auth token
const refreshToken = () => {
	axios.get('api/user/token').then(res => {
		// Save to localStorage
		const { token } = res.data;
		localStorage.setItem('jwtToken', token);
		// Set token to auth header
		setAuthToken(token);
	});
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
			refreshToken();
			history.push('/profile');
			toast.success('You successfully updated your profile!');
		})
		.catch(err => {
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data,
			});
			toast.error('Oops! There was a problem editing your profile...');
		});
