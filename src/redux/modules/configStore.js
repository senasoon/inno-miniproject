import { configureStore } from '@reduxjs/toolkit';

import posts from '../modules/postsSlice';
import users from '../modules/userSlice';

const store = configureStore({
  reducer: { posts, users },
});

export default store;
