import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Steps from "../../components/Steps";

import './styles.css'

const SignUp = ({ title }) => {

    const navigate = useNavigate();

    const nameRef = useRef();
    const lastnameRef = useRef();
    const birthDateRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmationRef = useRef();
    const genderRef = useRef();
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
            gender: '',
            custom: '',
            treatment: ''
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
                <form className="form" action="/principal" method="get" onSubmit={(e)=>{
                    e.preventDefault();
                    switch(step){
                        case 1:
                            if(user.name !== '' && user.lastname !== '' && user.birthDate !== ''){
                                setStep(step + 1);
                                setError(null);
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
                                setStep(step + 1);
                                setError(null);
                                setSignUpButton("Cadastrar");
                            } 
                            else{
                                user.email === '' ? emailRef.current.style = "border-bottom-color: red" :  emailRef.current.style = null;
                                user.password === '' ? passwordRef.current.style = "border-bottom-color: red" :  passwordRef.current.style = null;
                                user.passwordConfirmation === '' ? passwordConfirmationRef.current.style = "border-bottom-color: red" :  passwordConfirmationRef.current.style = null;
                                setError("Preencha a todos os campos corretamente!");
                            }
                            break;
                        case 3:
                            if(user.gender !== ""){
                                genderRef.current.style = null;
                                setError(null);
                                if(user.gender === "O"){
                                    if(user.treatment !== "" && user.custom !== ""){
                                        navigate("/principal");
                                    }
                                    else{
                                        customRef.current.style = user.custom === '' ? "border-bottom-color: red" : null;  
                                        treatmentRef.current.style = user.treatment === '' ? "border-bottom-color: red" : null;  
                                        setError("Preencha a todos os campos corretamente!");
                                    }
                                }
                                else{
                                    navigate("/principal");
                                }
                            }
                            else{
                                genderRef.current.style = "border-bottom-color: red";
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
                                        <input type="date" ref={birthDateRef} value={user.birthDate} onChange={ e => {
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
                                        <select ref={genderRef} name="sel-genero" id="sel-genero" value={user.gender} onChange={e=>{
                                            setUser({...user, gender: e.target.value});
                                        }}>
                                            <option value="" defaultChecked disabled>Gênero</option>    
                                            <option value="M">Masculino</option>    
                                            <option value="F">Feminino</option>    
                                            <option value="N">Prefiro não dizer</option>    
                                            <option value="O">Outro</option>    
                                        </select>
                                        {
                                            (()=>{
                                                if(user.gender === "O"){
                                                    return(
                                                        <>
                                                            <input  ref={customRef} type="text" placeholder="Insira seu gênero" name="inp-custom" id="inp-custom" value={user.custom} onChange={e=>{
                                                                e.target.style = e.target.value === '' ?  "border-bottom-color: red" : null;
                                                                setUser({...user, custom: e.target.value})
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