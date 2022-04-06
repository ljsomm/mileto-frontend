import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Switch from '../../components/Switch';
import LogoDefault from '../../assets/images/logo-azul-escuro.png';

import './styles.css';

const UserInfo = ({ title }) => {

    return (

        <div className="user-info-bg">,
            <div className="user-options">
                <ul className='my-user-op'>
                    <div className="myuserimg">
                        <img src='LogoDefault' alt="" />
                    </div>
                    <li>Editar Perfil</li>
                    <li>Mudar Senha</li>
                    <li>Privacidade e Segurança</li>
                    <li>Formas de Pagamento</li>
                </ul>
            </div>

            <form className="userchange-info">
                <h1 className="user-info-title">Informações de Usuario</h1>

                <h3 className='user-info-text'> Digite seu Nome </h3>
                <input className='user-info-input' type="text" />

                <h3 className='user-info-text'> Digite seu E-mail </h3>
                <input className='user-info-input' type="email" />

                <h3 className='user-info-text'> Selecione seu Genero </h3>
                <select name="Gender" id="user-gender">
                <option value="" defaultChecked disabled>Gênero</option>
                    <option value="M">Masculino</option>
                    <option value="F">Feminino</option>
                    <option value="O">Prefiro não dizer</option>

                </select>

                <h3 className='user-info-text'> Data de Nascimento </h3>
                <input className='user-info-input' type="date" />
            </form>
        </div>
    );
}

export default UserInfo;