const REST_API_KEY = 'c8d279b58bba9f7549a870597a7ce804';
const REDIRECT_URI = 'http://localhost:3000/auth/kakao/callback';

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
