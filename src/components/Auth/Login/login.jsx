import "./login.scss";

import React from "react";
import { Box, Modal, Typography, Link, TextField, Button } from "@mui/material";
import { FormBox, MainBox, ModalBackgroundBox, SigUpTextLink } from "./styles";
import { useFormik } from "formik";
import * as Yup from "yup";
import CloseIcon from "@mui/icons-material/Close";
import { closeModals, openSignUpModal } from "../../../feature/Auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import SignUpModal from "../SignUp/signUp";

const LoginModal = ({ show }) => {
  const showSignUpModal = useSelector((state) => state.auth.showSignUpModal);
  const dispatch = useDispatch();
 
  const handleSignUpButtonClick = () => {
    dispatch(openSignUpModal());
  };
  const handleCloseModal = () => {
    dispatch(closeModals());
    formik.resetForm();
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Email"),
      password: Yup.string()
        .min(6, "Must be 6 chatacters")
        .required("Password"),
    }),
    

    onSubmit: (values) => {
      console.log("===========================");
      console.log(values);
      console.log("===========================");
      console.log(formik.errors);
    },
  });
  return (
    <>
      {showSignUpModal && <SignUpModal show={showSignUpModal}/>}

      {show && (
        <Box>
          <ModalBackgroundBox/>
          <Modal
            open={show}
            onClose={handleCloseModal}
            aria-labelledby="login-modal-title"
            aria-describedby="login-modal-description"
          >
            <MainBox>
              <Box
                pb={1}
                pt={1}
                onClick={handleCloseModal}
                sx={{
                  position: "relative",
                  top: "9px",
                  right: "-142px",
                }}
              >
                <CloseIcon />
              </Box>
              <Typography
                variant="h1"
                px={4}
                pb={4}
                // pt={2}
                color="primary"
                sx={{ fontSize: "36px" }}
              >
                Log In
              </Typography>
              <Box>
                <SigUpTextLink
                  onClick={handleSignUpButtonClick}
                  variant="h6"
                  sx={{ fontSize: "16px" }}
                >
                  New? Create An Account.
                </SigUpTextLink>
              </Box>
              <FormBox
                component="form"
                onSubmit={formik.handleSubmit}
                noValidate
              >
                <Box sx={{ pb: "22px", pt: "20px" }}>
                  <TextField
                    // id="email"
                    name="email"
                    label={
                      formik.touched.email && Boolean(formik.errors.email)
                        ? `${formik.errors.email}`
                        : "Email"
                    }
                    variant="standard"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    InputLabelProps={{
                      style: { fontSize: 16 },
                    }}
                    inputProps={{
                      style: { fontSize: 20 },
                    }}
                  />
                </Box>
                <Box sx={{ pb: "22px", pt: "10px" }}>
                  <TextField
                    // id="password"
                    name="password"
                    label={
                      formik.touched.password && Boolean(formik.errors.password)
                        ? formik.errors.password
                        : "Password"
                    }
                    variant="standard"
                    type="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    error={
                      formik.touched.password && Boolean(formik.errors.password)
                    }
                    sx={{ pb: "14px", pt: "5" }}
                    InputLabelProps={{
                      style: {
                        fontSize: 16,
                      },
                    }}
                    inputProps={{
                      style: { fontSize: 20 },
                    }}
                  />
                </Box>

                <Box pb={2}>
                  <Link
                    href="#"
                    variant="body2"
                    sx={{ textDecoration: "none", fontSize: "16px" }}
                  ></Link>
                  <Typography
                    variant="body2"
                    color={"primary"}
                    onClick={() => alert("forgot password")}
                    sx={{
                      textDecoration: "none",
                      fontSize: "16px",
                      cursor: "pointer",
                    }}
                  >
                    Forgot password?
                  </Typography>
                </Box>

                <Box>
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{ width: "150px" }}
                    onClick={() => console.log("Sign In Clicked!")}
                  >
                    Log In
                  </Button>
                </Box>
              </FormBox>
            </MainBox>
          </Modal>
        </Box>
      )}
    </>
  );
};

export default LoginModal;
