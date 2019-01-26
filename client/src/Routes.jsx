import React, { Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import { HashRouter, Route, Switch } from 'react-router-dom';

import AppContainer from './components/AppContainer';
import Loader from './components/Shared/Loader/Loader';
import Home from './components/Home/Home';
import HabitForm from './components/HabitForm/HabitForm';

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

const withContainer = ({ component: Component, isLazy, hasNav, withAuth, isAuthenticated }) =>
	isLazy ? (
		<AppContainer hasNav={hasNav}>
			<Suspense fallback={<Loader centerAll />}>
				{withAuth ? withAuthHOC(Component, isAuthenticated) : <Component />}
			</Suspense>
		</AppContainer>
	) : (
		<AppContainer hasNav={hasNav}>
			{withAuth ? withAuthHOC(Component, isAuthenticated) : <Component />}
		</AppContainer>
	);

withContainer.propTypes = {
	component: PropTypes.node.isRequired,
	isLazy: PropTypes.bool.isRequired,
	hasNav: PropTypes.bool,
	withAuth: PropTypes.bool,
	isAuthenticated: PropTypes.bool,
};

withContainer.defaultProps = {
	hasNav: true,
	withAuth: false,
	isAuthenticated: false,
};

const Routes = ({ isAuthenticated }) => (
	<HashRouter>
		<Switch>
			<Route
				exact
				path="/"
				render={() => withContainer({ component: Home, isLazy: false, hasNav: false })}
			/>

			<Route
				exact
				path="/dashboard"
				render={() =>
					withContainer({
						component: Dashboard,
						isLazy: true,
						hasNav: true,
						withAuth: false,
						isAuthenticated,
					})
				}
			/>

			<Route
				exact
				path="/profile"
				render={() =>
					withContainer({
						component: Profile,
						isLazy: true,
						hasNav: true,
						withAuth: false,
						isAuthenticated,
					})
				}
			/>

			{/* Rendering component here to develop */}
			<Route
				exact
				path="/habitform"
				render={() => withContainer({ component: HabitForm, isLazy: true, hasNav: true })}
			/>

			<Route
				exact
				path="/auth/register"
				render={() => withContainer({ component: Register, isLazy: true, hasNav: false })}
			/>

			<Route
				exact
				path="/auth/login"
				render={() => withContainer({ component: Login, isLazy: true, hasNav: false })}
			/>
		</Switch>
	</HashRouter>
);

Routes.propTypes = {
	isAuthenticated: PropTypes.bool.isRequired,
};

export default Routes;
