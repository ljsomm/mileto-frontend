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
    }
}

export default User;