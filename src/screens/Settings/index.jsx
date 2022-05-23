import styles from './styles.module.css';
import { useContext, useEffect, useRef, useState } from "react";
import User from '../../services/User';
import { useCookies } from 'react-cookie';
import UserUtil from '../../utils/UserUtil';
import classNames from 'classnames';
import UserContext from '../../contexts/UserContext';
import ModalContext from '../../contexts/ModalContext';

const Settings = ({ title }) => {

    const settingsMenu = [{title: "Editar perfil", icon:""}, {title: "Alterar senha", icon: ""}, {title: "Avançado", icon: ""}];

    const [user, setUser] = useState({});
    const [configType, setConfigType] = useState(1);
    const [removeImage, setRemoveImage] = useState(false);
    const [cookies] = useCookies();
    const [imageSrc, setImageSrc] = useState('');
    const imageRef = useRef();
    const [changePassword, setPassword] = useState({password: '', newPassword: '', confirmation: ''});
    const { dispatch } = useContext(UserContext);
    const Modal = useContext(ModalContext); 
    const [profileError, setProfileError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [editable, setEditable]= useState(false);

    const nameRef = useRef();
    const emailRef = useRef();
    const dateRef = useRef();
    const passwordRef = useRef();
    const newPasswordRef = useRef();
    const confirmationRef = useRef();

    function treatDate(date, value, pos){
        const dateArr = date.split('-');
        dateArr[pos] = value;
        return `${dateArr[0]}-${dateArr[1]}-${dateArr[2]}`;
    }

    function clearProfileSettings(){
        nameRef.current.style = null;
        emailRef.current.style = null;
        dateRef.current.style = null;
        setProfileError("");
    }

    function clearPasswordSettings(){
        passwordRef.current.style = null;
        newPasswordRef.current.style = null;
        confirmationRef.current.style = null;
        setPasswordError("");
    }

    function handleRemoveImage(){
        imageRef.current.src = UserUtil.imageSrcFilter('public/default-profile.png');
        setImageSrc(imageRef.current.src);
        setRemoveImage(true);
    }

    async function profileHandler(e){
        e.preventDefault();
        if(UserUtil.emailValidation(user.email)){
            const formData = new FormData(e.target);
            removeImage && formData.append('removeImage', removeImage);
            const data = await User.update(cookies.__token, formData);
            dispatch({ type: 'GET_USER', payload: data })
            setEditable(false);
            clearProfileSettings();
        }
        else{
            setProfileError("Insira um e-mail valido");
            e.target.email.style.borderColor = "red"
        }
    }

    async function passwordHandler(e){
        e.preventDefault();
        passwordRef.current.style.borderColor = changePassword.password === '' ?  'red' : 'rgba(98, 98, 98, 0.476)';
        newPasswordRef.current.style.borderColor = changePassword.newPassword === '' ?  'red' : 'rgba(98, 98, 98, 0.476)';
        confirmationRef.current.style.borderColor = changePassword.confirmation === '' ?  'red' : 'rgba(98, 98, 98, 0.476)';
        if(changePassword.password !== '' && changePassword.newPassword !== '' && changePassword.confirmation !== ''){
            if(changePassword.newPassword === changePassword.confirmation){
                const res = await User.updatePassword(cookies.__token, changePassword.password, changePassword.newPassword);
                console.log(res);
                if(res.err){
                    setPasswordError(res.err);
                }
                else{
                    clearPasswordSettings();
                    setPassword({password: '', newPassword: '', confirmation: ''});
                    setEditable(!editable);
                    Modal.dispatch({ type: "OPEN", modal: { kind: "ALERT", Header: ()=><h1>Sucesso</h1>, Body: ()=> <span>Senha alterada com sucesso</span>, Footer:()=><button className="modal-button" onClick={()=>Modal.dispatch({type: "CLOSE"})}>Continuar</button> } });
                }
            }
            else{
                setPasswordError("As senhas não correspondem");
                newPasswordRef.current.style.borderColor = 'red';
                confirmationRef.current.style.borderColor = 'red';
                newPasswordRef.current.style.color = 'red';
                confirmationRef.current.style.color = 'red';
            }
        }
        else{
            setPasswordError("Preencha todos os campos corretamente");
        }
    }

    async function getUser(){
        await User.get(cookies.__token, setUser);
    }

    useEffect(()=>{ user.Images && setImageSrc(UserUtil.imageSrcFilter(user.Images[0].path))}, [user]);

    useEffect(()=>{
        document.title = `Mileto - ${title}`;   
        getUser();
    }, [title])

    return(
        <div className={styles.container}>
            <div className={styles["settings-container"]}>
                <div className={styles["settings-menu"]}>
                    <div className={styles["settings-photo"]}>
                        <div className={styles["user-picture-container"]}>
                           { 
                            user.Images && user.Images.length > 0 ? 
                            <div className={styles["photo-container"]}>
                                <img ref={imageRef}  src={UserUtil.imageSrcFilter(user.Images[0].path)} alt="Foto do Usuário" />
                                {
                                    editable && configType === 1 &&
                                    <div className={styles["photo-hover"]}>
                                        {
                                            imageSrc && imageSrc !== UserUtil.imageSrcFilter('public/default-profile.png') ?
                                            <>
                                                <label htmlFor="inp-user-picture">
                                                    <span>
                                                        Alterar imagem
                                                    </span>
                                                </label>
                                                <span className={styles.remove} onClick={handleRemoveImage}>
                                                    Remover Imagem
                                                </span>
                                            </>
                                            :
                                            <label htmlFor="inp-user-picture">
                                                <span>
                                                    + Adicionar imagem
                                                </span>
                                            </label>    
                                        }
                                        
                                    </div>
                                }
                                    
                            </div>
                                : 
                                    "Carregando foto..." 
                            } 
                        </div>
                        <span className={styles["settings-user-name"]}>{user.name && UserUtil.nameFilter(user.name)}</span> 

                    </div>
                    <div className={styles["settings-navigation"]}>
                        <ol>
                            {
                                settingsMenu.map((item, key)=><li key={key} onClick={()=>{
                                    if(!editable)
                                        setConfigType(key+1)
                                    else
                                        alert("Salve ou cancele antes de sair");
                                }} className={classNames({ [styles["nav-item__active"]]: configType === key+1, [styles["nav-item"]]: true })}>{ item.title }</li>)
                            }
                        </ol>
                    </div>
                </div>
                <div className={styles["settings-content"]}>
                    {
                        user.Genres &&
                        (()=>{
                            switch(configType){
                                case 1:
                                    return(
                                        <>
                                            <h2>Editar perfil</h2>
                                            <form className={styles["profile-form"]} onSubmit={profileHandler}>
                                                <label htmlFor="inp-name">Nome Completo</label>
                                                <input disabled={!editable} ref={nameRef} type="text" id="inp-name" name="name" value={user.name} onChange={e=>setUser({ ...user, name: e.target.value })}/>
                                                <label htmlFor="inp-email">E-mail</label>
                                                <input disabled={!editable} ref={emailRef} type="text" id="inp-email" name="email" value={user.email} onChange={e=>setUser({ ...user, email: e.target.value })}/>
                                                <label htmlFor="inp-email">Gênero</label>
                                                <input type="text" id="inp-gender" className={styles["inp-gender"]} disabled value={UserUtil.genderFilter(user.Genres[0])}/>
                                                <label>Data de Nascimento</label>
                                                <div className={styles["birthdate-container"]}>
                                                    {
                                                        user.birthDate.split('-').map((item, key)=><input ref={dateRef} disabled={!editable} key={key} type="text" value={item} onChange={e=>{
                                                            setUser({ ...user, birthDate: treatDate(user.birthDate, e.target.value, key) })
                                                        }
                                                    }/>)
                                                    }
                                                </div>
                                                <input type="date" name="birthDate" className="hide" value={user.birthDate} onChange={e=>alert(e.target.value)} />
                                                <input disabled={!editable} type="file" name="user-photo" className="hide" id="inp-user-picture" onChange={e=>
                                                    {
                                                        let a = new FileReader();
                                                        a.readAsDataURL(e.target.files[0])
                                                        a.onloadend = (ev) => {
                                                            imageRef.current.src = ev.target.result;
                                                            setImageSrc(ev.target.result);
                                                            setRemoveImage(false);
                                                        }
                                                    }
                                                }/>
                                                <div className={styles["settings-footer"]}>
                                                    <span className={styles.error}>{profileError}</span>
                                                    <button className={classNames({ [styles.cancel]: editable })} type="button" onClick={()=>{setEditable(!editable); clearProfileSettings()}}>
                                                        {
                                                            editable ?
                                                            "Cancelar"
                                                            :
                                                            "Editar"
                                                        }
                                                    </button>
                                                    <button disabled={!editable} className={styles["save-button"]}>Salvar</button>
                                                </div>
                                            </form>
                                        </>
                                    );
                                case 2:
                                        return(
                                            <>
                                            <h2>Alterar senha</h2>
                                            <form className={styles["profile-form"]} onSubmit={passwordHandler}>
                                                <label htmlFor="inp-name">Senha atual</label>
                                                <input disabled={!editable} type="password" ref={passwordRef} id="inp-current" name="password"  value={changePassword.password} onChange={e=>setPassword({...changePassword, password: e.target.value})} />
                                                <label htmlFor="inp-email">Nova senha</label>
                                                <input disabled={!editable} type="password" ref={newPasswordRef} id="inp-new-password" value={changePassword.newPassword} onChange={e=>setPassword({ ...changePassword, newPassword: e.target.value})} name="newPassword"/>
                                                <label htmlFor="inp-email">Confirme nova senha</label>
                                                <input disabled={!editable} type="password" ref={confirmationRef} id="inp-new-password-confirmation" value={changePassword.confirmation} onChange={e=>setPassword({ ...changePassword, confirmation: e.target.value})} name="newPassword"/>
                                                <div className={styles["settings-footer"]}>
                                                    <span className={styles.error}>{passwordError}</span>
                                                    <button className={classNames({ [styles.cancel]: editable })} type="button" onClick={()=>{setEditable(!editable); clearPasswordSettings();}}>
                                                        {
                                                            editable ?
                                                            "Cancelar"
                                                            :
                                                            "Alterar"
                                                        }
                                                    </button>
                                                    <button disabled={!editable} className={styles["save-button"]}>Salvar</button>
                                                </div>
                                            </form>
                                            </>
                                        );
                                case 3:
                                    return(<h2>Avançado</h2>);
                            }
                        })()
                    }
                </div>
            </div>
        </div>
    );
}

export default Settings;