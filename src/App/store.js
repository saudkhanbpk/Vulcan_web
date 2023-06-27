import { configureStore } from '@reduxjs/toolkit';
import actionReducer from '../feature/Auth/authSlice';
import progressReducer from '../feature/progressBar/progressSlice';

export const store = configureStore({
  reducer: {
    auth: actionReducer,
    progressBar: progressReducer,
  },
});
