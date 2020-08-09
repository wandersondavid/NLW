import axios from 'axios';


const api = axios.create({
    baseURL: 'http://localhost:9999/electron'
})

export default api