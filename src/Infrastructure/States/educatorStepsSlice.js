import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  stepOneData: [],
  stepTwoData: [],
  stepThreeData: [],
  stepFourData: [],

  steps: 1,
};

export const educatorStepsSlice = createSlice({
  name: "educatorSteps",
  initialState,
  reducers: {
    incrementSteps: (state) => {
      if (state.steps <= 4) {
        state.steps = state.steps + 1;
      }
    },

    decrementSteps: (state) => {
      if (state.steps <= 4) {
        state.steps = state.steps - 1;
      }
    },
    resetSteps: (state)=>{
      if (state.steps <= 4) {
        state.steps = 1;
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
      if (action.payload.step === "3") {
        return {
          ...state,
          stepThreeData: state.stepThreeData.includes(
            action.payload.optionValue
          )
            ? state.stepThreeData.filter(
                (value) => value !== action.payload.optionValue
              )
            : [...state.stepThreeData, action.payload.optionValue],
        };
      }
      if (action.payload.step === "4") {
        return {
          ...state,
          stepThreeData: state.stepThreeData.includes(
            action.payload.optionValue
          )
            ? state.stepThreeData.filter(
                (value) => value !== action.payload.optionValue
              )
            : [...state.stepThreeData, action.payload.optionValue],
        };
      }
      return state;
    },
  },
});

export const { incrementSteps, decrementSteps, eduRegSteps, resetSteps } =
  educatorStepsSlice.actions;

export default educatorStepsSlice.reducer;
