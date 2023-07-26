import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  stepOneData: [],
  stepTwoData: [],
  steps: 1,
};

export const educatorStepsSlice = createSlice({
  name: "educatorSteps",
  initialState,
  reducers: {
    incrementSteps: (state) => {
      if (state.steps < 3) {
        state.steps = state.steps + 1;
      }
    },

    decrementSteps: (state) => {
      if (state.steps < 3) {
        state.steps = state.steps - 1;
      }
    },
    eduRegSteps: (state, action) => {
      if (action.payload.step === "1") {
        return {
          ...state,
          stepOneData: state.stepOneData.includes(action.payload.optionValue)
            ? state.stepOneData.filter(
                (value) => value !== action.payload.optionValue
              )
            : [...state.stepOneData, action.payload.optionValue],
        };
      }
      if (action.payload.step === "2") {
        return {
          ...state,
          stepTwoData: state.stepTwoData.includes(action.payload.optionValue)
            ? state.stepTwoData.filter(
                (value) => value !== action.payload.optionValue
              )
            : [...state.stepTwoData, action.payload.optionValue],
        };
      }
      return state;
    },
  },
});

export const { incrementSteps, decrementSteps, eduRegSteps } =
  educatorStepsSlice.actions;

export default educatorStepsSlice.reducer;
