import axios from "axios";
import { GET_USERS_LIST, setUsersList } from "../actions/user";

const userApi = (store) => (next) => (action) =>{


    switch(action.type) {
        
        case GET_USERS_LIST: 
            axios.get('http://raphael-aldaz-server.eddi.cloud/projet-9-sound-clock-back/public/api/users/rand')
            .then((response)=>{
                
                store.dispatch(setUsersList(response.data));
            })
            .catch((error) => {
                console.log(error, 'erreur api');
            });
            break;
        
        
    default:
    next(action);   

    }
};

export default userApi;