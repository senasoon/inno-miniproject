import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { postApi } from '../../shared/api/postApi';

const initialState = {
  posts: [],
  isLoading: false,
  error: null,
};

export const __getPosts = createAsyncThunk(
  'postsSlice/GET_POSTS',
  async (payload, thunkAPI) => {
    try {
      const data = await postApi.getPost();
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
)

export const __addPosts = createAsyncThunk(
  'postsSlice/ADD_POSTS',
  async (payload, thunkAPI) => {
    try {
      const data = await postApi.addPost(payload);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
)

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
      state.posts.push(action.payload);
    },
    [__addPosts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  }
});

export const {} = postsSlice.actions;
export default postsSlice.reducer;