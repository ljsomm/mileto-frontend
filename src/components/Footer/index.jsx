import "./styles.css";
import Logo from "../../assets/images/logo-branca.png";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useContext, useRef, useState } from "react";
import ModalContext from "../../contexts/ModalContext";
import RatingStars from "../RatingStars";

const Footer = () => {
  const { dispatch } = useContext(ModalContext);
  const { pathname } = useLocation();

  return (
    <footer
      style={(function () {
        if (pathname === "/cadastro" || pathname === "/login") {
          return { display: "none" };
        }
      })()}
    >
      <ol>
        <Link to="/termos-de-uso">
          {" "}
          <li> Termos de uso </li>{" "}
        </Link>
        <li>Denunciar abuso</li>
        <li
          onClick={() =>
            dispatch({
              type: "OPEN",
              modal: {
                kind: "FORM",
                closeButton: true,
                Header: () => <h1>Avalie a plataforma</h1>,
                Body: () => {
                  const [rating, setRating] = useState({
                    stars: 0,
                    coment: "",
                  });
                  return (
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        alert(
                          `Estrelas: ${rating.stars} || Comentário: ${rating.coment}`
                        );
                      }}
                    >
                      <label>Avaliação</label>
                      <RatingStars state={rating} setState={setRating} />
                      <label>Comentário</label>
                      <textarea
                        value={rating.coment}
                        onChange={(e) =>
                          setRating({ ...rating, coment: e.target.value })
                        }
                        name="inp-coment"
                        id="inp-coment"
                        cols="30"
                        rows="10"
                      ></textarea>
                      <button>Enviar</button>
                    </form>
                  );
                },
              },
            })
          }
        >
          Avaliar Plataforma
        </li>
      </ol>
      <small>Todos os direitos reservados.</small>
      <div>
        <img src={Logo} alt="Logo do rodapé" />
      </div>
    </footer>
  );
};

export default Footer;
