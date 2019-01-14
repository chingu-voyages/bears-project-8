import React, { Suspense, lazy } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import AppContainer from './components/AppContainer';
import Loader from './components/Shared/Loader/Loader';
import Home from './components/Home/Home';
import HabitForm from './components/HabitForm/HabitForm';

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
	<HashRouter>
		<Switch>
			<Route exact path="/" render={() => withContainer(Home, false, false)} />

			<Route exact path="/dashboard" render={() => withContainer(Dashboard, true)} />

			<Route exact path="/profile" render={() => withContainer(Profile, true)} />

			<Route exact path="/register" render={() => withContainer(Register, true, false)} />

			<Route exact path="/login" render={() => withContainer(Login, true, false)} />
		</Switch>
	</HashRouter>
);

export default Routes;
