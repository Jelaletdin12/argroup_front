// src/services/api.js
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://argroup.com.tm/api/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
