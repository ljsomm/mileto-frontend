import { useContext, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import UserContext from '../../contexts/UserContext';
import User from '../../services/User';

const Main = ({ title }) => {
    const {state, dispatch} = useContext(UserContext);
    const [cookies, setCookie, removeCookie] = useCookies();
    


    useEffect(() => {
        document.title = `Mileto - ${title}`;      
    }, [title, dispatch]);

    return(
        <h1>
             { state.name && `Bem vindo, ${state.name}!` }
        </h1>
    );
}

export default Main;