import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import React, { useState } from "react";
import * as Yup from "yup";
import {
  AboutDownArrow,
  AboutDownArrowUp,
  FormBox,
  HeadingBox,
  MainBox,
  OldPassBox,
  TextButton,
  TextLabel,
  TextValue,
} from "./styles";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { useFormik } from "formik";

export const Profile = () => {

  const [editName, setEditName] = useState(false);
  const [editPassword, setEditPassword] = useState(false);
  const [showOldPassword, setShowOldPassword] = useState(true);
  const [showNewPassword, setShowNewPassword] = useState(true);
  const [showReEnterPassword, setShowResetPassword] = useState(true);

  const handleEditClick = () => {
    setEditName(true);
  };

  const handleSaveClick = () => {
    setEditName(false);
  };
  const oldPasswordVisibility = () => {
    setShowOldPassword(!showOldPassword);
  };

  const newPasswordVisibility = () => {
    setShowNewPassword(!showNewPassword);
  };

  const reEnterPasswordVisibility = () => {
    setShowResetPassword(!showReEnterPassword);
  };
  const passwordFormik = useFormik({
    initialValues: {
      oldPassword: "",
      newPassword: "",
      reEnterPassword: "",
    },
    validationSchema: Yup.object({
      oldPassword: Yup.string()
        .min(6, "Must be 6 chatacters")
        .required("Password"),
      newPassword: Yup.string()
        .min(6, "Must be 6 chatacters")
        .required("Password"),
      reEnterPassword: Yup.string()
        .min(6, "Must be 6 chatacters")
        .required("Password"),
    }),
  });
  const nameFormik = useFormik({
    initialValues: {
      firstName:"",
      lastName:""
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First Name"),
      lastName: Yup.string().required("Last Name"),
    })
  });
  return (
    <MainBox>
      <HeadingBox p={5}>
        <Typography variant="h1" color={"primary"}>
          Profile
        </Typography>
      </HeadingBox>
      <Box pr={3} pl={3}>
        <>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            pt={4}
            pb={4}
          >
            <TextLabel>Full Name</TextLabel>
            <TextValue>Ayaz Khan</TextValue>
            <Stack
              direction="row"
              alignItems={"center"}
              onClick={handleEditClick}
            >
              <TextButton>Edit</TextButton>
              <AboutDownArrow theme="secondary" />
            </Stack>
          </Stack>
        </>
        {editName && (
          <>
            <Box
              display={"flex"}
              justifyContent={"flex-end"}
              onClick={handleSaveClick}
            >
              <AboutDownArrowUp theme="secondary" />
            </Box>

            <FormBox
              component="form"
              onSubmit={nameFormik.handleSubmit}
              noValidate
            >
              <Grid container>
                <Grid lg={5} md={12} sm={12} xs={12}>
                  <Box width="100%" margin="0 auto">
                    <TextField
                      name="firstName"
                      label="First Name"
                      variant="standard"
                      onChange={nameFormik.handleChange}
                      value={nameFormik.values.firstName}
                      error={
                        nameFormik.touched.firstName &&
                        Boolean(nameFormik.errors.firstName)
                      }
                      InputLabelProps={{
                        style: { fontSize: 16 },
                      }}
                      InputProps={{
                        style: {
                          fontSize: 18,
                          background: "transparent",
                          width: "100%",
                        },
                      }}
                      fullWidth
                    />
                  </Box>
                </Grid>

                <Grid lg={2}></Grid>

                <Grid lg={5} md={12} sm={12} xs={12}>
                  <Box width="100%" margin="0 auto">
                    <TextField
                      name="lastName"
                      label="Last Name"
                      variant="standard"
                      onChange={nameFormik.handleChange}
                      value={nameFormik.values.lastName}
                      error={
                        nameFormik.touched.lastName &&
                        Boolean(nameFormik.errors.lastName)
                      }
                      InputLabelProps={{
                        style: { fontSize: 16 },
                      }}
                      InputProps={{
                        style: {
                          fontSize: 18,
                          background: "transparent",
                          width: "100%",
                        },
                      }}
                      fullWidth
                    />
                  </Box>
                </Grid>
              </Grid>
            </FormBox>
            <Grid container mt={3}>
              <Grid lg={2} md={2} sm={6} xs={6}>
                <Box
                  width="90%"
                  margin="0 auto"
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  <Button variant="contained" onClick={handleSaveClick}>
                    Cancel
                  </Button>
                </Box>
              </Grid>

              <Grid lg={2} md={2} sm={6} xs={6}>
                <Box
                  width="90%"
                  margin="0 auto"
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  <Button variant="contained" onClick={handleSaveClick}>
                    Update
                  </Button>
                </Box>
              </Grid>
              <Grid lg={6} md={6} sm={6} xs={6}></Grid>
            </Grid>
          </>
        )}
        <hr />
      </Box>
      <Box pr={3} pl={3}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          pt={4}
          pb={4}
        >
          <TextLabel>Email</TextLabel>
          <TextValue>azkhan03139@gmail.com</TextValue>
          <Box></Box>
        </Stack>
        <hr />
      </Box>
      <Box pr={3} pl={3}>
        <>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            pt={4}
            pb={4}
          >
            <TextLabel>Password</TextLabel>
            {/* <TextValue>Last updated on: 05/16/2022</TextValue> */}
            <Stack
              direction="row"
              alignItems={"center"}
              onClick={() => setEditPassword(true)}
            >
              <TextButton>Edit</TextButton>
              <AboutDownArrow theme="secondary" />
            </Stack>
          </Stack>
        </>
        {editPassword && (
          <>
            <Box
              display={"flex"}
              justifyContent={"flex-end"}
              onClick={() => setEditPassword(false)}
            >
              <AboutDownArrowUp theme="secondary" />
            </Box>

            <FormBox
              component="form"
              onSubmit={passwordFormik.handleSubmit}
              noValidate
            >
              <Grid container>
                <Grid lg={12} md={12} sm={12} xs={12}>
                  <OldPassBox width="100%" margin="0 auto">
                    <TextField
                      name="oldPassword"
                      label={
                        passwordFormik.touched.oldPassword &&
                        Boolean(passwordFormik.errors.oldPassword)
                          ? passwordFormik.errors.oldPassword
                          : "Old Password"
                      }
                      variant="standard"
                      type={showOldPassword ? "password" : "text"}
                      onChange={passwordFormik.handleChange}
                      value={passwordFormik.values.oldPassword}
                      error={
                        passwordFormik.touched.oldPassword &&
                        Boolean(passwordFormik.errors.oldPassword)
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
                            <IconButton onClick={oldPasswordVisibility}>
                              {showOldPassword ? (
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
                  </OldPassBox>
                </Grid>
                <Grid lg={5} md={12} sm={12} xs={12}>
                  <Box width="100%" margin="0 auto">
                    <TextField
                      name="newPassword"
                      label={
                        passwordFormik.touched.newPassword &&
                        Boolean(passwordFormik.errors.newPassword)
                          ? passwordFormik.errors.newPassword
                          : "New Password"
                      }
                      variant="standard"
                      type={showNewPassword ? "password" : "text"}
                      onChange={passwordFormik.handleChange}
                      value={passwordFormik.values.newPassword}
                      error={
                        passwordFormik.touched.newPassword &&
                        Boolean(passwordFormik.errors.newPassword)
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
                            <IconButton onClick={newPasswordVisibility}>
                              {showNewPassword ? (
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
                  </Box>
                </Grid>
                <Grid lg={2}></Grid>
                <Grid lg={5} md={12} sm={12} xs={12}>
                  <Box width="100%" margin="0 auto">
                    <TextField
                      name="reEnterPassword"
                      label={
                        passwordFormik.touched.reEnterPassword &&
                        Boolean(passwordFormik.errors.reEnterPassword)
                          ? passwordFormik.errors.reEnterPassword
                          : "Re-Enter Password"
                      }
                      variant="standard"
                      type={showReEnterPassword ? "password" : "text"}
                      onChange={passwordFormik.handleChange}
                      value={passwordFormik.values.reEnterPassword}
                      error={
                        passwordFormik.touched.reEnterPassword &&
                        Boolean(passwordFormik.errors.reEnterPassword)
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
                            <IconButton onClick={reEnterPasswordVisibility}>
                              {showReEnterPassword ? (
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
                  </Box>
                </Grid>
              </Grid>
            </FormBox>
            <Grid container mt={3}>
              <Grid lg={2} md={6} sm={6} xs={6}>
                <Box
                  width="70%"
                  margin="0 auto"
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  <Button
                    variant="contained"
                    onClick={() => setEditPassword(false)}
                  >
                    Cancel
                  </Button>
                </Box>
              </Grid>

              <Grid lg={2} md={6} sm={6} xs={6}>
                <Box
                  width="70%"
                  margin="0 auto"
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  <Button
                    variant="contained"
                    onClick={() => setEditPassword(false)}
                  >
                    Update
                  </Button>
                </Box>
              </Grid>
              <Grid lg={8}></Grid>
            </Grid>
          </>
        )}
        <hr />
      </Box>
    </MainBox>
  );
};
