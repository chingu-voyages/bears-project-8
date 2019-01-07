import React from 'react';
import ReactDOM from 'react-dom';

import GlobalStyle from './globalStyle.styled';
import Routes from './Routes';
import * as serviceWorker from './serviceWorker';

const Root = () => (
	<div>
		<GlobalStyle />
		<Routes />
	</div>
);

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
