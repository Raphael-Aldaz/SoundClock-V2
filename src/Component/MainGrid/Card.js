/*import ReactPlayer from 'react-player';*/
import {AiTwotoneSound, AiFillLike} from 'react-icons/ai'
import sound from './honey-im-home-giulio-fazio-main-version-02-37-3206.mp3';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import './MainGrid.scss';


const Card = ({
    image,
    description,
    title,
    nbListened,
    nbLike
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
             <p className='card_info-description' >{description}</p>
             <p><AiTwotoneSound/>{nbListened}</p>
             <p><AiFillLike/>{nbLike}</p>

             </div>
            

            </div>
   
       

    );
}

export default Card