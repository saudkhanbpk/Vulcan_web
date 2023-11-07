import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    courseSteps: 1,
};
export const coursesStepsSlice = createSlice({
  name: "courseSteps",
  initialState,
  reducers: {
    incrementCoursesSteps: (state) => {
      if (state.courseSteps <= 6) {
        state.courseSteps = state.courseSteps + 1;
      }
    },
    decrementCoursesSteps: (state) => {
      if (state.courseSteps <= 6) {
        state.courseSteps = state.courseSteps - 1;
      }
    },
    resetCoursesSteps: (state) => {
      if (state.courseSteps <= 6) {
        state.courseSteps = 1;
      }
    },
    // experienceSteps: (state, action) => {
    //   const { name, checked, question } = action.payload;
    //   if (question === "one") {
    //     state.experienceStep[name] = checked;
    //   }
    //   if (question === "two") {
    //     state.experienceStep[name] = checked;
    //   }
    //   if (question === "three") {
    //     const { optionValue } = action.payload;
    //     state.experienceStep.years = optionValue;
    //   }
    //   return state;
    // },
    // resetExperienceStepValues: (state) => {
    //   state.experienceStep.professor = false;
    //   state.experienceStep.teacher = false;
    //   state.experienceStep.independent = false;
    //   state.experienceStep.tutor = false;
    //   state.experienceStep.experienceOther = false;
    //   state.experienceStep.inPerson = false;
    //   state.experienceStep.liveOnline = false;
    //   state.experienceStep.recordedOnline = false;
    //   state.experienceStep.mediumOther = false;
    //   state.experienceStep.years = "";
    // },
  },
});
export const {
  incrementCoursesSteps,
  decrementCoursesSteps,
  resetCoursesSteps,
//   experienceSteps,
//   resetExperienceStepValues
} = coursesStepsSlice.actions;
export default coursesStepsSlice.reducer;
