import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import jwtDecode from 'jwt-decode';
import { setCookie, deleteCookie } from '../../shared/Cookie';
import { generateJWTToken } from '../../shared/JWT';
//import instance from '../../shared/api';

const initialState = {
  users: [],
  error: null,
  isLoading: false,
  isSuccess: false,
};

//register
export const __addUserThunk = createAsyncThunk(
  'ADD_USER',
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.post('http://localhost:3001/users', payload);
      alert('회원가입 성공!');
      document.location.href = '/login';
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code);
    }
  },
);

export const __loginThunk = createAsyncThunk(
  'SIGNUP_USER',
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `http://localhost:3001/users?id=${payload.id}`,
      );
      const user = data[0];

      if (user) {
        if (user.password === payload.password) {
          const token = generateJWTToken(user.id);
          setCookie('token', token);
          localStorage.setItem('id', user.id);
          alert('로그인 성공!');
          return (document.location.href = '/');
        } else {
          alert('비번틀림');
          return (document.location.href = '/login');
        }
      } else {
        alert('없는유저입니다!');
        return (document.location.href = '/login');
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code);
    }
  },
);
export const logoutUserThunk = createAsyncThunk('LOGOUT_USER', () => {
  deleteCookie('token');
  localStorage.removeItem('id');
  return (document.location.href = '/');
});
//login
// export const __loginThunk = createAsyncThunk(
//   'LOGIN_USER',
//   async (payload, thunkAPI) => {
//     try {
//       const data = await axios.post('api/login', payload);
//       localStorage.setItem('token', data.headers.authorization);
// const accessToken = data.headers.authorization.split(' ')[1];
// setCookie('token', accessToken, {
//   expires: new Date(jwtDecode(accessToken).exp * 1000),
// });
//       alert('로그인 성공!');
//       return thunkAPI.fulfillWithValue(data);
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.code);
//     }
//   },
// );

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: {
    [__addUserThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.users = action.payload;
      state.users.push(action.payload);
    },
    [__addUserThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__addUserThunk.pending]: (state) => {
      state.isLoading = true;
    },
    [__loginThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      console.log(action.payload.id, '로그인 페이로드'); //id
      state.users.id = action.payload.id;
    },
    [__loginThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__loginThunk.pending]: (state) => {
      state.isLoading = true;
    },
  },
});
export default userSlice.reducer;
