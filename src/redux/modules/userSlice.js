import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { setCookie, deleteCookie } from '../../shared/Cookie';
import { generateJWTToken } from '../../shared/JWT';
import instance from '../../shared/api';

const initialState = {
  users: [],
  error: null,
  isLoading: false,
  isSuccess: false,
};

//register
export const __addUserThunk = createAsyncThunk('ADD_USER', async (payload) => {
  try {
    const { data } = await axios.post('http://localhost:3001/users', payload);

    return (
      alert(`${data.id}님 회원가입 성공!`), (document.location.href = '/login')
    );
  } catch (error) {
    return alert(error.code), (document.location.href = '/signin');
  }
});

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
  return (document.location.href = '/');
});

// export const kakaoLoginDB = (code) => {
// return async function () {
//   console.log('일단 카카오 리덕스 들어옴');
//   try {
//     const kakaoLogin = await axios({
//       url: `http://localhost:3000/oauth/kakao/callback?code=${code}`,
//     });
//     const accessToken = kakaoLogin.headers.authorization.split(' ')[1];
//     setCookie('token', accessToken, {
//       path: '/',
//       expire: 'after60m',
//     });
//localStorage.setItem('id', response.data.username);
//     alert('로그인 성공!');
//   } catch (error) {
//     console.log('카카오 로그인 실패', error);
//   } finally {
//     console.log('로그인 완전 실패');
//   }
// };
// };
export const __postSignup = createAsyncThunk(
  'SIGNUP',
  async (payload, thunkAPI) => {
    console.log(payload, '리덕스에 들어옴');
    try {
      const data = await instance
        .post('/member/signup', payload, {
          'Content-Type': 'application/json',
          withCredentials: true,
        })
        .then((response) => {
          console.log(response);
          window.alert('회원가입이 완료되었습니다.');
          document.location.href = '/login';
        });
      return thunkAPI.fulfillWithValue(data.data); // extra리듀서 비어있어도 됨
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
          return window.alert(response.data.error.message);
        } else {
          console.log('payload', payload);
          console.log('response로 찍히는 결과값', response);
          const accessToken = response.headers.authorization.split(' ')[1];
          return (
            localStorage.setItem('token', response.headers.authorization),
            localStorage.setItem('id', response.data.data.nickname),
            setCookie('token', accessToken, {
              expires: new Date(jwtDecode(accessToken).exp * 1000),
            }),
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
