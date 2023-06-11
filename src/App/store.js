import { configureStore } from '@reduxjs/toolkit'
import actionReducer from '../feature/Auth/authSlice'

export const store = configureStore({
  reducer: {
    auth:actionReducer,
  },
})