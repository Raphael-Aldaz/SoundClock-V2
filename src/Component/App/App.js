import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getMusicsList } from '../../actions/music';
import Header from '../Header/Header';
import Landing from '../Landing/Landing';
import MainGrid from '../MainGrid';


import './App.scss';

const App = () => {

  const dispatch = useDispatch();
  /* const handleclick = () => {
    dispatch(getMusicsList());
  } */
  useEffect(
    () => {
      dispatch(getMusicsList());
    }, []
  )

 
  return (
    <div className="App">
      <Header />
      
      <Landing/>
      <button>Clique moi salope </button>
      <MainGrid />
    </div>
  );
}

export default App;
