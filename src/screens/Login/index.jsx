import { useEffect, useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import Switch from "../../components/Switch";
import ModalContext from "../../contexts/ModalContext";
import successIcon from "../../assets/icons/confirmation.png";
import "./styles.css";
import User from "../../services/User";
import { useCookies } from "react-cookie";

const Login = ({ title }) => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const [state, setState] = useState("A");
  const navigate = useNavigate();
  const location = useLocation();
  const { dispatch } = useContext(ModalContext);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [, setCookie] = useCookies();
  const [error, setError] = useState("");

  useEffect(() => emailRef.current.focus(), []);

  useEffect(() => setCookie("screen", state), [state, setCookie]);

  useEffect(() => {
    document.title = `Mileto - ${title}`;
    if (location.state && location.state.signup) {
      dispatch({
        type: "OPEN",
        modal: {
          kind: "ALERT",
          Header: () => <h1>Sucesso</h1>,
          Body: () => (
            <>
              <img src={successIcon} className="modal-icon" alt="Confirmação" />
              <p>Cadastro efetuado com sucesso</p>
            </>
          ),
          Footer: () => (
            <button
              onClick={() => dispatch({ type: "CLOSE" })}
              className="modal-button"
            >
              Okay
            </button>
          ),
        },
      });
    }
  }, [title, location.state, dispatch]);

  async function handleLoginSubmit(event) {
    event.preventDefault();
    if (user.email !== "" && user.password !== "") {
      if (user.email.includes("@")) {
        const login = await User.login(user);
        if (!login.err && login.token) {
          setCookie("__token", login.token);
        } else {
          setError(login.err);
        }
      } else {
        setError("Insira um endereço de E-mail válido");
      }
    } else {
      setError("Preencha a todos os campos corretamente!");
      emailRef.current.style = user.email.length
        ? null
        : "border-bottom-color: red;";
      passwordRef.current.style = user.password.length
        ? null
        : "border-bottom-color: red";
    }
  }

  return (
    <div className="sign">
      <div className="sign-side to-sign-up">
        <h3>Ainda não tem cadastro?</h3>
        <p>Torne-se parte da nossa equipe de profesores e alunos</p>
        <button onClick={() => navigate("/cadastro")}>Cadastrar</button>
      </div>
      <div className="sign-side">
        <div>
          <h2 className="sign-title">Login</h2>
          <form className="form" onSubmit={handleLoginSubmit}>
            <input
              type="text"
              ref={emailRef}
              placeholder="E-mail"
              name="inp-email"
              value={user.email}
              onChange={(e) => {
                emailRef.current.style = e.target.value.length
                  ? null
                  : "border-bottom-color: red;";
                setUser({ ...user, email: e.target.value });
              }}
              id="inp-email"
            />
            <input
              type="password"
              ref={passwordRef}
              placeholder="Senha"
              name="inp-senha"
              value={user.password}
              onChange={(e) => {
                passwordRef.current.style = e.target.value.length
                  ? null
                  : "border-bottom-color: red;";
                setUser({ ...user, password: e.target.value });
              }}
              id="inp-senha"
            />
            <Switch
              name="login"
              state={state}
              items={[
                { id: "A", label: "Aluno" },
                { id: "P", label: "Professor" },
              ]}
              setState={setState}
            />
            <span className="error">{error}</span>
            <button>Entrar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
