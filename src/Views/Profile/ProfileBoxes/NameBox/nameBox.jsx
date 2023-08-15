import { Box, Button, Stack, TextField } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import {
  FormBox,
  Span,
  TextButton,
  TextLabel,
  TextValue,
} from "../../styles";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
export const NameBox = ({
  userFullName,
  handleOpen,
  handleClose,
  showEditName,
  user,
}) => {
  const navigate = useNavigate();
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
      if (nameFormik.isValid) {
        try {
          if (user) {
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
