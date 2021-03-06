import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { toast } from 'react-toastify';
import Types from './types';
import { getHabits } from './habitActions';
import setAuthToken from '../utils/setAuthToken';

const { SET_CURRENT_USER, GET_ERRORS, EDIT_PROFILE, ADD_FRIEND } = Types;

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
			const decoded = jwtDecode(token);
			// Set current user
			dispatch({
				type: SET_CURRENT_USER,
				payload: decoded,
			});
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

// Register user
export const registerUser = (userData, history) => dispatch =>
	axios
		.post('api/auth/register', userData)
		.then(() => {
			toast.success('Successfully registered!');
			dispatch(loginUser(userData, history));
		})
		.catch(err => {
			toast.error('Oops! There was a problem registering...');
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data,
			});
		});

// Log the user out
export const logoutUser = history => dispatch => {
	// Remove token from localStorage
	localStorage.removeItem('jwtToken');
	// Remove auth header for future requests
	setAuthToken(null);
	// Set current user to {} - this sets isAuthenticated to false
	dispatch({
		type: SET_CURRENT_USER,
		payload: {},
	});
	// Redirect to homepage
	history.push('/');
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

// Delete the user account
export const deleteUser = (userID, history) => dispatch => {
	axios
		.delete(`api/user/${userID}`)
		.then(res => {
			// Log user out (and redirect to home page)
			dispatch(logoutUser(history));
			// Success toast message
			toast.success(res.data.message);
		})
		.catch(() => {
			toast.error('There was a problem deleting your account');
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

// TODO: Some of these actions can be split into a separate userActions file

// Add friend
export const addFriend = (email, history) => dispatch =>
	axios
		.post('api/user/addfriend', { email })
		.then(res => {
			// Add friend
			dispatch({
				type: ADD_FRIEND,
				payload: res.data.friend,
			});
			refreshToken();
			toast.success(`You successfully added your friend!`);
			history.push('/profile');
		})
		.catch(err => {
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data,
			});
			toast.error('Oops! There was a problem adding a friend...');
		});
