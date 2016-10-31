import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import { user, posts } from '../reducers';

const { NODE_ENV } = process.env;
const common = [];
const middleware = NODE_ENV === 'production' ? [...common] : [...common, logger()];
const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);

export default createStoreWithMiddleware(combineReducers({
    user,
    posts,
}));
