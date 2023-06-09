import "./login.scss";

import React from "react";
import {
  Box,
  Modal,
  Typography,
  Link,
  TextField,
  Button,
} from "@mui/material";
import { FormBox, MainBox, ModalBackgroundBox, SigUpTextLink } from "./styles";
import { useFormik } from "formik";
import * as Yup from "yup";
const LoginModal = ({ show, setShow }) => {

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string("Required").min(6, "Must be 6 chatacters").required("Required"),
    }),

    onSubmit: (values) => {
      console.log("===========================");
      console.log(values);
      console.log("===========================");
    },
  });
  console.log(formik.errors);

  const isPasswordValid = (password) => {
    const specialCharacters = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/;
    return specialCharacters.test(password);
  };

  const getPasswordError = () => {
    if (formik.touched.password && !isPasswordValid(formik.values.password)) {
      return 'Add Special Character';
    }
    return '';
  };
  return (
    <>
      <Modal
        open={show}
        onClose={() => setShow(false)}
        aria-labelledby="login-modal-title"
        aria-describedby="login-modal-description"
      >
        <MainBox
        >
          <Typography
            variant="h1"
            px={4}
            pb={4}
            pt={2}
            color="primary"
            sx={{ fontSize: "36px" }}
          >
            Log In
          </Typography>
          <Box>
            <SigUpTextLink variant="h6" sx={{ fontSize: "16px" }}>
              New? Create An Account
            </SigUpTextLink>
          </Box>
          <FormBox component="form" onSubmit={formik.handleSubmit} noValidate>
            <TextField
              id="email"
              name="email"
              label={(formik.touched.email && Boolean(formik.errors.email))?`${formik.errors.email}`:"Email"}
              variant="standard"
              onChange={formik.handleChange}
              value={formik.values.email}
              sx={{ pb: "22px" }}
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
              // label={((formik.touched.password && Boolean(formik.errors.password))?`${formik.errors.password}`:"Password")?`${getPasswordError()}`:"Password"}
              label={
                formik.touched.password && Boolean(formik.errors.password)
                  ? formik.errors.password
                  : getPasswordError() || 'Password'
              }
              variant="standard"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              error={formik.touched.password && Boolean(formik.errors.password)}
              sx={{ pb: "14px", pt: "5" }}
              InputLabelProps={{
                style: { color: getPasswordError() ? 'red' : undefined, fontSize: 16 },
              }}
              inputProps={{
                style: { fontSize: 16 },
              }}
            />
            {formik.errors.password ? "" :" "}

            <Box pb={2}>
              <Link
                href="#"
                variant="body2"
                sx={{ textDecoration: "none", fontSize: "16px" }}
              >
                Forgot password?
              </Link>
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
      {show && <ModalBackgroundBox />}
    </>
  );
};

export default LoginModal;
