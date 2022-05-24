import { createStore, applyMiddleware, compose } from 'redux';
import loginApi from '../middlewares/loginApi';
import musicApi from '../middlewares/musicApi';
import userApi from '../middlewares/userApi';

import reducer from '../reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
    applyMiddleware(musicApi, loginApi, userApi),
);

const store = createStore(reducer, enhancers);

export default store;