import { TOGGLE_SETTINGS } from "../actions";
import { LOGED, LOGGOUT, SET_USER_FIELD } from "../actions/user";

export const initialState = {
    open: false,
    username:'',
    password:'',
    logged: false,
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
                case LOGED:
                    return{
                        ...state,
                        logged: true
                    }
                case LOGGOUT:
                    localStorage.removeItem('userToken'); 
                    return{
                        ...state,
                        logged:false
                    }
            default:
            return state;
        }
        
    };
    
    export default reducer;