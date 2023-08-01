import React, { useEffect, useState } from "react";
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
import "./Styles/Auth.scss";
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
} from "./Styles/signUpStyles";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  LoginFormBox,
  LoginMainBox,
  LoginSigUpTextLink,
} from "./Styles/loginStyles";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAuth,
  sendPasswordResetEmail,
  fetchSignInMethodsForEmail,
  sendEmailVerification,
} from "firebase/auth";

import { ResetPassFormBox, ResetPassMainBox } from "./Styles/resetPassStyles";
import { mainFont } from "../../Theme/fontFamily";
import {
  ModalTypes,
  chooseModalLogin,
  chooseModalResetPass,
  chooseModalSignUp,
  closeChooseModal,
  chooseModalEmailVerify,
} from "../../feature/Auth/authSlice";

import { ShowErrorToast, ShowSuccessToast } from "../../components/Toast/toast";
import {
  VerifyEmailFormBox,
  VerifyEmailMainBox,
} from "./Styles/verifyEmailStyles";
import { useAuthValue } from "../../contexts/AuthContext";

function Auth({ chooseModal }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isOpenModal = useSelector((state) => state.auth.isOpenModal);
  const { currentUser } = useAuthValue();
  const [selectedButton, setSelectedButton] = useState(true);
  const [showPassword, setShowPassword] = useState(true);
  const [showRePassword, setShowRePassword] = useState(true);
  const [initialClick, setInitialClick] = useState(false);
  const { timeActive, setTimeActive } = useAuthValue();
  const [errorToast, setErrorToast] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [time, setTime] = useState(60);

  const auth = getAuth();
  const user = auth.currentUser;

  const userEmailAddress = user?.email || "test1@vulcanlearninginstitute.com";

  const handleVerifiedEmailAction = () => {
    handleCloseModal(); // Close the modal if email is verified
    // You can handle navigation or any other action here
  };
  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleToggleRePasswordVisibility = () => {
    setShowRePassword(!showRePassword);
  };

  const handleCloseModal = () => {
    dispatch(closeChooseModal());
    formik.resetForm();
    loginFormik.resetForm();
    resetPassFormik.resetForm();
  };

  //Student & Teacher acc changing functionality
  const handleButtonClick = (val) => {
    if (val.value === 1) {
      setSelectedButton(true);
    } else {
      setSelectedButton(false);
    }
  };

  const isPasswordValid = (password) => {
    const specialCharacters = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/;
    return specialCharacters.test(password);
  };

  const handleLoginButtonClick = () => {
    dispatch(chooseModalLogin());
    formik.resetForm();
  };
  const handleResetPassButtonClick = () => {
    dispatch(chooseModalResetPass());
    setInitialClick(false);
    resetPassFormik.resetForm();
  };
  const handleVerifyButtonClick = () => {
    dispatch(chooseModalEmailVerify());
  };

  const handleSignUpButtonClick = () => {
    dispatch(chooseModalSignUp());
    loginFormik.resetForm();
  };

  const resendEmailVerification = () => {
    sendEmailVerification(auth.currentUser)
      .then(() => {
        setTimeActive(true);
      })
      .catch((err) => {
        alert(err.message);
      });
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
        .required("Re Enter Password."),
      phoneNumber: Yup.string(),
    }),

    onSubmit: async (values) => {
      const { email, password } = values;

      await createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          ShowSuccessToast("Account created successfully!");
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
        })
        .catch((error) => {
          if (error.code === "auth/email-already-in-use") {
            ShowErrorToast("Email already exists, Try another Email!");
          } else if (error.code === "auth/weak-password") {
            ShowErrorToast("Weak password, please choose a stronger one!");
          } else if (error.code === "auth/user-token-expired)") {
            ShowErrorToast("User has been expired please login again");
            dispatch(chooseModalLogin());
          } else {
            ShowErrorToast(
              "An unexpected error occurred. Please try again later."
            );
          }
        });
    },
  });

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

  const validationSchemaForResetPass = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email")
      .test("email-exists", "Email does not exist", async function (value) {
        if (!value) return true; // Skip validation if the email field is empty

        // Check if the email exists in Firebase
        try {
          const signInMethods = await fetchSignInMethodsForEmail(auth, value);
          return signInMethods.length > 0; // Email exists if sign-in methods are returned
        } catch (error) {
          return false; // Email does not exist
        }
      }),
  });
  const resetPassFormik = useFormik({
    initialValues: {
      email: "",
    },

    validationSchema: validationSchemaForResetPass,
    onSubmit: async (values) => {
      const { email } = values;
      await sendPasswordResetEmail(auth, email)
        .then(() => {
          setEmailSent(true);
          ShowSuccessToast("Email Sent!");

          // Set showMessage to false after 5 seconds
          setTimeout(() => {}, 8000);
        })
        .catch((error) => {});
    },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      currentUser
        ?.reload()
        .then(() => {
          if (currentUser?.emailVerified) {
            clearInterval(interval);
            setTimeout(() => {
              handleCloseModal();
            }, 8000);
          }
        })
        .catch((err) => {
          alert(err.message);
        });
    }, 1000);
  }, [navigate, currentUser]);

  useEffect(() => {
    let interval = null;
    if (timeActive && time !== 0) {
      interval = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);
    } else if (time === 0) {
      setTimeActive(false);
      setTime(60);
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timeActive, time, setTimeActive]);

  return (
      <Box>
        {chooseModal === ModalTypes.SIGNUP && isOpenModal ? (
          <>
            {/* Sign Up Modal */}
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
                <Heading variant="h1" onClick={handleVerifyButtonClick}>
                  Create Account
                </Heading>
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
                      formik.touched.firstName &&
                      Boolean(formik.errors.firstName)
                        ? `${formik.errors.firstName}`
                        : "First Name"
                    }
                    variant="standard"
                    onChange={formik.handleChange}
                    value={formik.values.firstName}
                    error={
                      formik.touched.firstName &&
                      Boolean(formik.errors.firstName)
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
                          <IconButton
                            onClick={handleToggleRePasswordVisibility}
                          >
                            {showRePassword ? (
                              <VisibilityOff />
                            ) : (
                              <Visibility />
                            )}
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
        ) : chooseModal === ModalTypes.LOGIN && isOpenModal ? (
          <>
            {/* Log in Modal */}
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
                        ? loginFormik.errors.email
                        : "Email"
                    }
                    variant="standard"
                    type="email"
                    onChange={loginFormik.handleChange}
                    value={loginFormik.values.email}
                    error={
                      loginFormik.touched.email &&
                      Boolean(loginFormik.errors.email)
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
        ) : chooseModal === ModalTypes.RESET_PASSWORD && isOpenModal ? (
          <>
            {/* Reset Password Modal */}
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
              <ResetPassMainBox>
                <Box
                  px={2}
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
                  p={2}
                  color="primary"
                  sx={{ fontSize: "30px" }}
                >
                  Reset Password
                </Typography>

                <ResetPassFormBox
                  component="form"
                  onSubmit={resetPassFormik.handleSubmit}
                  noValidate
                >
                  <TextField
                    name="email"
                    sx={{ mt: "6px" }}
                    label={
                      resetPassFormik.touched.email &&
                      Boolean(resetPassFormik.errors.email)
                        ? `${resetPassFormik.errors.email}`
                        : "Email"
                    }
                    variant="standard"
                    onChange={resetPassFormik.handleChange}
                    value={resetPassFormik.values.email}
                    error={
                      resetPassFormik.touched.email &&
                      Boolean(resetPassFormik.errors.email)
                    }
                    InputLabelProps={{
                      style: { fontSize: 16 },
                    }}
                    InputProps={{
                      style: { fontSize: 18 },
                    }}
                    fullWidth
                  />
                  {/* If you don't like the toast message, we will show this message instead toast  */}
                  {/* <Box pt={2}>
                  {showMessage ? (
                    <Typography
                      variant="body2"
                      color={"secondary"}
                      sx={{
                        textDecoration: "none",
                        fontSize: "16px",
                        cursor: "pointer",
                        textAlign: "center",
                      }}
                    >
                      Email Sent! Click on the link in the email to reset your
                      password and then log in.
                    </Typography>
                  ) : (
                    <></>
                  )}
                </Box> */}

                  <Box p={2}>
                    <Box mt={3}>
                      <Button
                        type="submit"
                        variant="contained"
                        mt={4}
                        sx={{ width: "200px" }}
                        onClick={() => setInitialClick(true)}
                      >
                        {initialClick ? "Resend Email" : "Reset Password"}
                      </Button>
                    </Box>
                    {emailSent ? (
                      <Typography
                        variant="h1"
                        color="primary"
                        pt={4}
                        onClick={handleLoginButtonClick}
                        sx={{
                          textDecoration: "none",
                          fontSize: "30px",
                          cursor: "pointer",
                          textAlign: "center",
                          fontFamily: `${mainFont}`,
                        }}
                      >
                        Login
                      </Typography>
                    ) : null}
                  </Box>
                </ResetPassFormBox>
              </ResetPassMainBox>
            </Modal>
          </>
        ) : chooseModal === ModalTypes.EMAIL_VERIFICATION && isOpenModal ? (
          <>
            {/* Email Verification Modal */}
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
              <VerifyEmailMainBox>
                <Box
                  px={2}
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
                  p={2}
                  color="primary"
                  sx={{ fontSize: "30px" }}
                >
                  Verify Account
                </Typography>

                <VerifyEmailFormBox component="form" noValidate>
                  <Box
                    p={2}
                    display={"flex"}
                    flexDirection={"column"}
                    justifyContent={"space-around"}
                    alignItems={"center"}
                  >
                    <Box pt={2} pb={2}>
                      {/* Display email verification status */}
                      {currentUser?.emailVerified ? (
                        <Typography
                          variant="body2"
                          color="secondary"
                          sx={{
                            textDecoration: "none",
                            fontSize: "16px",
                            textAlign: "center",
                          }}
                        >
                          Email verified successfully now you can proceed to the
                          dashboard.
                        </Typography>
                      ) : (
                        <>
                          <Typography
                            variant="body2"
                            color="secondary"
                            sx={{
                              textDecoration: "none",
                              fontSize: "16px",
                              textAlign: "center",
                            }}
                          >
                            Verification Link sent to email <br />
                          </Typography>

                          <Typography
                            variant="body2"
                            color="secondary"
                            sx={{
                              textDecoration: "none",
                              fontSize: "16px",
                              textAlign: "center",
                              fontWeight: "900",
                              paddingTop: "4px",
                            }}
                          >
                            {userEmailAddress}
                          </Typography>
                        </>
                      )}
                    </Box>
                    {currentUser?.emailVerified ? (
                      <>
                        <Button
                          variant="contained"
                          onClick={handleVerifiedEmailAction}
                        >
                          Go to Dashboard
                        </Button>
                      </>
                    ) : (
                      <Box
                        pt={2}
                        pb={2}
                        display={"flex"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        sx={{ width: "200px" }}
                      >
                        <Button
                          variant="contained"
                          onClick={resendEmailVerification}
                          disabled={timeActive}
                        >
                          Resend Email {timeActive && time}
                        </Button>
                      </Box>
                    )}

                    <Typography
                      variant="body2"
                      color={"secondary"}
                      sx={{
                        textDecoration: "none",
                        fontSize: "16px",
                        cursor: "pointer",
                        textAlign: "center",
                        paddingTop: "20px",
                      }}
                    >
                      {currentUser?.emailVerified
                        ? "Enhance your skills with Vulcan Learning Inistitute LLC"
                        : "Not Seeing the email? Ensure your email is correct and check the spam/junk folder."}
                    </Typography>
                  </Box>
                </VerifyEmailFormBox>
              </VerifyEmailMainBox>
            </Modal>
          </>
        ) : null}
      </Box>
  );
}

export default Auth;
