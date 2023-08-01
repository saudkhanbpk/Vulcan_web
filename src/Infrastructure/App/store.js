import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../../Infrastructure/Feature/Auth/authSlice";
import educatorStepsReducer from "../../Infrastructure/Feature/Auth/educatorStepsSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    educatorSteps: educatorStepsReducer,
  },
});
