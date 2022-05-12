/*import ReactPlayer from 'react-player';*/

import sound from './honey-im-home-giulio-fazio-main-version-02-37-3206.mp3';
import image from './téléchargement.jpeg'
import { useDispatch, useSelector } from 'react-redux';
import { playingMusics } from '../../actions';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import './MainGrid.scss';


const Card = ({
    image
}
) => {
    const dispatch = useDispatch()
    
    const play = useSelector((state)=> state.musics.play)
 
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

{/*                 <ReactPlayer
                    className='player'
                    style={
                        {
                            background: `url(${image}) no-repeat`, 
                        }
                    }
                    url={sound}
                    playing={play}
                    controls
                    
                />  */}
                {/* <button className='button_control' onClick={handlePlay}>Play</button> */}
            </div>
   
       

    );
}

export default Card