import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import Steps from "../../components/Steps";
import User from "../../services/User";
import ModalContext from '../../contexts/ModalContext';

import './styles.css'

const SignUp = ({ title }) => {

    const { dispatch } = useContext(ModalContext);

    const navigate = useNavigate();

    const nameRef = useRef();
    const lastnameRef = useRef();
    const birthDateRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmationRef = useRef();
    const abbreviationRef = useRef();
    const customRef = useRef();
    const treatmentRef = useRef();

    const [ signUpButton, setSignUpButton ] = useState("Continuar");
    const [ error, setError ] = useState(null);
    const [ step, setStep ] = useState(1);
    const [ user, setUser ] = useState(
        {
            name: '',
            lastname: '',
            birthDate: '',
            email: '',
            password: '',
            passwordConfirmation: '',
            abbreviation: '',
            customName: '',
            treatment: '',
            'user-photo': ''
        }
    );

    useEffect(() => {
        document.title = `Mileto - ${title}`;
    }, [title]);
    return(
        <div className='sign'>
            <div className='sign-side to-login'>
                <Steps step={step} quantity={3}/>
                <h3>Já tem cadastro?</h3>              
                <button onClick={() => navigate('/login')}>
                    Entrar 
                </button>
            </div>
            <div className='sign-side'>
                <h2>Cadastro</h2>
                <form className="form" action="/principal" method="get" onSubmit={async (e)=>{
                    e.preventDefault();
                    switch(step){
                        case 1:
                            if(user.name !== '' && user.lastname !== '' && user.birthDate !== ''){
                                const birthDate = user.birthDate.split("-");
                                const actualDate = new Date();
                                let age = actualDate.getFullYear() - parseInt(birthDate[0]);
                                if(parseInt(birthDate[1]) > actualDate.getMonth() + 1 || (parseInt(birthDate[1]) === actualDate.getMonth() + 1 && parseInt(birthDate[2]) > actualDate.getDate())){
                                    age--; 
                                } 
                                if(age < 14){
                                    birthDateRef.current.style = "border-bottom-color: red;";
                                    setError("Idade mínima: 14 anos!");
                                }
                                else if(age > 120){
                                    birthDateRef.current.style = "border-bottom-color: red;";
                                    setError("Insira uma Data de Nascimento válida!");
                                }
                                else{
                                    setUser({ ...user, name: `${user.name} ${user.lastname}` });
                                    setStep(step + 1);
                                    setError(null);
                                }
                            } 
                            else{
                                user.name === '' ? nameRef.current.style = "border-bottom-color: red; color: red;" : nameRef.current.style = null;
                                user.lastname === '' ? lastnameRef.current.style = "border-bottom-color: red; color: red;" : lastnameRef.current.style = null;
                                user.birthDate === '' ? birthDateRef.current.style = "border-bottom-color: red; color: red;" : birthDateRef.current.style = null;
                                setError("Preencha a todos os campos corretamente!");
                            }
                            break;
                        case 2:
                            if(user.email !== '' && user.password !== '' && user.passwordConfirmation !== ''){
                                if(user.email.includes("@")){
                                    if(user.password === user.passwordConfirmation){
                                        setStep(step + 1);
                                        setError(null);
                                        setSignUpButton("Cadastrar");
                                    }
                                    else{
                                        passwordRef.current.style = "border-bottom-color: red;";
                                        passwordConfirmationRef.current.style = "border-bottom-color: red;";
                                        setError("As senhas não correspondem!");
                                    }
                                }
                                else{
                                    emailRef.current.style = "border-bottom-color: red;";
                                    setError("Digite um endereço de e-mail válido!");
                                }
                            } 
                            else{
                                user.email === '' ? emailRef.current.style = "border-bottom-color: red" :  emailRef.current.style = null;
                                user.password === '' ? passwordRef.current.style = "border-bottom-color: red" :  passwordRef.current.style = null;
                                user.passwordConfirmation === '' ? passwordConfirmationRef.current.style = "border-bottom-color: red" :  passwordConfirmationRef.current.style = null;
                                setError("Preencha a todos os campos corretamente!");
                            }
                            break;
                        case 3:
                            if(user.abbreviation !== ""){
                                abbreviationRef.current.style = null;
                                setError(null);
                                if(user.abbreviation === "O"){
                                    if(user.treatment !== "" && user.custom !== ""){
                                        const cadastro = await User.cadastro(user);
                                        if(cadastro && !cadastro.err){
                                            navigate("/login", { state: { signup: true } });
                                        }
                                        else{
                                            dispatch({ type: "OPEN", modal: { header: <h1>Erro</h1>, body: <h3>Erro ao cadastrar!</h3>, footer: <button onClick={()=>dispatch({type: "CLOSE"})}>Tentar novamente</button> } });
                                        } 
                                    }
                                    else{
                                        customRef.current.style = user.custom === '' ? "border-bottom-color: red" : null;  
                                        treatmentRef.current.style = user.treatment === '' ? "border-bottom-color: red" : null;  
                                        setError("Preencha a todos os campos corretamente!");
                                    }
                                }
                                else{
                                    const cadastro = await User.cadastro(user);
                                    if(cadastro && !cadastro.err){
                                        navigate("/login", { state: { signup: true } });
                                    }
                                    else{
                                        dispatch({ type: "OPEN", modal: { header: <h1>Erro</h1>, body: <h3>Erro ao cadastrar!</h3>, footer: <button onClick={()=>dispatch({type: "CLOSE"})}>Tentar novamente</button> } });
                                    } 
                                }
                            }
                            else{
                                abbreviationRef.current.style = "border-bottom-color: red";
                                setError("Preencha ao campo gênero corretamente!");
                            }
                            break;
                        default:
                            break;
                    }
                }}>
                    {(()=>{
                        switch(step){
                            case 1:
                                return(
                                    <>
                                        <input ref={nameRef} type="text" value={user.name} placeholder="Nome" name="inp-nome"  id="inp-nome" onChange={e=>{
                                            if(!e.target.value.length){ 
                                                e.target.style = "border-bottom-color: red; color: red;";
                                            }
                                            else{
                                                e.target.style = null;
                                            }
                                            setUser({...user, name: e.target.value});
                                        }} />
                                        <input ref={lastnameRef} type="text" value={user.lastname} placeholder="Sobrenome" name="inp-sobrenome" id="inp-sobrenome"  onChange={e=>{
                                            if(!e.target.value.length){ 
                                                e.target.style = "border-bottom-color: red; color: red;";
                                            }
                                            else{
                                                e.target.style = null;
                                            }    
                                            setUser({...user, lastname: e.target.value})
                                        }} />
                                        <input type="text" placeholder="Data de Nascimento" ref={birthDateRef} value={user.birthDate} onFocus={e=>e.target.type = "date"} onChange={ e => {
                                            if(e.target.value === ''){
                                                e.target.style = "border-bottom-color: red; color: red;";
                                            }
                                            else{
                                                e.target.style = null;
                                            }
                                            setUser({...user, birthDate: e.target.value});
                                        }}/>
                                    </>
                                )
                            case 2:
                                return(
                                    <>
                                        <input ref={emailRef} type="text" placeholder="Cadastre seu E-mail" name="inp-email" id="inp-email" value={user.email} onChange={e=>{
                                            if(!e.target.value){
                                                e.target.style = "border-bottom-color: red; color: red;";
                                            }
                                            else{
                                                e.target.style = null;
                                            }
                                            setUser({...user, email: e.target.value})
                                        }} />
                                        <input ref={passwordRef} type="password" value={user.password} placeholder="Crie uma Senha" name="inp-senha" id="inp-senha" onChange={e=>{
                                            e.target.style = e.target.value === '' ? "border-bottom-color: red; color: red;" : null;
                                            setUser({...user, password: e.target.value});
                                        }}/>
                                        <input ref={passwordConfirmationRef} type="password" value={user.passwordConfirmation} placeholder="Confirme sua Senha" name="inp-confirmacao-senha" id="inp-confirmacao-senha" onChange={e=>{
                                            e.target.style = e.target.value === '' ?  "border-bottom-color: red" : null;
                                            setUser({...user, passwordConfirmation: e.target.value});
                                        }}/>
                                    </>
                                )
                            case 3:
                                return(
                                    <>
                                        <select ref={abbreviationRef} name="sel-genero" id="sel-genero" value={user.abbreviation} onChange={e=>{
                                            setUser({...user, abbreviation: e.target.value});
                                        }}>
                                            <option value="" defaultChecked disabled>Gênero</option>    
                                            <option value="M">Masculino</option>    
                                            <option value="F">Feminino</option>    
                                            <option value="N">Prefiro não dizer</option>    
                                            <option value="O">Outro</option>    
                                        </select>
                                        {
                                            (()=>{
                                                if(user.abbreviation === "O"){
                                                    return(
                                                        <>
                                                            <input  ref={customRef} type="text" placeholder="Insira seu gênero" name="inp-custom" id="inp-custom" value={user.custom} onChange={e=>{
                                                                e.target.style = e.target.value === '' ?  "border-bottom-color: red" : null;
                                                                setUser({...user, customName: e.target.value})
                                                            }} />
                                                            <select ref={treatmentRef} name="sel-treatment" id="sel-treatment" value={user.treatment} onChange={e=>{
                                                                e.target.style = e.target.value === '' ?  "border-bottom-color: red" : null;
                                                                setUser({...user, treatment: e.target.value});
                                                            }}>
                                                                <option value="" defaultChecked disabled>Qual pronome devemos usar?</option>    
                                                                <option value="M">Masculino</option>    
                                                                <option value="F">Feminino</option>    
                                                                <option value="N">Neutro</option>    
                                                            </select>
                                                        </>
                                                    )
                                                }
                                            })()
                                        }
                                    </>
                                )
                            default:
                                break;
                        }
                    })()}
                    <span className="error">{error}</span>
                    <button>{signUpButton}</button>
                </form>
            </div>
        </div>
    );
}

export default SignUp;