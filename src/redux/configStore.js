import { configureStore } from '@reduxjs/toolkit';
import users from '../redux/modules/userSlice';

const store = configureStore({
  reducer: {
    users,
  },
});

export default store;
