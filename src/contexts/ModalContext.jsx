import { createContext, useReducer } from "react";

const ModalContext = createContext({});

export const ModalProvider = ({ children }) => {
    const [ state, dispatch ] = useReducer((state, action) => {
        if(action.type === "OPEN"){
            return {
                ...action.modal
            }
        }
        else{
            return {
                hide: true
            }
        }
    } , { hide: true });
    return(
        <ModalContext.Provider value={{ state, dispatch }}>
            { children }
        </ModalContext.Provider>
    );
}

export default ModalContext;