import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpenModal: false,
  chooseModal: "0",
  stepOneData: [],
  stepTwoData: [],
  user: {},
};

export const counterSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    chooseModalLogin: (state) => {
      state.chooseModal = "1";
      state.isOpenModal = true;
    },
    chooseModalSignUp: (state) => {
      state.chooseModal = "2";
      state.isOpenModal = true;
    },
    closeChooseModal: (state) => {
      state.chooseModal = "0";
      state.isOpenModal = false;
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

    isUserExistMethod: (state, action) => {
      const newUser = action.payload;
      state.user = newUser;
    },

    isUserExistMethodFalse: (state) => {
      state.user = {};
    },
  },
});

export const {
  openLoginModal,
  openSignUpModal,
  closeModals,
  chooseModalLogin,
  chooseModalSignUp,
  closeChooseModal,
  eduRegSteps,
  isUserExistMethodFalse,
  isUserExistMethod,
} = counterSlice.actions;

export default counterSlice.reducer;
