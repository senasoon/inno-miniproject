import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3001',
});

// instance.defaults.headers.common['Authorization'] = USER_TOKEN;

export const postApi = {
  getPost: () => instance.get('/post'),

  addPost: (contents) =>
    instance({
      method: 'POST',
      url: '/post',
      mode: 'cors',
      headers: {
        'Content-Type': 'multipart/form-data', // Content-Type을 반드시 이렇게 하여야 한다.
      },
      data: contents, // data 전송시에 반드시 생성되어 있는 formData 객체만 전송 하여야 한다.
    }),
};
