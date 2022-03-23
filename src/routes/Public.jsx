import { useCookies } from "react-cookie";
import { Navigate } from "react-router-dom";

const Public = ({ component }) => {
    const [cookies] = useCookies();
    const token = cookies.__token;
    return(
        token ? <Navigate to={cookies.screen === "A" ? '/principal' : '/dashboard'}/> : component 
    );
}

export default Public;