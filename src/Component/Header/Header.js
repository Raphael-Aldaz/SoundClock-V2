import './Header.scss';
import { toggleSettings } from '../../actions/index';
import { useDispatch, useSelector } from 'react-redux';
import ModalConnect from './ModalConnect';
import { login, setUserField } from '../../actions/user';




const Header = () => {
    const email= useSelector((state)=>state.users.email)
    const password= useSelector((state)=>state.users.password)
    const changeField = (name, value) => {
        dispatch(setUserField(name,value))
    }
    const dispatch = useDispatch();
    const open = useSelector((state)=>state.users.open)
    const handleclick = () => {
        dispatch(toggleSettings());
        console.log(open)
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
                <ModalConnect
                    changeField={changeField}
                    email={email}
                    password={password}
                    handleLogin={handleLogin}
                 />
                <button onClick={handleclick}>Connexion</button>
                
            </div>
        </div>
        </div>
        
    );
}

export default Header