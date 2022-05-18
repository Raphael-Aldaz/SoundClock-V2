import axios from "axios";
import { GET_MUSICS_LIST, setMusicsList } from "../actions/music";

const musicApi = (store) => (next) => (action) =>{


    switch(action.type) {
        
        case GET_MUSICS_LIST: 
            axios.get('http://raphael-aldaz-server.eddi.cloud/projet-9-sound-clock-back/public/api/musics/top10/like')
            .then((response)=>{
                
                store.dispatch(setMusicsList(response.data));
            })
            .catch((error) => {
                console.log(error, 'erreur api');
            });
            break;
        
        
    default:
    next(action);   

    }
};

export default musicApi;