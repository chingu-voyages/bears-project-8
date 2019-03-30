import { fetchUser } from '../actions/userActions';

export default (state, urlParams) => {
	if (urlParams && urlParams.id) {
		console.log('urlParams', urlParams.id);
		//   get some user
		const user = fetchUser(urlParams.id);

		return user;
	}
	//   else return logged in user
	return state.auth.user;
};
