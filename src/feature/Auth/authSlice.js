import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  showSignUpModal: false,
  showLoginModal:false,
  closeModal:false,
}

export const counterSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    openLoginModal: (state) => {
        state.showLoginModal = true;
        state.showSignUpModal = false;

        console.log("Login accessed")
        console.log("Login Status",state.showLoginModal)
        console.log("Sign Up Status",state.showSignUpModal)
      },
      openSignUpModal: (state) => {
        state.showSignUpModal = true;
        state.showLoginModal = false;
        console.log("Sign Up accessed")
        console.log("Login Status",state.showLoginModal)
        console.log("Sign Up Status",state.showSignUpModal)

      },
      closeModals: (state) => {
        state.showLoginModal = false;
        state.showSignUpModal = false;
        console.log("CloseModal accessed")
        console.log("Login Status",state.showLoginModal)
        console.log("Sign Up Status",state.showSignUpModal)

      },
  },
})

export const { openLoginModal, openSignUpModal,closeModals } = counterSlice.actions

export default counterSlice.reducer