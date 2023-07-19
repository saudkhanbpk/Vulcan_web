import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../feature/Auth/authSlice";
import educatorStepsReducer from "../feature/Auth/educatorStepsSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    educatorSteps: educatorStepsReducer,
  },
});
