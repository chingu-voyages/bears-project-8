import axios from 'axios';
import { UPDATE_HABIT_LIST, ADD_HABIT, DELETE_HABIT, GET_ERRORS, UPDATE_HABIT } from './types';

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
export const addHabit = habitData => dispatch =>
	axios
		.post('/api/habit/create', habitData)
		.then(res => {
			dispatch({
				type: ADD_HABIT,
				payload: res.data.habit,
			});
		})
		.catch(err => dispatch({ type: GET_ERRORS, payload: err.response.data }));

// Delete a habit
export const deleteHabit = habitID => dispatch =>
	axios
		.delete(`/api/habit/${habitID}`)
		.then(res => {
			dispatch({
				type: DELETE_HABIT,
				payload: res.data.habit,
			});
		})
		.catch(err => dispatch({ type: GET_ERRORS, payload: err.response.data }));

// Log a habit
export const logHabit = (habitID, logTime = Date.now) => dispatch =>
	axios
		.patch(`/api/habit/${habitID}/log`, logTime)
		.then(res => {
			dispatch({
				type: UPDATE_HABIT,
				payload: res.data.habit,
			});
		})
		.catch(err => dispatch({ type: GET_ERRORS, payload: err.response.data }));

// Delete a habit log
export const deleteHabitLog = (habitID, index) => dispatch =>
	axios
		.delete(`/api/habit/${habitID}/log/${index}`)
		.then(res => {
			dispatch({
				type: UPDATE_HABIT,
				payload: res.data.habit,
			});
		})
		.catch(err => dispatch({ type: GET_ERRORS, payload: err.response.data }));
