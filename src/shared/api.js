import axios from 'axios';
import { getCookie } from './Cookie';
import { parseJWTToken } from './JWT';

const instance = axios.create({
  baseURL: 'http://localhost:3000',
});
//성준님 주소
//http://54.180.155.72/api
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
