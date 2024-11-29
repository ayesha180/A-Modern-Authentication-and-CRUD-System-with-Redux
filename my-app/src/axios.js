// src/axios.js

import axios from 'axios';
import Cookies from 'js-cookie';

// Create an Axios instance with the base URL pointing to the new API endpoint
const axiosInstance = axios.create({
  baseURL: 'https://dummyjson.com', // Updated API base URL
});

// Interceptor to add the token to the request header if it exists
axiosInstance.interceptors.request.use((config) => {
  const token = Cookies.get('token');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`; // Attach token to headers if available
  }
  return config;
});

export default axiosInstance;
