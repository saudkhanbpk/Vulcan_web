import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authModalsSlice";
import educatorStepsReducer from "./educatorStepsSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    educatorSteps: educatorStepsReducer,
  },
});
