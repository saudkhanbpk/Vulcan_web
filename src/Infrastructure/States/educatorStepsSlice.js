import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  steps: 4,
  experienceStep: {
    professor: false,
    teacher: false,
    independent: false,
    tutor: false,
    experienceOther: false,
    inPerson: false,
    liveOnline: false,
    recordedOnline: false,
    mediumOther: false,
    years:""
  },
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
      const { name, checked, question } = action.payload;
      if (question === "one") {
        state.experienceStep[name] = checked;
      }
      if (question === "three") {
        const { optionValue } = action.payload;
        state.experienceStep.years = optionValue;
      }
      return state;
    },
  },
});
export const {
  incrementSteps,
  decrementSteps,
  experienceSteps,
  resetSteps,
  reachSteps,
  educatorProfileStep,
} = educatorStepsSlice.actions;
export default educatorStepsSlice.reducer;
