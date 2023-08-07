import { Box, Button, Stack, TextField } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import React, { useState } from "react";
import {
  AboutDownArrow,
  AboutDownArrowUp,
  FormBox,
  Heading,
  HeadingBox,
  MainBox,
  OldPassBox,
  TextButton,
  TextLabel,
  TextValue,
} from "./styles";
export const Profile = () => {
  // const [fullName, setFullName] = useState("John Doe");
  // const [email, setEmail] = useState("johndoe@example.com");
  // const [password, setPassword] = useState("********");
  // const [lastUpdated, setLastUpdated] = useState("2023-08-07");
  const [editName, setEditName] = useState(false);
  const [editPassword, setEditPassword] = useState(false);
  // const [firstName, setFirstName] = useState("Ayaz");
  // const [lastName, setLastName] = useState("Khan");
  // const [state, setState] = useState("");

  const handleEditClick = () => {
    setEditName(true);
  };

  const handleSaveClick = () => {
    setEditName(false);
  };

  // const handleEditName = () => {
  //   // Handle edit full name logic here
  // };

  // const handleEditPassword = () => {
  //   // Handle edit password logic here
  // };

  return (
    <MainBox>
      <HeadingBox p={5}>
        <Heading>Profile</Heading>
      </HeadingBox>
      <Box pr={3} pl={3}>
        {editName ? (
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
              // onSubmit={formik.handleSubmit}
              noValidate
            >
              <Grid container>
                <Grid lg={6} md={12} sm={12} xs={12}>
                  <Box width="70%" margin="0 auto">
                    <TextField
                      name="firstName"
                      label="First Name"
                      variant="standard"
                      // onChange={formik.handleChange}
                      // value={formik.values.fullName}
                      // error={formik.touched.fullName && Boolean(formik.errors.fullName)}
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
                <Grid lg={6} md={12} sm={12} xs={12}>
                  <Box width="70%" margin="0 auto">
                    <TextField
                      name="lastName"
                      label="Last Name"
                      variant="standard"
                      // onChange={formik.handleChange}
                      // value={formik.values.fullName}
                      // error={formik.touched.fullName && Boolean(formik.errors.fullName)}
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
              <Grid lg={6} md={6} sm={6} xs={6}>
                <Box width="70%" margin="0 auto" display={"flex"} alignItems={"center"} justifyContent={"center"}>
                  <Button variant="contained" onClick={handleSaveClick}>Cancel</Button>
                </Box>
              </Grid>

              <Grid lg={6} md={6} sm={6} xs={6}>
                <Box width="70%" margin="0 auto" display={"flex"} alignItems={"center"} justifyContent={"center"}>
                  <Button variant="contained" onClick={handleSaveClick}>Update</Button>
                </Box>
              </Grid>
            </Grid>
          </>
        ) : (
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
        {editPassword ? (
          <>
            {/* <Box > */}
            <Box
              display={"flex"}
              justifyContent={"flex-end"}
              onClick={() => setEditPassword(false)}
            >
              <AboutDownArrowUp theme="secondary" />
            </Box>

            <FormBox
              component="form"
              // onSubmit={formik.handleSubmit}
              noValidate
            >
              <Grid container>
                <Grid lg={12} md={12} sm={12} xs={12}>
                  <OldPassBox width="85%" margin="0 auto">
                    <TextField
                      name="oldPassword"
                      label="Old Password"
                      variant="standard"
                      // onChange={formik.handleChange}
                      // value={formik.values.fullName}
                      // error={formik.touched.fullName && Boolean(formik.errors.fullName)}
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
                  </OldPassBox>
                </Grid>
                <Grid lg={6} md={12} sm={12} xs={12}>
                  <Box width="70%" margin="0 auto">
                    <TextField
                      name="newPassword"
                      label="New Password"
                      variant="standard"
                      // onChange={formik.handleChange}
                      // value={formik.values.fullName}
                      // error={formik.touched.fullName && Boolean(formik.errors.fullName)}
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
                <Grid lg={6} md={12} sm={12} xs={12}>
                  <Box width="70%" margin="0 auto">
                    <TextField
                      name="ReEnterPassword"
                      label="Re-Enter Password"
                      variant="standard"
                      // onChange={formik.handleChange}
                      // value={formik.values.fullName}
                      // error={formik.touched.fullName && Boolean(formik.errors.fullName)}
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
              <Grid lg={6} md={6} sm={6} xs={6}>
                <Box width="70%" margin="0 auto" display={"flex"} alignItems={"center"} justifyContent={"center"}>
                  <Button variant="contained" onClick={()=>setEditPassword(false)}>Cancel</Button>
                </Box>
              </Grid>

              <Grid lg={6} md={6} sm={6} xs={6}>
                <Box width="70%" margin="0 auto" display={"flex"} alignItems={"center"} justifyContent={"center"}>
                  <Button variant="contained" onClick={()=>setEditPassword(false)}>Update</Button>
                </Box>
              </Grid>
            </Grid>
           
          </>
        ) : (
          <>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              pt={4}
              pb={4}
            >
              <TextLabel>Password</TextLabel>
              <TextValue>Last updated on: 05/16/2022</TextValue>
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
        )}
        <hr />
      </Box>
    </MainBox>
  );
};
