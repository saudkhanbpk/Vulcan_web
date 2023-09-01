import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementSteps,
  incrementSteps,
} from "../../../../Infrastructure/States/educatorStepsSlice";
import {
  Box,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  ContinueButton,
  Footer,
  FormBoxEdu,
  PreviousButton,
  TopHeading,
  TopHeadingBox,
} from "../../styles";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { ShowErrorToast, ShowSuccessToast } from "../../../Common/Toast/toast";
import useAuthentication from "../../../../Infrastructure/States/onAuthStateChange";
import { fetchUserData } from "../../../../Infrastructure/States/userDataSlice";

export const CreateAccountStep = ({ controlSteps }) => {
  const auth = getAuth();
  const uid = auth.currentUser ? auth.currentUser.uid : null;
  const { user } = useAuthentication();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(true);
  const [showRePassword, setShowRePassword] = useState(true);
  const steps = useSelector((state) => state.educatorSteps.steps);
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const handleDec = () => {
    if (steps > 1) {
      dispatch(decrementSteps());
    }
  };
  const handleClick = () => {
    dispatch(incrementSteps());
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
        .required("Re Enter Password."),
      phoneNumber: Yup.string(),
    }),

    onSubmit: async (values) => {
      try {
        const { email, password, firstName, lastName, phoneNumber } = values;

        await createUserWithEmailAndPassword(auth, email, password).then(() => {
          ShowSuccessToast("Account created successfully!");
        });

        const requestData = {
          firstName: firstName,
          lastName: lastName,
          number: phoneNumber,
        };
        if (!formik.isValid) {
          return;
        }
        // const createUser = httpsCallable(functions, "createaccount");
        // await createUser(requestData);
        // if (!auth.currentUser.emailVerified) {
        //   await sendEmailVerification(auth.currentUser);
        //   setTimeActive(true);
        //   dispatch(chooseModalEmailVerify());
        // } else {
        //   Navigate("/");
        // }
        dispatch(incrementSteps());
      } catch (error) {
        handleRegistrationError(error);
      }
    },
  });
  const handleToggleRePasswordVisibility = () => {
    setShowRePassword(!showRePassword);
  };
  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleRegistrationError = (error) => {
    if (!error) {
      return; // Do nothing if there's no error
    }
    let errorMessage = "An unexpected error occurred. Please try again later.";
    switch (error.code) {
      case "auth/email-already-in-use":
        errorMessage = "Email already exists. Please try another email.";
        break;
      case "auth/weak-password":
        errorMessage = "Weak password. Please choose a stronger one.";
        break;
      case "auth/user-token-expired":
        errorMessage = "User session expired. Please log in again.";
        break;
      default:
        ShowErrorToast(error);
    }
    ShowErrorToast(errorMessage);
  };
  const isPasswordValid = (password) => {
    const specialCharacters = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/;
    return specialCharacters.test(password);
  };

  useEffect(() => {
    dispatch(fetchUserData(uid));
  }, [dispatch, uid]);

  return (
    <>
      <Box pt={14}>
        <TopHeadingBox>
          <TopHeading variant="" mt={5} ml={1}>
            {!user ? "  Create Account" : ""}
          </TopHeading>
        </TopHeadingBox>

        <Box component="form" onSubmit={formik.handleSubmit} noValidate>
          {!user ? (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <FormBoxEdu p={4}>
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
                  autoComplete="username"
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
                  autoComplete="username"
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
                  autoComplete="new-password"
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
                  autoComplete="new-Password"
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
                      : "Phone Number (Optional)"
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
              </FormBoxEdu>
            </Box>
          ) : (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
              }}
              p={5}
            >
              <Typography
                variant={isSmallScreen ? "body2" : "body1"}
                color="initial"
                textAlign={"center"}
              >
                Educator Account Created Successfully Move to Next Step.
              </Typography>
            </Box>
          )}
          <Footer>
            <Grid container justifyContent={"space-between"} p={2}>
              <Grid>
                {steps > 1 ? (
                  <PreviousButton variant="contained" onClick={handleDec}>
                    Previous
                  </PreviousButton>
                ) : (
                  <></>
                )}
              </Grid>
              <Grid>
                <Grid>
                  <ContinueButton
                    disabled={!formik.isValid && !user}
                    variant="contained"
                    type={!user ? "submit" : "button"}
                    onClick={user ? handleClick : undefined}
                  >
                    Continue
                  </ContinueButton>
                </Grid>
              </Grid>
            </Grid>
          </Footer>
        </Box>
      </Box>
    </>
  );
};
