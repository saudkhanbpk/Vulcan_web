import { createSlice } from "@reduxjs/toolkit";

export const ModalTypes = {
  LOGIN: "login",
  SIGNUP: "signup",
  RESET_PASSWORD: "resetPassword",
  EMAIL_VERIFICATION: "emailVerification",
};

const initialState = {
  isOpenModal: false,
  chooseModal: null,
  isEmailVerified: false,
  isVerifyingEmail: false,
  verificationError: null,
  selectIsEmailVerified: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    chooseModalLogin: (state) => {
      state.chooseModal = ModalTypes.LOGIN;
      state.isOpenModal = true;
    },
    chooseModalSignUp: (state) => {
      state.chooseModal = ModalTypes.SIGNUP;
      state.isOpenModal = true;
    },
    chooseModalResetPass: (state) => {
      state.chooseModal = ModalTypes.RESET_PASSWORD;
      state.isOpenModal = true;
    },
    chooseModalEmailVerify: (state) => {
      state.chooseModal = ModalTypes.EMAIL_VERIFICATION;
      state.isOpenModal = true;
    },
    closeChooseModal: (state) => {
      state.chooseModal = null;
      state.isOpenModal = false;
    },
},
});

export const {
  chooseModalLogin,
  chooseModalSignUp,
  chooseModalResetPass,
  chooseModalEmailVerify,
  closeChooseModal,
} = authSlice.actions;

export default authSlice.reducer;
