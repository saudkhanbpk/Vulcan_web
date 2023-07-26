import { createSlice } from "@reduxjs/toolkit";

export const ModalTypes = {
  LOGIN: "login",
  SIGNUP: "signup",
  RESET_PASSWORD: "resetPassword",
};

const initialState = {
  isOpenModal: false,
  chooseModal: null,
};

export const counterSlice = createSlice({
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
    closeChooseModal: (state) => {
      state.chooseModal = null;
      state.isOpenModal = false;
    },
  },
});

export const {
  chooseModalLogin,
  chooseModalSignUp,
  closeChooseModal,
  chooseModalResetPass,
  handleMenu
} = counterSlice.actions;

export default counterSlice.reducer;
