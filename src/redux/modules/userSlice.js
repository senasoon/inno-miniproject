import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { setCookie } from '../../shared/Cookie';
import instance from '../../shared/api';

const initialState = {
  users: [],
  error: null,
  isLoading: false,
  isSuccess: false,
};

export const __postSignup = createAsyncThunk(
  'SIGNUP',
  async (payload, thunkAPI) => {
    try {
      const data = await instance
        .post('/member/signup', payload)
        .then((response) => {
          if (response.data.success === false) {
            return window.alert(response.data.error.message);
          } else {
            console.log(response);
            window.alert('회원가입이 완료되었습니다.');
            document.location.href = '/login';
            return thunkAPI.fulfillWithValue(data.data);
          }
        });
    } catch (error) {
      console.log(error.code);
      return thunkAPI.rejectWithValue(error);
    }
  },
);

//login
export const loginUserDB = (payload) => {
  return async function () {
    await instance
      .post('/member/login', payload)
      .then((response) => {
        if (response.data.success === false) {
          document.getElementById('id').focus();
          return window.alert(response.data.error.message);
        } else {
          const accessToken = response.headers.authorization.split(' ')[1];
          return (
            localStorage.setItem('token', response.headers.authorization),
            localStorage.setItem(
              'freshToken',
              response.headers['refresh-token'],
            ),
            localStorage.setItem('id', response.data.data.nickname),
            setCookie('token', accessToken),
            alert(`${localStorage.id}님 로그인 성공!`),
            (document.location.href = '/')
          );
        }
      })
      .catch((response) => {
        console.log(response);
      });
  };
};

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: {},
});
export default userSlice.reducer;
