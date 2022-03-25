import { useContext } from 'react';
import ModalContext from '../../contexts/ModalContext';
import classNames from 'classnames';
import './styles.css';

const Modal = () => {
    const { state, dispatch } = useContext(ModalContext);
    return(
        <div className="modal-container" style={{ display: state.hide ? "none" : "flex"  }}>
            <div className="modal">
                <div className="modal-header">{ state.header } { state.closeButton && <button onClick={()=>dispatch({type: "CLOSE"})} className="modal-close-button">x</button> }</div>
                <div className={classNames(
                    {
                        "modal-body": true,
                        "modal-body__alert": state.kind && state.kind === "ALERT",
                        "modal-body__form": state.kind && state.kind === "FORM"
                    }
                )}>{ state.body }</div>
                <div className={
                    classNames(
                        {
                            "modal-footer": true,
                            "modal-footer__alert": state.kind && state.kind === "ALERT",
                            "modal-footer__form": state.kind && state.kind === "FORM"
                        }
                    )
                }>{ state.footer }</div>
            </div>
        </div>
    );
}

export default Modal;