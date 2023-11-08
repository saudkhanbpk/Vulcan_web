import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  courseSteps: 1,
  basicStepState: {
    development: false,
    business: false,
    financeAndAccounting: false,
    itAndSoftware: false,
    officeProductivity: false,
    personalDevelopment: false,
    design: false,
    marketing: false,
    lifestyle: false,
    photographyAndVideo: false,
    healthAndFitness: false,
    music: false,
    teachingAndAcademics: false,
    iDontKnowYet: false,
    notSure: false,
    courseTitle: ""
  },
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
    basicStepControl: (state, action) => {
      const { name, checked, question, courseTitle } = action.payload;
      if (question == "objectives") {
        state.basicStepState[name] = checked;
      } else if (question === "courseTitle") {
        state.basicStepState.courseTitle = courseTitle;
      }
      return state;
    },
    resetBasicStepValues: (state) => {
      state.basicStepState.development = false;
      state.basicStepState.business = false;
      state.basicStepState.financeAndAccounting = false;
      state.basicStepState.itAndSoftware = false;
      state.basicStepState.officeProductivity = false;
      state.basicStepState.personalDevelopment = false;
      state.basicStepState.design = false;
      state.basicStepState.marketing = false;
      state.basicStepState.lifestyle = false;
      state.basicStepState.photographyAndVideo = false;
      state.basicStepState.healthAndFitness = false;
      state.basicStepState.music = false;
      state.basicStepState.teachingAndAcademics = false;
      state.basicStepState.iDontKnowYet = false;
      state.basicStepState.notSure = false;
    },
  },
});
export const {
  incrementCoursesSteps,
  decrementCoursesSteps,
  resetCoursesSteps,
  basicStepControl,
  resetBasicStepValues
} = coursesStepsSlice.actions;
export default coursesStepsSlice.reducer;
