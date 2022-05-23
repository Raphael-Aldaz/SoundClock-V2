import { LOGGOUT, SET_USER_FIELD, IS_LOGED } from "../actions/user";

export const initialState = {
    open: false,
    username:'',
    password:'',
    logged: false,
    };
    
    const reducer = (state = initialState, action = {}) => {
        switch (action.type) {

            case SET_USER_FIELD:
                return{
                    ...state,
                    [action.name]:action.value
                }
                case IS_LOGED:
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