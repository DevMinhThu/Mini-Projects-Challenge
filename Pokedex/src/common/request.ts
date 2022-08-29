import axios from 'axios';

const request = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
  timeout: 1000,
  headers: {Accept: '*/*'},
});

export default request;
