import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import instance from '../../shared/api';

const refreshToken = localStorage.getItem('freshToken');

const initialState = {
  posts: [],
  isLoading: false,
  error: null,
};

export const __getPosts = createAsyncThunk(
  'postsSlice/GET_POSTS',
  async (payload, thunkAPI) => {
    try {
      const data = await instance.get('/post');
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const __addPosts = createAsyncThunk(
  'postsSlice/ADD_POSTS',
  async (payload, thunkAPI) => {
    try {
      const data = await instance.post('/auth/post', payload, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Refresh-Token': refreshToken,
        },
      });
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: {
    [__getPosts.pending]: (state) => {
      state.isLoading = true;
    },
    [__getPosts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload;
    },
    [__getPosts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__addPosts.pending]: (state) => {
      state.isLoading = true;
    },
    [__addPosts.fulfilled]: (state, action) => {
      state.isLoading = false;
      if (action.payload.error) {
        alert('글 등록에 실패했습니다.');
        document.location.href = '/';
      } else {
        state.posts.data.unshift(action.payload.data);
      }
    },
    [__addPosts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      alert(action.payload.error);
      document.location.href = '/';
    },
  },
});

// export const {} = postsSlice.actions;
export default postsSlice.reducer;
