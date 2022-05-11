import { PLAYING_MUSICS } from "../actions";

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
        default:
        return state;
    }
    
};

export default reducer;