import axios from "axios";
import { LOGIN } from "../actions/user";

const loginApi = (store) => (next) => (action) =>{


    switch(action.type) {
        
        case LOGIN:{
            const { users: { username, password } } = store.getState();
        axios.post('login/check_api',{
            username,
            password
        })
        .then((response)=> 
        console.log(response))
        .catch((error) =>
        console.log(error) )
        }
        break;
            
    default:
    next(action);   

    }
};

export default loginApi;