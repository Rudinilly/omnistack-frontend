import axios from 'axios';

const api = axios.create({
    baseURL: 'https://omnistack-backend-rudinilly.herokuapp.com'
})

export default api;