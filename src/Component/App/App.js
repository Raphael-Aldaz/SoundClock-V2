import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getMusicsList } from '../../actions/music';
import { getUsersList, isLoged } from '../../actions/user';
import Header from '../Header/Header';
import Landing from '../Landing/Landing';
import MainGrid from '../MainGrid';
import Footer from '../Footer/Footer';


import './App.scss';

const App = () => {

  const dispatch = useDispatch();

  useEffect(
    () => {
      const loggedUser = localStorage.getItem("userToken");
      dispatch(getMusicsList());
      dispatch(getUsersList());

       if(loggedUser){
        dispatch(isLoged());
      } 
    }, []
  )

 
  return (
    <div className="App">
      <Header />
      <Landing/>
      <MainGrid />
      <Footer />
    </div>
  );
}

export default App;
