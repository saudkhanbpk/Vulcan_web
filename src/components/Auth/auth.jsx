import React, { useState } from "react";
import {
  Box,
  Modal,
  Typography,
  TextField,
  Button,
  InputAdornment,
  IconButton,
} from "@mui/material";
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
  chooseModalLogin,
  chooseModalSignUp,
  closeChooseModal,
  isUserExistMethod,
} from "../../feature/Auth/authSlice";
import { Link, useNavigate } from "react-router-dom";
import { LoginFormBox, LoginMainBox, LoginSigUpTextLink } from "./loginStyles";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../config/config";

function Auth({ chooseModal }) {
  const isOpenModal = useSelector((state) => state.auth.isOpenModal);
  const [selectedButton, setSelectedButton] = useState(true);

  const [showPassword, setShowPassword] = useState(true);
  const [showRePassword, setShowRePassword] = useState(true);

  const navigate = useNavigate();

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleToggleRePasswordVisibility = () => {
    setShowRePassword(!showRePassword);
  };

  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(closeChooseModal());
    formik.resetForm();
    loginFormik.resetForm();
  };

  const handleButtonClick = (val) => {
    if (val.value === 1) {
      setSelectedButton(true);
      console.log("Student acc btn clicked");
    } else {
      setSelectedButton(false);
      console.log("Educator acc btn clicked");
    }
  };

  const isPasswordValid = (password) => {
    const specialCharacters = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/;
    return specialCharacters.test(password);
  };

  /////// Signup Formik call
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

    onSubmit: async (values) => {
      try {
        const { email, password } = values;
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        console.log("-----------------------------------");
        console.log(userCredential);
        console.log("----------------------------------");
        const { email: userEmail, displayName, uid } = userCredential.user;
        let payload = { email: userEmail, displayName, uid };

        // localStorage.setItem("userData", JSON.stringify(payload));

        dispatch(isUserExistMethod(payload));

        setTimeout(() => {
          navigate("/");
          handleCloseModal();
        }, 0);
      } catch (error) {
        console.error("Signup failed:", error.message);
      }
    },
  });

  const handleLoginButtonClick = () => {
    dispatch(chooseModalLogin());
    formik.resetForm();
  };
  //  ===================Login Logic=======================================

  const handleSignUpButtonClick = () => {
    dispatch(chooseModalSignUp());
    loginFormik.resetForm();
  };

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

    onSubmit: async (values) => {
      try {
        const { email, password } = values;
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        const { email: userEmail, displayName, uid } = userCredential.user;
        let payload = { email: userEmail, displayName, uid };

        // localStorage.setItem("userData", JSON.stringify(payload));

        dispatch(isUserExistMethod(payload));
        setTimeout(() => {
          navigate("/");
          handleCloseModal();
        }, 0);
      } catch (err) {
        console.log("Login Failed", err);
      }
    },
  });

  return (
    <Box>
      {chooseModal === "2" && isOpenModal ? (
        <>
          <ModalBackgroundBox />

          <Modal
            open={isOpenModal}
            onClose={handleCloseModal}
            aria-labelledby="login-modal-title"
            aria-describedby="login-modal-description"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <MainBox>
              <Box
                onClick={handleCloseModal}
                sx={{
                  position: "relative",
                  top: "9px !important",
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
                  onClick={(e) => {
                    handleButtonClick({ value: 2 });
                  }}
                  sx={{
                    background: selectedButton ? "#D9D9D9E5" : "#000FFF",
                    color: selectedButton ? "black" : "white",
                  }}
                >
                  Educator Account
                </AuthButton>
              </ChooseAccBox>
              <FormBox
                component="form"
                onSubmit={formik.handleSubmit}
                noValidate
              >
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
                  InputProps={{
                    style: { fontSize: 18 },
                  }}
                  fullWidth
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
                  InputProps={{
                    style: { fontSize: 18 },
                  }}
                  fullWidth
                />
                <TextField
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
                  InputProps={{
                    style: { fontSize: 18 },
                  }}
                  fullWidth
                />

                <TextField
                  name="password"
                  sx={{ mt: "6px" }}
                  label={
                    formik.touched.password && Boolean(formik.errors.password)
                      ? formik.errors.password
                      : "Password"
                  }
                  variant="standard"
                  type={showPassword ? "password" : "text"}
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  error={
                    formik.touched.password &&
                    !isPasswordValid(formik.values.password)
                  }
                  InputLabelProps={{
                    style: {
                      fontSize: 16,
                    },
                  }}
                  InputProps={{
                    style: { fontSize: 18 },
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={handleTogglePasswordVisibility}>
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  fullWidth
                />

                <TextField
                  name="reEnterPassword"
                  sx={{ mt: "6px" }}
                  label={
                    formik.touched.reEnterPassword &&
                    formik.values.password !== formik.values.reEnterPassword
                      ? "Passwords do not match"
                      : "Re-enter Password"
                  }
                  variant="standard"
                  type={showRePassword ? "password" : "text"}
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
                  InputProps={{
                    style: { fontSize: 18 },
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={handleToggleRePasswordVisibility}>
                          {showRePassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  fullWidth
                />

                <TextField
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
                  InputProps={{
                    style: { fontSize: 18 },
                  }}
                  fullWidth
                />

                <Box pt={3}>
                  <CreateAccButton
                    type="submit"
                    variant="contained"
                    sx={{ width: "150px" }}
                  >
                    <Typography style={{ fontSize: "16px" }}>
                      Create Account
                    </Typography>
                  </CreateAccButton>
                </Box>
              </FormBox>
            </MainBox>
          </Modal>
        </>
      ) : chooseModal === "1" && isOpenModal ? (
        <>
          <ModalBackgroundBox />
          <Modal
            open={isOpenModal}
            onClose={handleCloseModal}
            aria-labelledby="login-modal-title"
            aria-describedby="login-modal-description"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
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
                onSubmit={loginFormik.handleSubmit}
                noValidate
              >
                <TextField
                  name="email"
                  label={
                    loginFormik.touched.email &&
                    Boolean(loginFormik.errors.email)
                      ? `${loginFormik.errors.email}`
                      : "Email"
                  }
                  variant="standard"
                  onChange={loginFormik.handleChange}
                  value={loginFormik.values.email}
                  error={
                    loginFormik.touched.email &&
                    Boolean(loginFormik.errors.email)
                  }
                  InputLabelProps={{
                    style: { fontSize: 16 },
                  }}
                  inputProps={{
                    style: { fontSize: 18 },
                  }}
                  fullWidth
                />

                <TextField
                  name="password"
                  label={
                    loginFormik.touched.password &&
                    Boolean(loginFormik.errors.password)
                      ? loginFormik.errors.password
                      : "Password"
                  }
                  variant="standard"
                  type={showPassword ? "password" : "text"}
                  onChange={loginFormik.handleChange}
                  value={loginFormik.values.password}
                  error={
                    loginFormik.touched.password &&
                    Boolean(loginFormik.errors.password)
                  }
                  sx={{ pb: "14px", pt: "5" }}
                  InputLabelProps={{
                    style: {
                      fontSize: 16,
                    },
                  }}
                  InputProps={{
                    style: { fontSize: 18 },
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={handleTogglePasswordVisibility}>
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  fullWidth
                />

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
                  >
                    Log In
                  </Button>
                </Box>
              </LoginFormBox>
            </LoginMainBox>
          </Modal>
        </>
      ) : null}
    </Box>
  );
}

export default Auth;
