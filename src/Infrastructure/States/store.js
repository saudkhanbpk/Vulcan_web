import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authModalsSlice";
import educatorStepsReducer from "./educatorStepsSlice";
import userDataReducer  from "./userDataSlice"
export const store = configureStore({
  reducer: {
    auth: authReducer,
    educatorSteps: educatorStepsReducer,
    userData: userDataReducer,
  },
});
