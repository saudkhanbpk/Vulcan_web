import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementSteps,
  incrementSteps,
} from "../../../../Infrastructure/States/educatorStepsSlice";
import { Box, IconButton, InputAdornment, TextField } from "@mui/material";
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

export const CreateAccountStep = ({ controlSteps }) => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(true);
  const [showRePassword, setShowRePassword] = useState(true);
  const steps = useSelector((state) => state.educatorSteps.steps);

  const handleDec = () => {
    if (steps > 1) {
      dispatch(decrementSteps());
    }
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
      // firstName: Yup.string().required("First Name"),
      // lastName: Yup.string().required("Last Name"),
      // email: Yup.string().email("Invalid email address").required("Email"),
      // password: Yup.string()
      //   .min(6, "Must be 6 characters")
      //   .required("Password"),
      // reEnterPassword: Yup.string()
      //   .oneOf([Yup.ref("password"), null], "Passwords must match")
      //   .required("Re Enter Password."),
      // phoneNumber: Yup.string(),
    }),
    onSubmit: async (values) => {
      dispatch(incrementSteps());
      // try {
      //   const { email, password, firstName, lastName, phoneNumber } = values;
      //   await createUserWithEmailAndPassword(auth, email, password);
      //   const requestData = {
      //     firstName: firstName,
      //     lastName: lastName,
      //     number: phoneNumber,
      //     isEducator: isEducator,
      //   };
      //   if (!formik.isValid) {
      //     return; // Exit early if form is not valid
      //   }
      //   const createUser = httpsCallable(functions, "createaccount");
      //   await createUser(requestData);
      //   ShowSuccessToast("Account created successfully!");
      //   if (!auth.currentUser.emailVerified) {
      //     await sendEmailVerification(auth.currentUser);
      //     setTimeActive(true);
      //     dispatch(chooseModalEmailVerify());
      //   } else {
      //     navigate("/");
      //   }
      // } catch (error) {
      //   handleRegistrationError(error);
      // }
    },
  });
  const handleToggleRePasswordVisibility = () => {
    setShowRePassword(!showRePassword);
  };
  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const isPasswordValid = (password) => {
    const specialCharacters = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/;
    return specialCharacters.test(password);
  };
  return (
    <Box pt={14}>
      <TopHeadingBox>
        <TopHeading variant="" mt={5} ml={1}>
          Create Account
        </TopHeading>
      </TopHeadingBox>

      <Box component="form" onSubmit={formik.handleSubmit} noValidate>
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
              error={formik.touched.lastName && Boolean(formik.errors.lastName)}
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
                formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)
                  ? `${formik.errors.phoneNumber}`
                  : "Phone Number (Optional)"
              }
              variant="standard"
              onChange={formik.handleChange}
              value={formik.values.phoneNumber}
              error={
                formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)
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
                  // disabled={!step1Data.length > 0}
                  variant="contained"
                  type="submit"
                >
                  Continue
                </ContinueButton>
              </Grid>
            </Grid>
          </Grid>
        </Footer>
      </Box>
    </Box>
  );
};
