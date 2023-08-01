import React from "react";
import { Box } from "@mui/material";

import "./Styles/Auth.scss";

import { useSelector } from "react-redux";

import { ModalTypes } from "../../Infrastructure/Feature/Auth/authSlice";

import { VerifyEmail } from "../Common/Modals/VerifyEmail/verifyEmail";
import { ResetPassword } from "../Common/Modals/ResetPassword/resetPassword";
import { CreateAccount } from "../Common/Modals/CreateAccount/createAccount";
import { LoginAccount } from "../Common/Modals/LoginAccount/loginAccount";
import { ModalBackgroundBox } from "./Styles/authStyles";

function Auth({ chooseModal }) {
  const isOpenModal = useSelector((state) => state.auth.isOpenModal);

  return (
  <>
    <Box>
      {isOpenModal && 
      <ModalBackgroundBox />
}
      {chooseModal === ModalTypes.SIGNUP && isOpenModal ? (
        <>
          {/* Sign Up Modal */}
          <CreateAccount />
        </>
      ) : chooseModal === ModalTypes.LOGIN && isOpenModal ? (
        <>
          {/* Log in Modal */}
          <LoginAccount />
        </>
      ) : chooseModal === ModalTypes.RESET_PASSWORD && isOpenModal ? (
        <>
          {/* Reset Password Modal */}
          <ResetPassword />
        </>
      ) : chooseModal === ModalTypes.EMAIL_VERIFICATION && isOpenModal ? (
        <>
          {/* Verify Email Modal */}
          <VerifyEmail />
        </>
      ) : null}


    </Box>
  </>
  );
}
export default Auth;
