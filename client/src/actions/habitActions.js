import axios from 'axios';
import { toast } from 'react-toastify';
import Types from './types';

const { UPDATE_HABIT_LIST, ADD_HABIT, EDIT_HABIT, DELETE_HABIT, GET_ERRORS, UPDATE_HABIT } = Types;

// Get the user's habits
export const getHabits = () => dispatch =>
	axios
		.get('/api/habit/habits')
		.then(res => {
			dispatch({
				type: UPDATE_HABIT_LIST,
				payload: res.data.habits,
			});
		})
		.catch(err =>
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data,
			})
		);

// Add a new habit
export const addHabit = (habitData, history) => dispatch =>
	axios
		.post('/api/habit/create', habitData)
		.then(res => {
			dispatch({
				type: ADD_HABIT,
				payload: res.data.habit,
			});
			history.push('/dashboard');
			toast.success(`Successfully added habit, ${res.data.habit.name}`, {
				position: toast.POSITION.BOTTOM_RIGHT,
			});
		})
		.catch(err => {
			dispatch({ type: GET_ERRORS, payload: err.response.data });
			toast.error('Oops! There was a problem adding the habit...', {
				position: toast.POSITION.BOTTOM_RIGHT,
			});
		});

// Edit an existing habit
export const editHabit = (updatedHabit, history) => dispatch =>
	axios
		.put(`/api/habit/${updatedHabit._id}`, updatedHabit)
		.then(res => {
			dispatch({
				type: EDIT_HABIT,
				payload: res.data.habit,
			});
			history.push('/dashboard');
			toast.success(`Successfully edited habit, ${res.data.habit.name}`, {
				position: toast.POSITION.BOTTOM_RIGHT,
			});
		})
		.catch(err => {
			dispatch({ type: GET_ERRORS, payload: err.response.data });
			toast.error('Oops! There was a problem editing the habit...', {
				position: toast.POSITION.BOTTOM_RIGHT,
			});
		});

// Delete a habit
export const deleteHabit = habitID => dispatch =>
	axios
		.delete(`/api/habit/${habitID}`)
		.then(res => {
			dispatch({
				type: DELETE_HABIT,
				payload: res.data.habit,
			});
			toast.success(`Successfully deleted habit, ${res.data.habit.name}`, {
				position: toast.POSITION.BOTTOM_RIGHT,
			});
		})
		.catch(err => {
			dispatch({ type: GET_ERRORS, payload: err.response.data });
			toast.error('Oops! There was a problem deleting the habit...', {
				position: toast.POSITION.BOTTOM_RIGHT,
			});
		});

// Log a habit
export const logHabit = (habitID, logTime = Date.now) => dispatch =>
	axios
		.patch(`/api/habit/${habitID}/log`, logTime)
		.then(res => {
			dispatch({
				type: UPDATE_HABIT,
				payload: res.data.habit,
			});
			toast.success(`Logged the habit, ${res.data.habit.name}`, {
				position: toast.POSITION.BOTTOM_RIGHT,
			});
		})
		.catch(err => {
			dispatch({ type: GET_ERRORS, payload: err.response.data });
			toast.error('Oops! There was a problem logging the habit...', {
				position: toast.POSITION.BOTTOM_RIGHT,
			});
		});

// Delete a habit log
export const deleteHabitLog = (habitID, index) => dispatch =>
	axios
		.delete(`/api/habit/${habitID}/log/${index}`)
		.then(res => {
			dispatch({
				type: UPDATE_HABIT,
				payload: res.data.habit,
			});
			toast.success(`Deleted habit log for ${res.data.habit.name}`, {
				position: toast.POSITION.BOTTOM_RIGHT,
			});
		})
		.catch(err => {
			dispatch({ type: GET_ERRORS, payload: err.response.data });
			toast.error('Oops! There was a problem deleting the habit log...', {
				position: toast.POSITION.BOTTOM_RIGHT,
			});
		});
