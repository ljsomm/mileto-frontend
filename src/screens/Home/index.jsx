import { useEffect } from 'react';
import './styles.css';

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
                <div className="home-content-left">
                    <div className="home-content-text">
                        <h1>Quem somos nós?</h1>
                        <p>Um breve texto apresentando os integrantes com o video ao lado</p>
                    </div>
                    <div className="home-content-video"></div>
                </div>
                
            </div>
            <div className='home'>
            <div className="home-content-right">

            <div className="home-content-video"></div>

                    <div className="home-content-text">
                        <h1>Sobre a Plataforma</h1>
                        <p>O projeto Mileto surgiu a vontade de um grupo de fazer algo diferente e 
                        acessível para todos. Com o intuito de estimular as pessoas a se profissionalizarem
                        indendente de sua raça, gênero, orientação sexual ou religião.</p>
                    </div>
                </div>
            </div>
        </>
        
    );
}

export default Home;