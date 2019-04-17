import { createStore, applyMiddleware } from 'redux';
import configureStore from 'redux-mock-store';
import rootReducer from '../reducers/combineReducers';
import { middleware } from '../store/store';

export const createTestStore = initialState => {
	const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);
	return createStoreWithMiddleware(rootReducer, initialState);
};

export const createMockStore = configureStore(middleware);
