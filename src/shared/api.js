import axios from 'axios';
import { getCookie } from './Cookie';
import { parseJWTToken } from './JWT';

const instance = axios.create({
  baseURL: 'http://13.209.88.134',
});

const accessToken = getCookie('token');
instance.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

//지울부분
export const useToken = () => {
  return () => {
    const token = getCookie('token');
    if (token) {
      const currentUser = parseJWTToken(token);
      return currentUser;
    } else {
      return null;
    }
  };
};

export default instance;
