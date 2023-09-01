import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  steps: 1,
  step2Q1Data: [],
  step2Q2Data: [],
  step2Q3Data: "",
  reachStepQ1: [],
  reachStepQ2: [],
  educatorStepData:[]
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
    resetSteps: (state) => {
      if (state.steps <= 4) {
        state.steps = 1;
      }
    },
    eduRegSteps: (state, action) => {
      if (action.payload.step === "1") {
        return {
          ...state,
          step2Q1Data: state.step2Q1Data.includes(action.payload.optionValue)
            ? state.step2Q1Data.filter(
                (value) => value !== action.payload.optionValue
              )
            : [...state.step2Q1Data, action.payload.optionValue],
        };
      }
      if (action.payload.step === "2") {
        return {
          ...state,
          step2Q2Data: state.step2Q2Data.includes(action.payload.optionValue)
            ? state.step2Q2Data.filter(
                (value) => value !== action.payload.optionValue
              )
            : [...state.step2Q2Data, action.payload.optionValue],
        };
      }
      if (action.payload.step === "3") {
        return {
          ...state,
          step2Q3Data: action.payload.optionValue,
        };
      }
      return state;
    },
    reachSteps: (state, action) => {
      if (action.payload.question === "one") {
        return {
          ...state,
          reachStepQ1: state.linksQ1,
        };
      }
      if (action.payload.question === "two") {
        return {
          ...state,
          reachStepQ2: state.linksQ2,
        };
      }
      return state;
    },
    educatorProfileStep: (state, action)=>{
      console.log(action.payload)
      return {
        ...state,
        educatorStepData: action.payload.optionValue,
      };
    }
  },
});

export const {
  incrementSteps,
  decrementSteps,
  eduRegSteps,
  resetSteps,
  reachSteps,
  educatorProfileStep
} = educatorStepsSlice.actions;

export default educatorStepsSlice.reducer;
