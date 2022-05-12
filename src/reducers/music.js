import { PLAYING_MUSICS } from "../actions";
import { SET_MUSICS_LIST } from "../actions/music";

export const initialState = {
lists: [],
play: false,
};

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case PLAYING_MUSICS:
            return {
                ...state,
                play: !state.play
            }
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