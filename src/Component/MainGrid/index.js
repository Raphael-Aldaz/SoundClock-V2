import { useSelector } from 'react-redux';
import sound from './Ov Moi Omm - I Was Different.mp3';

import CardMusic from './CardMusic';
import CardUser from './CardUser';

import './MainGrid.scss';

const MainGrid = () => {
    const musics = useSelector((state) => state.musics.lists);
    const users = useSelector((state) => state.users.list);

    return(

        <div className="mainGrid">
        
        <section className='topMusic'>
            <h1 className='topMusic_title'>Top 10 musics</h1>
            <div className='mainGrid_topMusic'>
            
            {
                musics.map((music) => (
                    <CardMusic 
                    
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
        </section>

        <section className='topUser'>
            <h1 className='topUser_title'>Top Users</h1>
            <div className='mainGrid_topUser'>
            {
                users.map((user) => (
                    <CardUser
                        key={user.id}
                        title={user.title}
                        picture={user.picture}
                        description={user.description}
                        name={user.name}
                        email={user.email}
                    />
                ))
            }
            </div>
        </section>
        
           

        </div>
        
    );
}

export default MainGrid