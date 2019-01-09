import React, { Suspense, lazy } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
// eslint-disable-next-line camelcase
import jwt_decode from 'jwt-decode';
import { Provider } from 'react-redux';

import AppContainer from './components/AppContainer';
import Loader from './components/Shared/Loader/Loader';
import Home from './components/Home/Home';
import setAuthToken from './utils/setAuthToken';

import store from './store/store';
import { logoutUser, setCurrentUser } from './actions/authActions';
import { getHabits } from './actions/habitActions';

// Check for auth token
if (localStorage.jwtToken) {
	// Set auth token to header
	setAuthToken(localStorage.jwtToken);
	// Decode token and store user info
	const decoded = jwt_decode(localStorage.jwtToken);

	// Check for expired token
	const currentTime = Date.now() / 1000;
	if (decoded.exp < currentTime) {
		// Log user out
		store.dispatch(logoutUser());
		// Redirect to login
		window.location.href = '/login';
	} else {
		// Set user and isAuthenticated
		store.dispatch(setCurrentUser(decoded));
		// Get user's habits
		store.dispatch(getHabits());
	}
}

const Profile = lazy(() =>
	import(/* webpackChunkName: "profile" */ /* webpackPrefetch: true */ './components/Profile/Profile')
);
const Dashboard = lazy(() =>
	import(/* webpackChunkName: "dashboard" */ /* webpackPrefetch: true */ './components/Dashboard/Dashboard')
);
const Register = lazy(() =>
	import(/* webpackChunkName: "register" */ /* webpackPrefetch: true */ './components/Register/Register')
);
const Login = lazy(() =>
	import(/* webpackChunkName: "login" */ /* webpackPrefetch: true */ './components/Login/Login')
);

const withContainer = (Component, isLazy, hasNav = true) =>
	isLazy ? (
		<AppContainer hasNav={hasNav}>
			<Suspense fallback={<Loader centerAll />}>
				<Component />
			</Suspense>
		</AppContainer>
	) : (
		<AppContainer hasNav={hasNav}>
			<Component />
		</AppContainer>
	);

const Routes = () => (
	<Provider store={store}>
		<HashRouter>
			<Switch>
				<Route exact path="/" render={() => withContainer(Home, false, false)} />

				<Route exact path="/dashboard" render={() => withContainer(Dashboard, true)} />

				<Route exact path="/profile" render={() => withContainer(Profile, true)} />

				<Route exact path="/register" render={() => withContainer(Register, true, false)} />

				<Route exact path="/login" render={() => withContainer(Login, true, false)} />
			</Switch>
		</HashRouter>
	</Provider>
);

export default Routes;
