import axios from 'axios';
const api = axios.create({
    baseURL: 'http://localhost:3800', // Replace with your base URL
});

export default api