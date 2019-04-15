import React from 'react';
import ReactDOM from 'react-dom';
import jwtDecode from 'jwt-decode';
import { Provider } from 'react-redux';
import { createHashHistory } from 'history';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import GlobalStyle from './globalStyle.styled';
import Routes from './Routes';
import * as serviceWorker from './serviceWorker';
import setAuthToken from './utils/setAuthToken';
import store from './store/store';
import { logoutUser, setCurrentUser } from './actions/authActions';
import { getHabits } from './actions/habitActions';

const history = createHashHistory({
	hashType: 'noslash',
});

// Check for auth token
if (localStorage.jwtToken) {
	// Set auth token to header
	setAuthToken(localStorage.jwtToken);
	// Decode token and store user info
	const decoded = jwtDecode(localStorage.jwtToken);

	// Check for expired token
	const currentTime = Date.now() / 1000;
	if (decoded.exp < currentTime) {
		// Log user out
		store.dispatch(logoutUser(history));
	} else {
		// Set user and isAuthenticated
		store.dispatch(setCurrentUser(decoded));
		// Get user's habits
		store.dispatch(getHabits());
	}
}

const Root = () => (
	<Provider store={store}>
		<GlobalStyle />
		<Routes />
		<ToastContainer
			autoClose={3500}
			newestOnTop
			className="toastify--main"
			toastClassName="toastify--content"
			progressClassName="toastify--progress"
			position="bottom-right"
		/>
	</Provider>
);

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
