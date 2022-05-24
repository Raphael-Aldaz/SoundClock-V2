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
                case SET_USERS_LIST:
                    return{
                        ...state,
                        list: action.userList

                    }    
            default:
            return state;
        }
        
    };
    
    export default reducer;