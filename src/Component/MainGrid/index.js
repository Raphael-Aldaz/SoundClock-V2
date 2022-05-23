import { useSelector } from 'react-redux';
import sound from './Ov Moi Omm - I Was Different.mp3';
import Card from './Card';
import './MainGrid.scss';

const MainGrid = () => {
    const musics = useSelector((state) => state.musics.lists)
    return(
        <section className="mainGrid">
        
        <h1>Top 10 musics</h1>
        
        <div className='mainGrid_topMusic'>
        {
            musics.map((music) => (
                <Card 
                
                    key={music.id}
                    image={music.picture}
                    music={sound}
                    title={music.title}
                    nbListened={music.nb_listened}
                    nbLike={music.nb_like}
                    
                />
            ))
        }
            
            
            
        </div>
            

        
        <div className='mainGrid_artiste'>
           

        </div>
        </section>
    );
}

export default MainGrid