import './Header.scss';

import { useDispatch, useSelector } from 'react-redux';
import ModalConnect from './ModalConnect';
import { loggOut, login, setUserField } from '../../actions/user';
import ModalCreate from './ModalCreate';




const Header = () => {
    const email= useSelector((state)=>state.users.email)
    const password= useSelector((state)=>state.users.password)
    const logged = useSelector((state)=>state.users.logged)

    const changeField = (name, value) => {
        dispatch(setUserField(name,value))
    }
    const dispatch = useDispatch();
    
    const handleclick = () => {
        dispatch(loggOut());
        window.location.reload();

    }
    const handleLogin =() =>{
        dispatch(login());
        
    }
    return(
        <div className='header'>
        <div className='navbar-container'>
            <form className='search-bar'>
                <input type='text' placeholder='Recherche...' className='search-input' />
            </form>
            <div className='modale-groupe'>
            {(!logged) &&
            <>
                <ModalConnect
                    changeField={changeField}
                    email={email}
                    password={password}
                    handleLogin={handleLogin}
                 />
                <ModalCreate/>
            </>

            }
            {(logged) &&
                <>
                    <button>Acceder a votre compte</button>
                    <button onClick={handleclick}>Déconnexion</button>
                </>
            }
               
                
            </div>
        </div>


        </div>
        
    );
}

export default Header