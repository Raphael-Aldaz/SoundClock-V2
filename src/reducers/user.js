import { TOGGLE_SETTINGS } from "../actions";
import { SET_USER_FIELD } from "../actions/user";

export const initialState = {
    open: false,
    username:'',
    password:''
    };
    
    const reducer = (state = initialState, action = {}) => {
        switch (action.type) {
            case TOGGLE_SETTINGS:
                return{
                    ...state,
                    open: !state.open,
                }
            case SET_USER_FIELD:
                return{
                    ...state,
                    [action.name]:action.value
                }
            
            default:
            return state;
        }
        
    };
    
    export default reducer;