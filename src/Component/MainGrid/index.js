import { useSelector } from 'react-redux';
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
                    khey={music.id}
                    image={music.picture}
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