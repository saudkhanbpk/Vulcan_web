import React, { useState } from "react";
import { Box, Modal, Typography, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./signup.scss";
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
} from "./styles";
const SignUpModal = ({ show, setShow }) => {
  const [selectedButton, setSelectedButton] = useState(true);
  const handleButtonClick = (val) => {
    if (val.value === 1) {
      setSelectedButton(true);
      console.log("student acc")
    } else {
      setSelectedButton(false);
      console.log("Educator acc")
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
      // firstName: Yup.string().required("Required"),
      // lastName: Yup.string().required("Required"),
      // email: Yup.string().email("Invalid email address").required("Required"),
      // password: Yup.string()
      //   .min(6, "Must be 6 chatacters")
      //   .required("Required"),
      // reEnterPassword: Yup.string()
      //   .min(6, "Must be 6 chatacters")
      //   .required("Required"),
      // phoneNumber: Yup.string(),

      firstName: Yup.string().required("Required"),
      lastName: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(6, "Must be 6 characters")
        .required("Required"),
      reEnterPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Required"),
      phoneNumber: Yup.string(),
    }),

    onSubmit: (values) => {
      console.log("===========================");
      console.log(values);
      console.log("===========================");
    },
  });
  console.log(formik.errors);

  // const SignInTextLink = styled(Typography)(({ theme }) => ({[theme.breakpoints.down("md")]: {}}))
  // const SignInTextLink = styled(Typography)(({ theme }) => ({[theme.breakpoints.down("md")]: {}}))

  return (
    <>
    
      <Modal
        open={show}
        onClose={() => setShow(false)}
        aria-labelledby="login-modal-title"
        aria-describedby="login-modal-description"
      >
        <MainBox>
        <Box
            // pb={1}
            // pt={1}
            onClick={() => setShow(false)}
            sx={{
              position: "relative",
              top: "9px",
              right:{
                md: "-187px",
                sm:"-159px",
                xs:"-159px"
              }
            }}
          >
            <CloseIcon />
          </Box>
          <Heading variant="h1">Create Account</Heading>
          <Box>
            <SignInTextLink variant="h6">
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
          <FormBox
            component="form"
            onSubmit={formik.handleSubmit}
            noValidate
        
          >
            
            <TextField
            // mt={1}
              id="firstName"
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
                style: { fontSize: 16 },
              }}
            />
            <TextField
              id="lastName"
              name="lastName"
              label={
                formik.touched.lastName && Boolean(formik.errors.lastName)
                  ? `${formik.errors.lastName}`
                  : "Last Name"
              }
              variant="standard"
              // sx={{ pb: "12px" }}
              onChange={formik.handleChange}
              value={formik.values.lastName}
              error={formik.touched.lastName && Boolean(formik.errors.lastName)}
              InputLabelProps={{
                style: { fontSize: 16 },
              }}
              inputProps={{
                style: { fontSize: 16 },
              }}
            />
            <TextField
              id="email"
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
                style: { fontSize: 16 },
              }}
            />
           
            <TextField
              id="password"
              name="password"
              // label={
              //   formik.touched.password && Boolean(formik.errors.password)
              //     ? formik.errors.password
              //     : "Password"
              // }
              label={
                formik.touched.password && Boolean(formik.errors.password)
                  ? formik.errors.password
                  :'Password'
              }
              variant="standard"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
          
              error={formik.touched.password && !isPasswordValid(formik.values.password)}
              
              InputLabelProps={{
                style: {
                  color:
                    (formik.touched.password && Boolean(formik.errors.password)) ||
                    getPasswordError()
                      ? 'red'
                      : undefined,
                  fontSize: 16,
                },
              }}
              
              
              inputProps={{
                style: { fontSize: 16 },
              }}
            />

            <TextField
              id="reEnterPassword"
              name="reEnterPassword"
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
                style: { fontSize: 16 },
              }}
            />

            <TextField
              id="phoneNumber"
              name="phoneNumber"
              label={
                formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)
                  ? `${formik.errors.phoneNumber}`
                  : "Phone Number"
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
              inputProps={{
                style: { fontSize: 16 },
              }}
            />

            <Box pt={2}>
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
      {show && <ModalBackgroundBox />}
    </>
  );
};

export default SignUpModal;
