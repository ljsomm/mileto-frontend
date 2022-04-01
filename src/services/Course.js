import api from "./api"

const Course = {
    get: async () => {
        try{
            const response = await api.get('/courses');
            return response;
        }
        catch(err){
            throw err.response.err;
        }
    }
}

export default Course;