import Header from '../Header/Header';
import Landing from '../Landing/Landing';
import MainGrid from '../MainGrid';


import './App.scss';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Landing/>
      <MainGrid />
    </div>
  );
}

export default App;
