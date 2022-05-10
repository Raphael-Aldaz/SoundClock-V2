import './Header.scss';


function Header(){
    return(
        <div className='header'>
        <div className='navbar-container'>
            <form className='search-bar'>
                <input type='text' placeholder='Recherche...' className='search-input' />
            </form>
            <div className='modale-groupe'>
                <button>Création de compte</button>
                <button>Connexion</button>
            </div>
        </div>
        </div>
        
    );
}

export default Header