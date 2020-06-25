import axios from 'axios';

export const requestProducts = () => axios.get('https://swapi.dev/api/planets/');
