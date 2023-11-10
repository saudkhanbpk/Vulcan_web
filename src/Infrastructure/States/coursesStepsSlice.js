import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  courseSteps: 1,
  basicStepState:{
    categoryValue: "",
    courseTitle: "",
  }
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
      const {question, categoryValue, courseTitle } = action.payload;
      console.log("payload", action.payload)
      console.log("question",question)
      console.log("courseTitle", action.payload)
      
      if (question == "category") {
        state.basicStepState.categoryValue = categoryValue;
      } else if (question === "courseTitle") {
        state.basicStepState.courseTitle = courseTitle;
      }
      return state;
    },
    resetBasicStepValues: (state) => {
      state.basicStepState.courseTitle = "";
      state.basicStepState.categoryValue = "";
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
