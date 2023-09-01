import { Box, Stack, TextField } from "@mui/material";
import "react-quill/dist/quill.snow.css";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import {
  decrementSteps,
  eduRegSteps,
  resetSteps,
} from "../../../../Infrastructure/States/educatorStepsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  AboutMe,
  ContentErrorMessage,
  ContinueButton,
  Footer,
  FullName,
  PreviousButton,
  TitleText,
} from "../../styles";
import ReactQuill from "react-quill";
import { UploadAvatar } from "./uploadAvatar";

import { useFormik } from "formik";
export const EducatorProfileStep = () => {

  const name = "John wick";
  const message = "About me text must be 200-2000 characters";
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const steps = useSelector((state) => state.educatorSteps.steps);
  const [open, setOpen] = React.useState(false);
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ size: [] }],
      [{ font: [] }],
      [{ align: ["right", "center", "justify"] }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      [{ color: ["red", "#785412"] }],
      [{ background: ["red", "#785412"] }],
    ],
  };
  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "color",
    "image",
    "background",
    "align",
    "size",
    "font",
  ];
  const handleDec = () => {
    if (steps > 1) {
      dispatch(decrementSteps());
    }
  };
  const handleAvatarUpload = (imageDataURL) => {
    formik.setFieldValue("avatar", imageDataURL);
  };
  const formik = useFormik({
    initialValues: {
      content: "",
      websiteLink: "",
      youtubeLink: "",
      twitterLink: "",
      linkedinLink: "",
      avatar: "",
    },
    onSubmit: (values) => {
      const { content } = values;
      if (content.length >= 200 && content.length <= 2000) {
        setOpen(false);
        navigate("/");
        dispatch(eduRegSteps(values));
        dispatch(resetSteps());
      } else {
        setOpen(true);
      }
    },
  });
  return (
    <>
      <Box
        component={"form"}
        onSubmit={formik.handleSubmit}
        height={{ sm: "120vh", lg: "130vh", xs: "130vh" }}
        pt={18}
      >
        <Grid
          container
          display={{ lg: "flex" }}
          flexDirection={{ lg: "column", md: "column-reverse" }}
          justifyContent={"flex-start"}
          alignItems={"flex-start"}
        >
          <Grid lg={1} md={0} sm={0} xs={0}></Grid>
          <Grid
            lg={6}
            md={12}
            sm={12}
            xs={12}
            p={{ lg: 5, md: 5, sm: 5, xs: 5 }}
            mb={20}
            display={{ lg: "flex" }}
            flexDirection={"column"}
            justifyContent={"flex-start"}
            alignItems={"flex-start"}
          >
            <TitleText color={"primary"} pb={2}>
              Educator
            </TitleText>
            <FullName color={"secondary"}>{name}</FullName>
            <AboutMe pt={10} color={"primary"} mb={3}>
              About Me
            </AboutMe>
            <Box
              mt={5}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              sx={{ width: { xs: { width: "100%" } } }}
            >
              <ReactQuill
                theme="snow"
                modules={modules}
                formats={formats}
                value={formik.values.content}
                onChange={(content) => {
                  formik.setFieldValue("content", content);
                }}
                style={{ height: "300px" }}
              />
            </Box>
            <Box my={10} width={"100%"}>
              {!open ? (
                ""
              ) : (
                <ContentErrorMessage>{message}</ContentErrorMessage>
              )}
            </Box>
          </Grid>
          <Grid
            p={{ lg: 5, md: 5, sm: 5, xs: 5 }}
            lg={4}
            md={12}
            sm={12}
            xs={12}
            display={"flex"}
            flexDirection={"column"}
          >
            <Box>
              <Stack direction="row" spacing={2}>
                <Box position="relative">
                  <UploadAvatar onUpload={handleAvatarUpload} />
                </Box>
              </Stack>
              <TextField
                name="websiteLink"
                sx={{ mt: "6px" }}
                label={"Website Link"}
                variant="standard"
                {...formik.getFieldProps("websiteLink")}
                InputLabelProps={{
                  style: { fontSize: 16 },
                }}
                InputProps={{
                  style: { fontSize: 18 },
                }}
                fullWidth
              />
              <TextField
                name="youtubeLink"
                sx={{ mt: "6px" }}
                label={"Youtube Link"}
                variant="standard"
                {...formik.getFieldProps("youtubeLink")}
                InputLabelProps={{
                  style: { fontSize: 16 },
                }}
                InputProps={{
                  style: { fontSize: 18 },
                }}
                fullWidth
              />
              <TextField
                name="twitterLink"
                sx={{ mt: "6px" }}
                label={"Twitter Link"}
                variant="standard"
                {...formik.getFieldProps("twitterLink")}
                InputLabelProps={{
                  style: { fontSize: 16 },
                }}
                InputProps={{
                  style: { fontSize: 18 },
                }}
                fullWidth
              />
              <TextField
                name="linkedinLink"
                sx={{ mt: "6px" }}
                label={"LinkedIn Link"}
                variant="standard"
                {...formik.getFieldProps("linkedinLink")}
                InputLabelProps={{
                  style: { fontSize: 16 },
                }}
                InputProps={{
                  style: { fontSize: 18 },
                }}
                fullWidth
              />
            </Box>
          </Grid>
          <Grid lg={1} md={0} sm={0} xs={0}></Grid>
        </Grid>
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
                  variant="contained"
                  type="submit"
                  width={steps === 4 ? "100px" : "0px"}
                >
                  {steps === 4 ? " Finish " : "Continue"}
                </ContinueButton>
              </Grid>
            </Grid>
          </Grid>
        </Footer>
      </Box>
    </>
  );
};
