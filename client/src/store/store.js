import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import rootReducer from '../reducers/combineReducers';

const initialState = {};
export const middleware = [ReduxThunk];

// https://github.com/zalmoxisus/redux-devtools-extension#12-advanced-store-setup
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
	rootReducer,
	initialState,
	composeEnhancers(applyMiddleware(...middleware))
);

export default store;
