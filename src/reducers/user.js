import { TOGGLE_SETTINGS } from "../actions";

export const initialState = {
    open: false,
    };
    
    const reducer = (state = initialState, action = {}) => {
        switch (action.type) {
            case TOGGLE_SETTINGS:
                return{
                    ...state,
                    open: !state.open,
                }
            
            default:
            return state;
        }
        
    };
    
    export default reducer;