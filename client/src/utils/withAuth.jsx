import React from 'react';

import { Redirect } from 'react-router-dom';

const withAuth = (Component, isAuthenticated) =>
	isAuthenticated ? (
		<Component />
	) : (
		<Redirect
			to={{
				pathname: 'auth/login',
			}}
		/>
	);

export default withAuth;
