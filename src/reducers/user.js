
import { TOGGLE_LOGIN } from "../actions";
import { LOGGOUT, SET_USER_FIELD, IS_LOGED, SET_USERS_LIST } from "../actions/user";

export const initialState = {
    open: false,
    username:'',
    password:'',
    logged: false,
    list: []
    };
    
    const reducer = (state = initialState, action = {}) => {
       
        switch (action.type) {

            case SET_USER_FIELD:
                return{
                    ...state,
                    
                    username: action.email,
                    password: action.password
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
                case SET_USERS_LIST:
                    return{
                        ...state,
                        list: action.userList

                    } 
                case TOGGLE_LOGIN:
                    return{
                        ...state,
                        open: !state.open
                    }      
            default:
            return state;
        }
        
    };
    
    export default reducer;