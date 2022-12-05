import styles from "./styles.module.scss";
import Logo from "../../assets/images/logo-branca.png";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import UserContext from '../../contexts/UserContext';
import { useEffect } from "react";
import User from "../../services/User";

const LateralHeader = () => {
  const [{__token}, , removeCookies] = useCookies();
  const { dispatch } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    User.get(__token, dispatch, true);
  }, []);

  return (
    <header className={styles.menu}>
      <img src={Logo} alt="logo" className="header-logo" />
      <nav>
        <ul>
          <li onClick={() => navigate("/dashboard")}>Geral</li>
          <li onClick={() => navigate("/cursos-do-professor")}>Cursos</li>
          <li onClick={() => navigate("/configuracoes")}>Configuracoes</li>
          <li
            className={styles.exit}
            onClick={() => {
              removeCookies("__token");
              removeCookies("screen");
            }}
          >
            Sair
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default LateralHeader;
