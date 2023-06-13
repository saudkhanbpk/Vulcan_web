import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // showSignUpModal: false,
  // showLoginModal: false,
  isOpenModal: false,
  chooseModal: 0,
};

export const counterSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // openLoginModal: (state) => {
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
  },
});

export const { openLoginModal, openSignUpModal, closeModals, chooseModalLogin, chooseModalSignUp, closeChooseModal  } =
  counterSlice.actions;

export default counterSlice.reducer;
