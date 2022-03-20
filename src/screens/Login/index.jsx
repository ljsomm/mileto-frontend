import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import Switch from '../../components/Switch';
import ModalContext from '../../contexts/ModalContext';
import successIcon from '../../assets/icons/confirmation.png'
import './styles.css';

const Login = ({title}) => {

    const [ state, setState ] = useState("A");
    const navigate = useNavigate();
    const location  = useLocation();
    const { dispatch } = useContext(ModalContext);
    useEffect(() => {
        document.title = `Mileto - ${title}`;
        if(location.state && location.state.signup){
            dispatch({
                type: "OPEN", 
                modal: { 
                    kind: "ALERT", 
                    header: <h1>Sucesso</h1>, 
                    body: <><img src={successIcon} className="modal-icon" alt="Confirmação"/><p>Cadastro efetuado com sucesso</p></> , 
                    footer: <button onClick={()=>dispatch({type: "CLOSE"})} className="modal-button">Okay</button>
                }
            });
        }
    }, [title, location.state, dispatch]);


    return(
        <div className='sign'>
            <div className='sign-side to-sign-up'>
                <h3>Ainda não tem cadastro?</h3>
                <p>Torne-se parte da nossa equipe de profesores e alunos</p>                
                <button onClick={() => navigate('/cadastro')}>
                    Cadastrar
                </button>
                
            </div>
            <div className='sign-side'>
                <h2>Login</h2>
                <form className="form" action="/principal" method="get">
                    <input type="text" placeholder="E-mail" name="inp-email" id="inp-email" />
                    <input type="password" placeholder="Senha" name="inp-senha" id="inp-senha" />
                    <Switch name="login" state={state} items={[{id: "A", label: "Aluno"}, {id: "P", label: "Professor"}]} setState={setState}/>
                    <button>Entrar</button>
                </form>
            </div>
        </div>
    );
}

export default Login;