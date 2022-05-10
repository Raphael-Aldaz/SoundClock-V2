import {  combineReducers } from 'redux';

import musicReducer from './music';


const rootReducer = combineReducers({
    musics: musicReducer,
});

export default rootReducer;