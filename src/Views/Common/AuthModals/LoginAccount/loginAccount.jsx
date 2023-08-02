import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import {
  LoginFormBox,
  LoginMainBox,
  LoginSigUpTextLink,
} from "./loginAccountStyles";
import CloseIcon from "@mui/icons-material/Close";
import { Link, useNavigate } from "react-router-dom";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { useDispatch, useSelector } from "react-redux";
import {
  chooseModalEmailVerify,
  chooseModalResetPass,
  chooseModalSignUp,
  closeChooseModal,
} from "../../../../Infrastructure/States/authModalsSlice";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
    getAuth,
  sendEmailVerification,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { ShowErrorToast, ShowSuccessToast } from "../../Toast/toast";
import { useAuthValue } from "../../../../Infrastructure/States/authContext";

export const LoginAccount = () => {

  const auth = getAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isOpenModal = useSelector((state) => state.auth.isOpenModal);
  const { setTimeActive } = useAuthValue();
  const [errorToast, setErrorToast] = useState(false);
  const [showPassword, setShowPassword] = useState(true);


  const handleCloseModal = () => {
    dispatch(closeChooseModal());
    loginFormik.resetForm();
  };
  const handleSignUpButtonClick = () => {
    dispatch(chooseModalSignUp());
    loginFormik.resetForm();
  };
  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleResetPassButtonClick = () => {
    dispatch(chooseModalResetPass());
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
        await signInWithEmailAndPassword(auth, email, password).then(() => {
          if (!auth.currentUser.emailVerified) {
            sendEmailVerification(auth.currentUser)
              .then(() => {
                setTimeActive(true);
                dispatch(chooseModalEmailVerify());
              })
              .catch((err) => alert(err.message));
          } else {
            navigate("/");
          }
        });
        ShowSuccessToast("User Logged In Sucessfully", {
          autoClose: 3000,
          theme: "light",
        });
        navigate("/");
        handleCloseModal();
      } catch (error) {
        if (error.code === "auth/INVALID_PASSWORD") {
          setErrorToast(
            "Invalid password. Please check your password and try again."
          );
          ShowErrorToast(errorToast);
        } else {
          setErrorToast("Please try again later.");
          ShowErrorToast(errorToast);
        }
      }
    },
  });
  const customStyles = {
    backdrop: {
      backgroundColor: 'transparent', // Set the backdrop background color to transparent
    },
  };
  
  return (
    <Box>
      {/* Log in Modal */}
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
        BackdropProps={{
          sx: customStyles.backdrop, // Apply custom styles to the backdrop
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
                loginFormik.touched.email && Boolean(loginFormik.errors.email)
                  ? loginFormik.errors.email
                  : "Email"
              }
              variant="standard"
              type="email"
              onChange={loginFormik.handleChange}
              value={loginFormik.values.email}
              error={
                loginFormik.touched.email && Boolean(loginFormik.errors.email)
              }
              sx={{ pb: "14px", pt: "5" }}
              InputLabelProps={{
                style: {
                  fontSize: 16,
                },
              }}
              InputProps={{
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
                onClick={handleResetPassButtonClick}
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
              <Button type="submit" variant="contained" sx={{ width: "150px" }}>
                Log In
              </Button>
            </Box>
          </LoginFormBox>
        </LoginMainBox>
      </Modal>
    </Box>
  );
};
