import { Box, Button, Stack, TextField } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import React, { useEffect, useState } from "react";
import { FormBox, Span, TextButton, TextLabel, TextValue } from "../../styles";
import { useFormik } from "formik";
import * as Yup from "yup";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { httpsCallable } from "firebase/functions";
import { functions } from "../../../../Infrastructure/config";
import { getAuth } from "firebase/auth";
import { getDatabase, onValue, ref } from "firebase/database";
import { ShowErrorToast, ShowSuccessToast } from "../../../Common/Toast/toast";
export const NameBox = ({
  userFullName,
  handleOpen,
  handleClose,
  showEditName,
  user,
}) => {
  const auth = getAuth();
  const db = getDatabase();
  const uid = auth.currentUser.uid;
  const userRef = ref(db, `users/${uid}/profile`);
  const [userProfile, setUserProfile] = useState({
    first_name: "",
    last_name: "",
  });
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        onValue(userRef, (snapshot) => {
          const userData = snapshot.val();
          if (userData) {
            setUserProfile(userData);
          }
        });
      } catch (error) {
        ShowErrorToast("Something wrong try again.");
      }
    };
    fetchUserProfile();
  }, []);
  const nameFormik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string(),
      lastName: Yup.string(),
    }),
    onSubmit: async (values, { setSubmitting }) => {
      try {
        const { firstName, lastName } = values;
        if (!nameFormik.isValid) {
          return; // Exit early if form is not valid
        }
        const updateProfile = httpsCallable(functions, "updateaccount");
        const requestData = {
          firstName: firstName,
          lastName: lastName,
        };
        await updateProfile(requestData).then(() =>
          ShowSuccessToast("Full name updated sucessfully.")
        );
        handleClose();
        nameFormik.resetForm();
      } finally {
        setSubmitting(false); // Ensure form submission is complete
      }
    },
  });
  return (
    <Box pr={3} pl={3}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        pt={4}
        pb={4}
      >
        <TextLabel>Full Name</TextLabel>
        <TextValue>
          {userProfile.first_name} {userProfile.last_name}
        </TextValue>
        {!showEditName ? (
          <Span
            direction="row"
            alignItems={"center"}
            onClick={() => handleOpen({ prop: "name" })}
          >
            <TextButton curser="pointer">Edit</TextButton>
            <KeyboardArrowDownIcon fontSize="medium" color="primary" />
          </Span>
        ) : (
          <Span
            direction="row"
            alignItems={"center"}
            onClick={() => handleClose()}
          >
            <TextButton curser="pointer">Edit</TextButton>
            <KeyboardArrowUpIcon fontSize="medium" color="primary" />
          </Span>
        )}
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
  );
};
