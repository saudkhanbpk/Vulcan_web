import React, { useState } from "react";
import { Box, Modal, Typography, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./signup.scss";
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
  const [selectedButton, setSelectedButton] = useState(false);

  const handleSelectButton = (e) => {
    setSelectedButton(!selectedButton);
  };

  const formik = useFormik({
    initialValues: {
      firstName:"",
      lastName:"",
      email: "",
      password: "",
      reEnterPassword: "",
      phoneNumber:""

    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      lastName: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string().min(6, "Must be 6 chatacters").required("Reduired"),
      reEnterPassword: Yup.string().min(6, "Must be 6 chatacters").required("Required"),
      phoneNumber:Yup.string()
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
          <Heading variant="h1">Create Account</Heading>
          <Box>
            <SignInTextLink variant="h6">
              Already have an account? Log In
            </SignInTextLink>
          </Box>

          <ChooseAccBox>
            <AuthButton
              // selectedButton={selectedButton}
              onClick={handleSelectButton}
              sx={{
                background: selectedButton ? "#000FFF" : "#D9D9D9E5",
                color: selectedButton ? "white" : "black",
              }}
              
            >
              Student Account
            </AuthButton>
            <AuthButton
              // selectedButton={selectedButton}
              onClick={handleSelectButton}
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
            // sx={{

            // }}
          >
            <TextField
              id="firstName"
              name="firstName"
              label="First Name"
              variant="standard"
              onChange={formik.handleChange}
              value={formik.values.firstName}
              error={formik.touched.firstName && Boolean(formik.errors.firstName)}
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
              label="Last Name"
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
              label="Email"
              variant="standard"
              onChange={formik.handleChange}
              value={formik.values.email}
              error={formik.touched.email && Boolean(formik.errors.email)}
              // sx={{pb:"22px"}}
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
              label="Password"
              variant="standard"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              error={formik.touched.password && Boolean(formik.errors.password)}
              // sx={{ pb: "12px" }}
              InputLabelProps={{
                style: { fontSize: 16 },
              }}
              inputProps={{
                style: { fontSize: 16 },
              }}
            />
            <TextField
              id="reEnterPassword"
              name="reEnterPassword"
              label="Re-Enter Password"
              variant="standard"
              type="password"
              // sx={{ pb: "12px" }}
              onChange={formik.handleChange}
              value={formik.values.reEnterPassword}
              error={formik.touched.reEnterPassword && Boolean(formik.errors.reEnterPassword)}
              InputLabelProps={{
                style: { fontSize: 16 },
              }}
              inputProps={{
                style: { fontSize: 16 },
              }}
            />
            <TextField
              id="phoneNumber"
              name="phoneNumber"
              label="Phone Number"
              variant="standard"
              // sx={{ pb: "12px" }}
              onChange={formik.handleChange}
              value={formik.values.phoneNumber}
              error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
              InputLabelProps={{
                style: { fontSize: 16 },
              }}
              inputProps={{
                style: { fontSize: 16 },
              }}
            />

            <Box py={5}>
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
