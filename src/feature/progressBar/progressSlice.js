import { createSlice } from "@reduxjs/toolkit";

const initialState = {
steps:1
};

export const progressSlice = createSlice({
  name: "progressBar",
  initialState,
  reducers:{
    incrementSteps:(state)=>{
        if (state.steps < 3) {
            state.steps = state.steps + 1;
          }
    },
    
    decrementSteps:(state)=>{
        if (state.steps < 3) {
            state.steps = state.steps - 1;
          }
    },

  }
});

export const {  incrementSteps, decrementSteps } =
progressSlice.actions;

export default progressSlice.reducer;
