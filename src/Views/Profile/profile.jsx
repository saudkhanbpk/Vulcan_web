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
  AboutUpArrow,
  FormBox,
  HeadingBox,
  MainBox,
  OldPassBox,
  Span,
  TextButton,
  TextLabel,
  TextValue,
} from "./styles";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { useFormik } from "formik";
import useAuthentication from "../../Infrastructure/States/onAuthStateChange";
import {
  updateProfile,
  EmailAuthProvider,
  reauthenticateWithCredential,
  updatePassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { ShowErrorToast, ShowSuccessToast } from "../Common/Toast/toast";

export const Profile = () => {
  const [showEditName, setShowEditName] = useState(false);
  const [showEditPass, setShowEditPass] = useState(false);
  const [showOldPassword, setShowOldPassword] = useState(true);
  const [showNewPassword, setShowNewPassword] = useState(true);
  const [showReEnterPassword, setShowResetPassword] = useState(true);
  const { user } = useAuthentication();

  const userFullName = user?.displayName;
  const userEmail = user?.email;
  const navigate = useNavigate();

  const handleOpen = ({ prop }) => {
    if (prop === "name") {
      setShowEditName(true);
      setShowEditPass(false);
    } else if (prop === "password") {
      setShowEditPass(true);
      setShowEditName(false);
    }
  };

  const handleClose = () => {
    setShowEditName(false);
    setShowEditPass(false);
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
        .min(6, "Must be 6 characters")
        .required("Password"),
      newPassword: Yup.string()
        .min(6, "Must be 6 characters")
        .required("Password"),
      reEnterPassword: Yup.string()
        .min(6, "Must be 6 characters")
        .required("Password"),
    }),
    onSubmit: async (values) => {
      const { newPassword, reEnterPassword, oldPassword } = values;
      if (!user) {
        return;
      }
      try {
        const credential = EmailAuthProvider.credential(
          user.email,
          oldPassword
        );
        await reauthenticateWithCredential(user, credential);

        // Check if new passwords match
        if (newPassword !== reEnterPassword) {
          ShowErrorToast("New passwords don't match");
          return;
        }

        // Update password
        await updatePassword(user, newPassword);
        ShowSuccessToast("Password updated successfully");
        handleClose();
        passwordFormik.resetForm();
      } catch (error) {
        if (error.code === "auth/wrong-password") {
          ShowErrorToast("Incorrect old password. Please check and try again.");
        } else {
          ShowErrorToast(error.message);
        }
      }
    },
  });
  const nameFormik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First Name"),
      lastName: Yup.string().required("Last Name"),
    }),
    onSubmit: async (values) => {
      //we will use it in future
      // const { firstName, lastName } = values;
      if (nameFormik.isValid) {
        try {
          if (user) {
            //we will use it in future
            // await updateProfile(user, {
            //   displayName: `${firstName} ${lastName}`,
            // }).catch((error) => {
            //   console.error("Error updating display name:", error.message);
            // });
            navigate("/profile");
            handleClose();
            nameFormik.resetForm();
          }
        } catch (error) {
          console.error("Error updating name:", error);
        }
      }
    },
  });
  return (
    <MainBox>
      <HeadingBox p={5}>
        <Typography variant="h1" color={"primary"}>
          Profile
        </Typography>
      </HeadingBox>
      <Box pr={3} pl={3}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          pt={4}
          pb={4}
        >
          <TextLabel>Email</TextLabel>
          <TextValue>{userEmail}</TextValue>
          <Box></Box>
        </Stack>
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
          <TextLabel>Full Name</TextLabel>
          <TextValue>{userFullName}</TextValue>
          <Span direction="row" alignItems={"center"}>
            <TextButton
              curser="pointer"
              onClick={() => handleOpen({ prop: "name" })}
            >
              Edit
            </TextButton>
            {!showEditName ? (
              <AboutDownArrow theme="secondary" />
            ) : (
              <Span onClick={handleClose}>
                <AboutUpArrow theme="secondary" />
              </Span>
            )}
          </Span>
        </Stack>

        {showEditName && (
          <Box>
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
              <Grid container mt={3}>
                <Grid lg={2} md={2} sm={6} xs={6}>
                  <Box
                    width="90%"
                    margin="0 auto"
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                  >
                    <Button variant="contained" onClick={handleClose}>
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
                    <Button type="submit" variant="contained">
                      Update
                    </Button>
                  </Box>
                </Grid>
                <Grid lg={6} md={6} sm={6} xs={6}></Grid>
              </Grid>
            </FormBox>
          </Box>
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
          <TextLabel>Password</TextLabel>
          <Span direction="row" alignItems={"center"}>
            <TextButton
              curser="pointer"
              onClick={() => handleOpen({ prop: "password" })}
            >
              Edit
            </TextButton>
            {!showEditPass ? (
              <AboutDownArrow theme="secondary" />
            ) : (
              <Span onClick={handleClose}>
                <AboutUpArrow theme="secondary" />
              </Span>
            )}
          </Span>
        </Stack>

        {showEditPass && (
          <Box>
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
              <Grid container mt={3}>
                <Grid lg={2} md={2} sm={6} xs={6}>
                  <Box
                    width="90%"
                    margin="0 auto"
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                  >
                    <Button variant="contained" onClick={handleClose}>
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
                    <Button type="submit" variant="contained">
                      Update
                    </Button>
                  </Box>
                </Grid>
                <Grid lg={6} md={6} sm={6} xs={6}></Grid>
              </Grid>
            </FormBox>
          </Box>
        )}
        <hr />
      </Box>
    </MainBox>
  );
};
