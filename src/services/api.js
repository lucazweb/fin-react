import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.iextrading.com/1.0'
});

export const apiv2 = axios.create({
  baseURL: 'https://cloud.iexapis.com/stable'
})

export default api;
