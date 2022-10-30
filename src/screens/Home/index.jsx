import { useEffect } from "react";
import quotes from "../../components/Quotes";
import { useState } from "react";
import "./styles.css";
import imagem1 from '../../assets/images/Integrantes.jpg';
import imagem2 from '../../assets/images/videofakemileto.jpg';

const Home = ({ title }) => {
  const [quote] = useState(quotes[Math.floor(Math.random() * quotes.length)]);

  useEffect(() => {
    document.title = `Mileto - ${title}`;
  }, [title]);

  return (
    <>
      <div className="home">
        <h1 onLoad={useState}> "{quote.quote}" </h1>
        <p>- {quote.author}</p>
      </div>
      <div className="home">
        <div className="home-content-left">
          <div className="home-content-text">
            <h1>Quem somos nós?</h1>
            <p>
              Somos um grupo de estudantes da instituição de ensino FATEC - Rubens Lara que nos juntamos pelo amor a tecnologia e a vontade de fazer algo diferente e levar a educação ao maior número possível de pessoas e dessa forma inspira-los a atingir seus sonhos e objetivos.
            </p>
          </div>
          <div className="home-content-video">
            <img src={imagem1} />
          </div>
        </div>
      </div>
      <div className="home">
        <div className="home-content-right">
          <div className="home-content-video">
            <img src={imagem2} />
          </div>

          <div className="home-content-text">
            <h1>Sobre a Plataforma</h1>
            <p>
              O projeto Mileto surgiu a vontade de um grupo de fazer algo diferente e acessível para todos. Com o intuito de estimular as pessoas a se profissionalizarem indendente de sua raça, gênero, orientação sexual ou religião.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
