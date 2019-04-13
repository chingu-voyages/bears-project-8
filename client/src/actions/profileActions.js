import axios from 'axios';
import Types from './types';

export const fetchUser = id => dispatch =>
	axios.get(`/api/user/${id}`).then(res => {
		if (res.data) {
			return dispatch({
				type: Types.FETCH_USER,
				payload: res.data.user,
			});
		}
	});

export const clearUser = () => ({
	type: Types.CLEAR_USER,
});
