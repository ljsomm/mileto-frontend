import { useContext } from 'react';
import ModalContext from '../../contexts/ModalContext';
import './styles.css';

const Modal = () => {
    const { state, dispatch } = useContext(ModalContext);
    return(
        <div className="modal-container" style={{ display: state.hide ? "none" : "flex"  }}>
            <div className="modal">
                <div className="modal-header">{ state.header } { state.closeButton && <button onClick={()=>dispatch({type: "CLOSE"})} className="modal-close-button">x</button> }</div>
                <div className="modal-body">{ state.body }</div>
                <div className="modal-footer">{ state.footer }</div>
            </div>
        </div>
    );
}

export default Modal;