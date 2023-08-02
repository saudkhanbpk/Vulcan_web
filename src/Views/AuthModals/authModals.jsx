import React from "react";
import { Box } from "@mui/material";

import "./authModals.scss";

import { useSelector } from "react-redux";

import { ModalTypes } from "../../Infrastructure/States/authModalsSlice";

import { VerifyEmail } from "../Common/AuthModals/VerifyEmail/verifyEmail";
import { ResetPassword } from "../Common/AuthModals/ResetPassword/resetPassword";
import { CreateAccount } from "../Common/AuthModals/CreateAccount/createAccount";
import { LoginAccount } from "../Common/AuthModals/LoginAccount/loginAccount";
import { ModalBackgroundBox } from "./authModalsStyles";

function AuthModals({ chooseModal }) {
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
export default AuthModals;
