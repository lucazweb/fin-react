import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.iextrading.com/1.0'
});

export default api;
