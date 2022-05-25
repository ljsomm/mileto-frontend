import './styles.css';
import Logo from '../../assets/images/logo-branca.png'
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useContext, useRef, useState } from 'react';
import ModalContext from '../../contexts/ModalContext';
import RatingStars from '../RatingStars';

const Footer = () => {
    const { dispatch } = useContext(ModalContext);
    const { pathname } = useLocation();

    return(
        <footer style={function(){if(pathname === '/cadastro' || pathname === '/login'){ return { display: 'none' }; }}()}>
            <ol>
            <Link to = "/userterms"> <li> Termos de uso </li> </Link>

            <li onClick={()=>dispatch({
                    type: "OPEN",
                    modal: {
                        kind: "FORM",
                        closeButton: true,
                        Header: () => <h1>Denunciar Abuso</h1>,
                        Body: () =>{
                            return(
                            <form>
                                <select name="abuseType" id="abuse">
                                    <option value="" defaultChecked disabled selected> Selecione a Violação </option>
                                    <option value="racism"> Racismo </option>
                                    <option value="sexism"> Sexism </option>
                                    <option value="homofobie"> Homofobia </option>
                                    <option value="negativeAtitude"> Atitude Negativa </option>
                                </select>
                                <label>Comentário</label>
                                <textarea name="inp-coment" id="inp-coment" cols="30" rows="10"></textarea>
                                <button>Enviar</button>
                            </form>
                            );
                        },
                    }
                })}>Denunciar abuso</li>
                
                <li onClick={()=>dispatch({
                    type: "OPEN",
                    modal: {
                        kind: "FORM",
                        closeButton: true,
                        Header: () => <h1>Avalie a plataforma</h1>,
                        Body: () =>{
                            const [rating, setRating] = useState({ stars: 0, coment: '' });
                            return(
                            <form  onSubmit={e=>{e.preventDefault(); alert(`Estrelas: ${rating.stars} || Comentário: ${rating.coment}`)}}>
                                <label>Avaliação</label>
                                <RatingStars state={rating} setState={setRating}/>
                                <label>Comentário</label>
                                <textarea value={rating.coment} onChange={e=>setRating({...rating, coment: e.target.value })} name="inp-coment" id="inp-coment" cols="30" rows="10"></textarea>
                                <button>Enviar</button>
                            </form>
                            );
                        },
                    }
                })}>Avaliar Plataforma</li>
            </ol>
            <small>Todos os direitos reservados.</small>
            <div>
                <img src={Logo} alt="Logo do rodapé" />
            </div>
        </footer>
    );
}

export default Footer;  