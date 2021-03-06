import axios from "axios";
import { isLoged, LOGIN } from "../actions/user";

const loginApi = (store) => (next) => (action) =>{


    switch(action.type) {
        
        case LOGIN:{
            const { users: { username, password } } = store.getState();
        axios.post('http://raphael-aldaz-server.eddi.cloud/projet-9-sound-clock-back/public/api/login_check',{
            username,
            password
        })
        .then(
            (response) => {
                localStorage.setItem('userToken', response.data.token);
                store.dispatch(isLoged());
                
            },
        )
        .catch(
            (error) => console.log('Login error :', error),
        );
        }
        break;
            
    default:
    next(action);   

    }
};

export default loginApi;