import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 
  // showLoginModal: false,
  isOpenModal: false,
  chooseModal: 0,
  stepOneData: [],
  stepTwoData: [],

};

export const counterSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
  
    //   state.showLoginModal = true;
    //   state.showSignUpModal = false;
    //   console.log("Login accessed");
    //   console.log("Login Status", state.showLoginModal);
    //   console.log("Sign Up Status", state.showSignUpModal);
    // },
    // openSignUpModal: (state) => {
    //   state.showSignUpModal = true;
    //   state.showLoginModal = false;
    //   console.log("Sign Up accessed");
    //   console.log("Login Status", state.showLoginModal);
    //   console.log("Sign Up Status", state.showSignUpModal);
    // },
    // closeModals: (state) => {
    //   state.showLoginModal = false;
    //   state.showSignUpModal = false;
    //   console.log("CloseModal accessed");
    //   console.log("Login Status", state.showLoginModal);
    //   console.log("Sign Up Status", state.showSignUpModal);
    // },
    chooseModalLogin: (state) => {
      state.chooseModal = 1;
      state.isOpenModal= true

    },
    chooseModalSignUp: (state) => {
      state.chooseModal = 2;
      state.isOpenModal= true

    },
    closeChooseModal: (state) => {
      state.chooseModal = 0;
      state.isOpenModal= false
    },
    eduRegSteps: (state, action) => {
      console.log("action value:", action);
      
    
      if (action.payload.step === "1") {
        return {
          ...state,
          stepOneData: state.stepOneData.includes(action.payload.optionValue)
            ? state.stepOneData.filter((value) => value !== action.payload.optionValue)
            : [...state.stepOneData, action.payload.optionValue],
        }
        
      }
      if (action.payload.step === "2") {
        return {
          ...state,
          stepTwoData: state.stepTwoData.includes(action.payload.optionValue)
            ? state.stepTwoData.filter((value) => value !== action.payload.optionValue)
            : [...state.stepTwoData, action.payload.optionValue],
        };
      }
      return state; // Return the current state if the conditions are not met
    },
  },
});

export const { openLoginModal, openSignUpModal, closeModals, chooseModalLogin, chooseModalSignUp, closeChooseModal,eduRegSteps  } =
  counterSlice.actions;

export default counterSlice.reducer;
