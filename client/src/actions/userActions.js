import axios from 'axios';
import Types from './types';

export const fetchUser = id => axios.get(`/api/user/${id}`).then(res => res.data.user);

export const clearUser = () => dispatch => {};
