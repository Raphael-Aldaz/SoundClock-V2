import ReactPlayer from 'react-player';
import './MainGrid.scss';
import sound from './honey-im-home-giulio-fazio-main-version-02-37-3206.mp3';
import image from './téléchargement.jpeg'
import { useDispatch, useSelector } from 'react-redux';
import { playingMusics } from '../../actions';

const Card = () => {
    const dispatch = useDispatch()
    const play = useSelector((state)=> state.musics.play)
 
    const style = {
        background: `url(${image}) no-repeat`, 
    }


    const handlePlay = () => {
       dispatch(playingMusics());
    }
    const handlePause = () => {
        dispatch(playingMusics());
    }
    
    return(
        <div className='card_container'>
            <div className='card'>
            <ReactPlayer
            className='player'
                style={{
        background: `url(${image}) no-repeat`, 
    }
                }
                url={sound}
                playing={play}
            />

                <button onClick={handlePlay}>Play</button>
                <button onClick={handlePause}>Pause</button>
            </div>
        </div>
       

    );
}

export default Card