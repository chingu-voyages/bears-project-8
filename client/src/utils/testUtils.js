import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/combineReducers';
import { middleware } from '../store/store';

export const createTestStore = initialState => {
	const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);
	return createStoreWithMiddleware(rootReducer, initialState);
};
