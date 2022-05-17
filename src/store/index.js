import { createStore, applyMiddleware, compose } from 'redux';
import loginApi from '../middlewares/loginApi';
import musicApi from '../middlewares/musicApi';

import reducer from '../reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
    applyMiddleware(musicApi, loginApi),
);

const store = createStore(reducer, enhancers);

export default store;