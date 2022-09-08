import axios from 'axios';
import { getCookie } from './Cookie';

const instance = axios.create({
  baseURL: 'http://13.209.88.134',
});

const accessToken = getCookie('token');
instance.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

export default instance;
