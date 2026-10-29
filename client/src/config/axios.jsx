import axios from "axios"

const Backend_Url = import.meta.env.VITE_BACKEND_URL? import.meta.env.VITE_BACKEND_URL: "http://localhost:8080"
const api = axios.create({
    baseURL : Backend_Url,
    withCredentials : true
})

export default api;