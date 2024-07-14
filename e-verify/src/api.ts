import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/api', // Update this URL to your Laravel backend URL
});

export default api;