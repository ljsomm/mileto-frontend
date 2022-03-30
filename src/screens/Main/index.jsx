import { useContext, useEffect } from 'react';
import UserContext from '../../contexts/UserContext';

const Main = ({ title }) => {
    const {state, dispatch} = useContext(UserContext);    

    useEffect(() => {
        document.title = `Mileto - ${title}`;      
    }, [title, dispatch]);

    return(
        <>
            <h1>
                { state.name && `Bem vindo, ${state.name}!` }
            </h1>

        </>
    );
}

export default Main;