import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import GlobalStyle from './globalStyle.styled';
import Routes from './Routes';
import store from './store/store';
import * as serviceWorker from './serviceWorker';

const Root = () => (
	<Provider store={store}>
		<GlobalStyle />
		<Routes />
	</Provider>
);

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
