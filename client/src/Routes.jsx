import React, { Suspense, lazy } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import AppContainer from './components/AppContainer';
import Loader from './components/Shared/Loader/Loader';
import Home from './components/Home/Home';

import withAuthHOC from './utils/withAuth';

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

const withContainer = (Component, isLazy, hasNav = true, withAuth = false) =>
	isLazy ? (
		<AppContainer hasNav={hasNav}>
			<Suspense fallback={<Loader centerAll />}>
				{withAuth ? withAuthHOC(Component, false) : <Component />}
			</Suspense>
		</AppContainer>
	) : (
		<AppContainer hasNav={hasNav}>
			{withAuth ? withAuthHOC(Component, true) : <Component />}
		</AppContainer>
	);

const Routes = () => (
	<HashRouter>
		<Switch>
			<Route exact path="/" render={() => withContainer(Home, false, false)} />

			<Route
				exact
				path="/dashboard"
				render={() => withContainer(Dashboard, true, true, true)}
			/>

			<Route exact path="/profile" render={() => withContainer(Profile, true, true, true)} />

			<Route
				exact
				path="/auth/register"
				render={() => withContainer(Register, true, false)}
			/>

			<Route exact path="/auth/login" render={() => withContainer(Login, true, false)} />
		</Switch>
	</HashRouter>
);

export default Routes;
