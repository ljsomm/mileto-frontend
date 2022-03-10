import axios from "axios";

const api = axios.create({
    baseURL: "https://localhost:3030/"
});

export default api;