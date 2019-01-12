import React from 'react';

import { Redirect } from 'react-router-dom';

const withContainer = (Component, isAuthenticated) =>
	isAuthenticated ? (
		<Component />
	) : (
		<Redirect
			to={{
				pathname: 'auth/login',
			}}
		/>
	);

export default withContainer;
