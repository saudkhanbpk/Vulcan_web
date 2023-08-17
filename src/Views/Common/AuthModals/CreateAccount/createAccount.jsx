import React, { useState } from "react";
import {
  Box,
  IconButton,
  InputAdornment,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { ShowErrorToast, ShowSuccessToast } from "../../Toast/toast";
import {
  chooseModalEmailVerify,
  chooseModalLogin,
  closeChooseModal,
} from "../../../../Infrastructure/States/authModalsSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  ChooseAccBox,
  CreateAccButton,
  FormBox,
  Heading,
  MainBox,
  SignUpTextLink,
  StyledToggleButtonGroup,
  ToggleBtn,
} from "./createAccountStyles";
import CloseIcon from "@mui/icons-material/Close";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { useNavigate } from "react-router-dom";
import { useAuthValue } from "../../../../Infrastructure/States/authContext";
import { app, auth } from "../../../../Infrastructure/config";
import { getFunctions, httpsCallable } from "firebase/functions";

export const CreateAccount = () => {
  const functions = getFunctions(app);
  const setupAccountFunction = httpsCallable(functions, "createaccount");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isOpenModal = useSelector((state) => state.auth.isOpenModal);
  const [showPassword, setShowPassword] = useState(true);
  const [showRePassword, setShowRePassword] = useState(true);

  const [isEducator, setIsEducator] = useState("student");
  const { setTimeActive } = useAuthValue();

  const handleCloseModal = () => {
    dispatch(closeChooseModal());
    formik.resetForm();
  };
  const handleLoginButtonClick = () => {
    dispatch(chooseModalLogin());
    formik.resetForm();
  };
  const handleChange = (event, newAlignment) => {
    if (newAlignment !== null) {
      setIsEducator(newAlignment);
    }
  };
  const isPasswordValid = (password) => {
    const specialCharacters = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/;
    return specialCharacters.test(password);
  };
  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleToggleRePasswordVisibility = () => {
    setShowRePassword(!showRePassword);
  };
  const customStyles = {
    backdrop: {
      backgroundColor: "transparent", // Set the backdrop background color to transparent
    },
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      reEnterPassword: "",
      phoneNumber: "",
      isEducator: isEducator,
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
        .then(async (userCredential) => {
          console.log("-----------------------------");
          const requestData = {
            firstName: values.firstName,
            lastName: values.lastName,
            number: values.phoneNumber,
            isEducator: isEducator
          };
          
          // Call the cloud function
          setupAccountFunction(requestData)
            .then(result => {
              // Handle the result here if needed
              console.log("Cloud Function executed successfully:", result.data);
            })
            .catch(error => {
              // Handle errors here
              console.error("Error calling Cloud Function:", error);
            });
          
          console.log("-----------------------------");

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
  return (
    <Box>
      {/* Sign Up Modal */}
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
            <SignUpTextLink variant="h6" onClick={handleLoginButtonClick}>
              Already have an account? Log In
            </SignUpTextLink>
          </Box>
          <FormBox component="form" onSubmit={formik.handleSubmit} noValidate>
            <ChooseAccBox>
              <StyledToggleButtonGroup
                color="primary"
                value={isEducator}
                exclusive
                onChange={handleChange}
                aria-label="Platform"
              >
                <ToggleBtn type="button" value="student">
                  Student Account
                </ToggleBtn>
                <ToggleBtn type="button" value="educator">
                  Educator Account
                </ToggleBtn>
              </StyledToggleButtonGroup>
            </ChooseAccBox>
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
    </Box>
  );
};