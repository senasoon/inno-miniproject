// src/redux/config/configStore.js

import { configureStore } from '@reduxjs/toolkit';

import posts from '../modules/postsSlice';

const store = configureStore({
  reducer: { posts: posts },
});

export default store;