import instance from '../../shared/api';

export const postApi = {
  getPost: () => instance.get('/post'),

  addPost: (contents) =>
    instance.post('/auth/post', contents, {
      headers: {
        'Content-Type': 'multipart/form-data', // Content-Type을 반드시 이렇게 하여야 한다.
      },
    }),
};
