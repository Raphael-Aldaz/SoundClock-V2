import {  combineReducers } from 'redux';

import musicReducer from './music';
import userReducer from './user';


const rootReducer = combineReducers({
    musics: musicReducer,
    users: userReducer,
});

export default rootReducer;