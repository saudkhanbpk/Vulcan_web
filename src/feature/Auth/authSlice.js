import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpenModal: false,
  chooseModal: "0",
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
  },
});

export const { chooseModalLogin, chooseModalSignUp, closeChooseModal } =
  counterSlice.actions;

export default counterSlice.reducer;
