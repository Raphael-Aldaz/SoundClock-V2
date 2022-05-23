/*import ReactPlayer from 'react-player';*/
import {AiTwotoneSound, AiFillLike} from 'react-icons/ai'
import sound from './Ov Moi Omm - I Was Different.mp3'

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import './MainGrid.scss';



const Card = ({
    image,
    title,
    nbListened,
    nbLike,
    
}
) => {
   
    return(
       
            <div className='card'>

            <AudioPlayer
                src={sound}
                className='player'
                style={
                        {
                            background: `url(${image}) no-repeat`, 
                        }
                    }
             />
             <div className='card_info'>
             <h1 className='card_info-title'>{title}</h1>

             <div className='card_info-meta'>
             <span className='listen'><AiTwotoneSound className='nbListened-icon' /><p className='nbListened'>{nbListened}</p></span>
             <span className='like'><AiFillLike className='nbLike-icon'/><p className='nbLike'>{nbLike}</p></span>
             </div>

             </div>
            

            </div>
   
       

    );
}

export default Card