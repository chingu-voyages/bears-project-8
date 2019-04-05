import React, { Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import AppContainer from './components/AppContainer';
import Loader from './components/Shared/Loader/Loader';
import Home from './components/Home/Home';
import HabitForm from './components/HabitForm/HabitForm';
import ProfileForm from './components/ProfileForm/ProfileForm';
import AddFriend from './components/AddFriend/AddFriend';

import withAuthHOC from './utils/withAuth';

const Profile = lazy(() =>
	import(/* webpackChunkName: "profile" */ /* webpackPrefetch: true */ './components/Profile/Profile')
);
const Dashboard = lazy(() =>
	import(/* webpackChunkName: "dashboard" */ /* webpackPrefetch: true */ './components/Dashboard/Dashboard')
);
const Register = lazy(() =>
	import(/* webpackChunkName: "register" */ /* webpackPrefetch: true */ './components/Auth/Register/Register')
);
const Login = lazy(() =>
	import(/* webpackChunkName: "login" */ /* webpackPrefetch: true */ './components/Auth/Login/Login')
);

const withContainer = ({
	component: Component,
	isLazy,
	hasNav,
	withAuth,
	isAuthenticated,
	props,
}) =>
	isLazy ? (
		<AppContainer hasNav={hasNav}>
			<Suspense fallback={<Loader centerAll />}>
				{withAuth ? withAuthHOC(Component, isAuthenticated) : <Component {...props} />}
			</Suspense>
		</AppContainer>
	) : (
		<AppContainer hasNav={hasNav}>
			{withAuth ? withAuthHOC(Component, isAuthenticated) : <Component {...props} />}
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
						withAuth: true,
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
						withAuth: true,
						isAuthenticated,
					})
				}
			/>

			<Route
				exact
				path="/profile/edit"
				render={() =>
					withContainer({
						component: ProfileForm,
						isLazy: true,
						hasNav: true,
						withAuth: true,
						isAuthenticated,
					})
				}
			/>

			<Route
				exact
				path="/profile/addfriend"
				render={() =>
					withContainer({
						component: AddFriend,
						isLazy: true,
						hasNav: true,
						withAuth: true,
						isAuthenticated,
					})
				}
			/>

			<Route
				exact
				path="/addhabit"
				render={() => withContainer({ component: HabitForm, isLazy: true, hasNav: true })}
			/>

			<Route
				exact
				path="/edithabit/:id"
				render={props =>
					withContainer({ component: HabitForm, isLazy: true, hasNav: true, props })
				}
			/>

			<Route
				exact
				path="/auth/register"
				render={() => withContainer({ component: Register, isLazy: true, hasNav: true })}
			/>

			<Route
				exact
				path="/auth/login"
				render={() => withContainer({ component: Login, isLazy: true, hasNav: true })}
			/>
		</Switch>
	</HashRouter>
);

Routes.propTypes = {
	isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ auth }) => ({
	isAuthenticated: auth.isAuthenticated,
});

export default connect(mapStateToProps)(Routes);
