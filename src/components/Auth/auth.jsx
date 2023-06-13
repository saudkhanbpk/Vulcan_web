import React, { useState } from "react";
import { Box, Modal, Typography, TextField, Button } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./Auth.scss";
import CloseIcon from "@mui/icons-material/Close";
import {
  AuthButton,
  ChooseAccBox,
  CreateAccButton,
  FormBox,
  Heading,
  MainBox,
  ModalBackgroundBox,
  SignInTextLink,
} from "./signUpStyles";
import { useDispatch, useSelector } from "react-redux";
import {
  closeModals,
  //   openLoginModal,
  //   openSignUpModal,
  chooseModalLogin,
  chooseModalSignUp,
  closeChooseModal,
} from "../../feature/Auth/authSlice";
import { Link } from "react-router-dom";
import { LoginFormBox, LoginMainBox, LoginSigUpTextLink } from "./loginStyles";
function Auth({ chooseModal }) {
  
  const isOpenModal = useSelector((state) => state.auth.isOpenModal);
  console.log(isOpenModal,"isopen mdal");
  //   const [show, setshow] = useState(2);
  const [selectedButton, setSelectedButton] = useState(true);
  //   const showLoginModal = useSelector((state) => state.auth.showLoginModal);
  const dispatch = useDispatch();
  console.log(chooseModal);

  const handleCloseModal = () => {
    dispatch(closeChooseModal());
    formik.resetForm();
  };

  const handleButtonClick = (val) => {
    if (val.value === 1) {
      setSelectedButton(true);
      console.log("student acc");
    } else {
      setSelectedButton(false);
      console.log("Educator acc");
    }
  };

  const isPasswordValid = (password) => {
    const specialCharacters = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/;
    return specialCharacters.test(password);
  };

  const getPasswordError = () => {
    if (formik.touched.password && !isPasswordValid(formik.values.password)) {
      return "Add Special Character";
    }
    return "";
  };
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      reEnterPassword: "",
      phoneNumber: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First Name"),
      lastName: Yup.string().required("Last Name"),
      email: Yup.string().email("Invalid email address").required("Email"),
      password: Yup.string()
        .min(6, "Must be 6 characters")
        .required("Password"),
      reEnterPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Re Enter Password"),
      phoneNumber: Yup.string(),
    }),

    onSubmit: (values) => {
      console.log("===========================");
      console.log(values);
      console.log("===========================");
    },
  });
  console.log(formik.errors);
  //   const handleLoginButtonClick = () => {
  //     dispatch(openLoginModal());
  //   };
  const handleLoginButtonClick = () => {
    dispatch(chooseModalLogin());
  };
  //  ===================Login Logic=======================================
  //   const showSignUpModal = useSelector((state) => state.auth.showSignUpModal);
  //   const dispatch = useDispatch();

  //   const handleSignUpButtonClick = () => {
  //     dispatch(openSignUpModal());
  //   };
  const handleSignUpButtonClick = () => {
    dispatch(chooseModalSignUp());
  };
  //   const handleCloseModal = () => {
  //     dispatch(closeModals());
  //     formik.resetForm();
  //   };
  const loginFormik = useFormik({
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
      console.log(loginFormik.errors);
    },
  });
  return (
    <Box>

      {chooseModal === 2 && isOpenModal? (
          <Box>
          <ModalBackgroundBox />
          <Modal
          open={chooseModal}
          onClose={handleCloseModal}
          aria-labelledby="login-modal-title"
          aria-describedby="login-modal-description"
        >
          <MainBox>
            <Box
              onClick={handleCloseModal}
              sx={{
                position: "relative",
                top: "9px",
                right: {
                  md: "-187px",
                  sm: "-159px",
                  xs: "-159px",
                },
              }}
            >
              <CloseIcon />
            </Box>
            <Heading variant="h1">Create Account</Heading>
            <Box>
              <SignInTextLink variant="h6" onClick={handleLoginButtonClick}>
                Already have an account? Log In
              </SignInTextLink>
            </Box>

            <ChooseAccBox>
              <AuthButton
                onClick={(e) => handleButtonClick({ value: 1 })}
                sx={{
                  background: selectedButton ? "#000FFF" : "#D9D9D9E5",
                  color: selectedButton ? "white" : "black",
                }}
              >
                Student Account
              </AuthButton>
              <AuthButton
                onClick={(e) => handleButtonClick({ value: 2 })}
                sx={{
                  background: selectedButton ? "#D9D9D9E5" : "#000FFF",
                  color: selectedButton ? "black" : "white",
                }}
              >
                Educator Account
              </AuthButton>
            </ChooseAccBox>
            <FormBox component="form" onSubmit={formik.handleSubmit} noValidate>
              <TextField
                name="firstName"
                label={
                  formik.touched.firstName && Boolean(formik.errors.firstName)
                    ? `${formik.errors.firstName}`
                    : "First Name"
                }
                variant="standard"
                onChange={formik.handleChange}
                value={formik.values.firstName}
                error={
                  formik.touched.firstName && Boolean(formik.errors.firstName)
                }
                InputLabelProps={{
                  style: { fontSize: 16 },
                }}
                inputProps={{
                  // style: { fontSize: 18 },
                  style: { fontSize: 18, width: 'calc(100% - 64px)', paddingLeft: '32px', paddingRight: '32px' },

                }}
              />
              <TextField
                name="lastName"
                sx={{ mt: "6px" }}
                label={
                  formik.touched.lastName && Boolean(formik.errors.lastName)
                    ? `${formik.errors.lastName}`
                    : "Last Name"
                }
                variant="standard"
                onChange={formik.handleChange}
                value={formik.values.lastName}
                error={
                  formik.touched.lastName && Boolean(formik.errors.lastName)
                }
                InputLabelProps={{
                  style: { fontSize: 16 },
                }}
                inputProps={{
                  style: { fontSize: 18, width: 'calc(100% - 64px)', paddingLeft: '32px', paddingRight: '32px' },

                }}
              />
              <TextField
                // id="email"
                name="email"
                sx={{ mt: "6px" }}
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
                  style: { fontSize: 18, width: 'calc(100% - 64px)', paddingLeft: '32px', paddingRight: '32px' },

                }}
              />

              <TextField
                // id="password"
                name="password"
                sx={{ mt: "6px" }}
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
                  formik.touched.password &&
                  !isPasswordValid(formik.values.password)
                }
                InputLabelProps={{
                  style: {
                    color:
                      (formik.touched.password &&
                        Boolean(formik.errors.password)) ||
                      getPasswordError()
                        ? "red"
                        : undefined,
                    fontSize: 16,
                  },
                }}
                inputProps={{
                  style: { fontSize: 18, width: 'calc(100% - 64px)', paddingLeft: '32px', paddingRight: '32px' },

                }}
              />

              <TextField
                // id="reEnterPassword"
                name="reEnterPassword"
                sx={{ mt: "6px" }}
                label={
                  formik.touched.reEnterPassword &&
                  formik.values.password !== formik.values.reEnterPassword
                    ? "Passwords do not match"
                    : "Re-enter Password"
                }
                variant="standard"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.reEnterPassword}
                error={
                  formik.touched.reEnterPassword &&
                  formik.values.password !== formik.values.reEnterPassword
                }
                InputLabelProps={{
                  style: {
                    fontSize: 16,
                  },
                }}
                inputProps={{
                  style: { fontSize: 18, width: 'calc(100% - 64px)', paddingLeft: '32px', paddingRight: '32px' },

                }}
              />

              <TextField
                // id="phoneNumber"
                name="phoneNumber"
                sx={{ mt: "6px" }}
                label={
                  formik.touched.phoneNumber &&
                  Boolean(formik.errors.phoneNumber)
                    ? `${formik.errors.phoneNumber}`
                    : "Phone Number"
                }
                variant="standard"
                onChange={formik.handleChange}
                value={formik.values.phoneNumber}
                error={
                  formik.touched.phoneNumber &&
                  Boolean(formik.errors.phoneNumber)
                }
                InputLabelProps={{
                  style: { fontSize: 16 },
                }}
                inputProps={{
                  style: { fontSize: 18, width: 'calc(100% - 64px)', paddingLeft: '32px', paddingRight: '32px' },

                }}
              />

              <Box pt={3}>
                <CreateAccButton
                  type="submit"
                  variant="contained"
                  sx={{ width: "150px" }}
                  onClick={() => console.log("Create Acc button Clicked!")}
                >
                  <Typography style={{ fontSize: "16px" }}>
                    Create Account
                  </Typography>
                </CreateAccButton>
              </Box>
            </FormBox>
          </MainBox>
        </Modal>
      </Box>
      ) : chooseModal === 1 && isOpenModal ?  (
        <Box>
          <ModalBackgroundBox />
        <Modal
          open={chooseModal}
          onClose={handleCloseModal}
          aria-labelledby="login-modal-title"
          aria-describedby="login-modal-description"
        >
          <LoginMainBox>
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
              <LoginSigUpTextLink
                onClick={handleSignUpButtonClick}
                variant="h6"
                sx={{ fontSize: "16px" }}
              >
                New? Create An Account.
              </LoginSigUpTextLink>
            </Box>
            <LoginFormBox
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
                    style: { fontSize: 18 },
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
                    style: { fontSize: 18 },
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
            </LoginFormBox>
          </LoginMainBox>
        </Modal>
      </Box>

      ):null}
      
    </Box>
  );
}

export default Auth;
