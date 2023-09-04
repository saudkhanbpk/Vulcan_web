import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  steps: 4,
  experienceStepQ1: [],
  experienceStepQ2: [],
  experienceStepQ3: "",
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
    experienceSteps: (state, action) => {
      if (action.payload.step === "one") {
        return {
          ...state,
          experienceStepQ1: state.experienceStepQ1.includes(action.payload.optionValue)
            ? state.experienceStepQ1.filter(
                (value) => value !== action.payload.optionValue
              )
            : [...state.experienceStepQ1, action.payload.optionValue],
        };
      }
      if (action.payload.step === "two") {
        return {
          ...state,
          experienceStepQ2: state.experienceStepQ2.includes(action.payload.optionValue)
            ? state.experienceStepQ2.filter(
                (value) => value !== action.payload.optionValue
              )
            : [...state.experienceStepQ2, action.payload.optionValue],
        };
      }
      if (action.payload.step === "three") {
        return {
          ...state,
          experienceStepQ3: action.payload.optionValue,
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
  experienceSteps,
  resetSteps,
  reachSteps,
  educatorProfileStep
} = educatorStepsSlice.actions;

export default educatorStepsSlice.reducer;
