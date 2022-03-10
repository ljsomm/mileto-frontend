import { Navigate } from "react-router-dom";

const Private = ({ component }) => {
    const token = sessionStorage.getItem('isLogged');
    return(
        token ? component : <Navigate to='/'/>
    );
}

export default Private;