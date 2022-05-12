import Card from './Card';
import './MainGrid.scss';

const MainGrid = () => {
    return(
        <section className="mainGrid">
        
        <h1>Top 10 musics</h1>
        
        <div className='mainGrid_topMusic'>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            
        </div>
            

        
        <div className='mainGrid_artiste'>
           

        </div>
        </section>
    );
}

export default MainGrid