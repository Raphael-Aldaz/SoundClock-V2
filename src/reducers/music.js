
import { SET_MUSICS_LIST } from "../actions/music";

export const initialState = {
lists: [],
};

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case SET_MUSICS_LIST:
            return {
                ...state,
                lists: action.musicList
            };
        default:
        return state;
    }
    
};

export default reducer;