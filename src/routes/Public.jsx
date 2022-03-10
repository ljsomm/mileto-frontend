import { Navigate } from "react-router-dom";

const Public = ({ component }) => {
    const token = sessionStorage.getItem('isLogged');
    return(
        token ? <Navigate to='/principal'/> : component 
    );
}

export default Public;