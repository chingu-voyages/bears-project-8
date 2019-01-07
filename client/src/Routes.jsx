import React, { Fragment, Suspense, lazy } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import AppContainer from './components/AppContainer';
import Loader from './components/Shared/Loader/Loader';
import Home from './components/Home/Home';

const Profile = lazy(() =>
	import(/* webpackChunkName: "profile" */ /* webpackPrefetch: true */ './components/Profile/Profile')
);
const Dashboard = lazy(() =>
	import(/* webpackChunkName: "dashboard" */ /* webpackPrefetch: true */ './components/Dashboard/Dashboard')
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
		<Fragment>
			<Switch>
				<Route exact path="/" render={() => withContainer(Home, false, false)} />

				<Route exact path="/dashboard" render={() => withContainer(Dashboard, true)} />

				<Route exact path="/profile" render={() => withContainer(Profile, true)} />

				<Route exact path="/auth" render={() => withContainer(Login, true, false)} />
			</Switch>
		</Fragment>
	</HashRouter>
);

export default Routes;
