import { useEffect } from 'react';
import { useContext } from 'react';
import ModalContext from '../../contexts/ModalContext';

const Main = ({ title }) => {

    const { dispatch } = useContext(ModalContext);

    useEffect(() => {
        document.title = `Mileto - ${title}`;
    }, [title]);

    return(
        <h1>
            Main works!
            <button onClick={()=>dispatch({type: "OPEN", modal: {  closeButton: true, header: <p>TÍTULO</p>, body: <form><input type="text" /></form>, footer: <button>FECHAR</button> }})}></button>
        </h1>
    );
}

export default Main;