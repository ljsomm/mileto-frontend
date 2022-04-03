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
    subscribe: async () => {
        alert("INSCREVEU");
    }
}

export default Course;