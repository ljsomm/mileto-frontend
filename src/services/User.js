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
    }
}

export default User;