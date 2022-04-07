import api from "./api"

const Course = {
    getAll: async () => {
        try{
            const response = await api.get('/courses');
            return response;
        }
        catch(err){
            throw err.response.err;
        }
    },
    get: async (id) => {
        try{
            const response = await api.get(`${process.env.REACT_APP_BACKEND}/course/${id}`);
            return response.data;
        }
        catch(e){
            throw e.response.err;
        }
    },
    subscribe: async (id, token) => {
        try{
            const response = await api.post(`${process.env.REACT_APP_BACKEND}/course/${id}`, token, { headers: { token } });
            return response.data;
        }
        catch(e){
            throw e.response.err;
        }
    }
}

export default Course;