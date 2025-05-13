// services/api.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://10.137.200.87:8000/api', // Adjust to your backend
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default instance;
