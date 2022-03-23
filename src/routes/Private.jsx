import { useCookies } from "react-cookie";
import { Navigate } from "react-router-dom";

const Private = ({ component }) => {
    const [cookies] = useCookies();
    const token = cookies.__token;
    return(
        token ? component : <Navigate to='/'/>
    );
}

export default Private;