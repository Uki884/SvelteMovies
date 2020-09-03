import axios from 'axios';

const baseURL = 'https://api.themoviedb.org/';

const api = axios.create({
  baseURL,
  params: {
    api_key: '7a570c3e4e674a1a929f220be1cad824',
    language: 'ja',
    region: 'JP'
  }
});

export default api;