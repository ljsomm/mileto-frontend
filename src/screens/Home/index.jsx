import { useEffect } from 'react';
import './styles.css'

const Home = ({ title }) => {


    useEffect(() => {
        document.title = `Mileto - ${title}`;
    }, [title]);

    return(

        <>
            <div className='home'>
                <h1>"O aprendizado é infinito, nunca pare de apreender"</h1>
                <p>- Texto futuramente gerado automaticamente</p>
            </div>
            <div className='home'>
                <h1>Home exists</h1>
            </div>
            <div className='home'>
                <h1>Home exists</h1>
            </div>
        </>
        
    );
}

export default Home;