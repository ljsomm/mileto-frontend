import api from "./api"

const User = {
    cadastro: async (user) => {
        try{
            const response = await api.post('/user', user);
            return response;
        }
        catch(err){
            return { err: true, message: "Não foi possivel realizar o cadastro" }
        }
    },
    login: async (user) => {
        try{
            const response = await api.post('/user/auth', user);
            return { token: response.data.token }
        }
        catch(exception){
            return { err: exception.response.data.err }
        }
    },
    get: async (token, setState, dispatch) => {
        if(dispatch){
            try{
                const response = await api.get('/user', { headers: { token } });
                setState({ type: "GET_USER", payload: response.data });
            }
            catch(err){
                throw err;
            }
        }
        else{
            try{
                const response = await api.get('/user', { headers: { token } });
                setState(response.data);
            }
            catch(err){
                throw Error("Ocorreu um erro");
            }
        }
        
    },
    showCourses: async (token) =>{
        try{
            const response = await api.get('/user/courses', { headers: { token } });
            return response.data;
        }
        catch(e){
            return e.response.data;
        }
    }
}

export default User;