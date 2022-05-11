import './Header.scss';
import { toggleSettings } from '../../actions/index';
import { useDispatch, useSelector } from 'react-redux';




const Header = () => {
    const dispatch = useDispatch();
    const open = useSelector((state)=>state.users.open)
    const handleclick = () => {
        dispatch(toggleSettings());
        console.log(open)
    }
    return(
        <div className='header'>
        <div className='navbar-container'>
            <form className='search-bar'>
                <input type='text' placeholder='Recherche...' className='search-input' />
            </form>
            <div className='modale-groupe'>
                <button>Création de compte</button>
                <button onClick={handleclick}>Connexion</button>
                
            </div>
        </div>
        </div>
        
    );
}

export default Header