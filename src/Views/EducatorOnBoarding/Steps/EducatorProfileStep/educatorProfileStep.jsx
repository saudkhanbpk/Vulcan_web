import { Box, Stack, TextField } from "@mui/material";
import "react-quill/dist/quill.snow.css";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import React, { useState } from "react";
import {
  decrementSteps,
  resetSteps,
} from "../../../../Infrastructure/States/educatorStepsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  AboutMe,
  ContinueButton,
  Footer,
  FullName,
  PreviousButton,
  TitleText,
} from "../../styles";
import ReactQuill from "react-quill";
import { UploadAvatar } from "./uploadAvatar";
// import DialogBox from "./dialogBox";
import { useFormik } from "formik";

export const EducatorProfileStep = () => {
  const name = "John wick";
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const steps = useSelector((state) => state.educatorSteps.steps);
  // const [code, setCode] = useState("");
  const [open, setOpen] = React.useState(false);
  // const [contentLength, setContentLength] = useState(code.length);

  // const handleProcedureContentChange = (content) => {
  //   // if (content.length <= 2000) {

  //     setCode(content);
  //     setContentLength(content.length);
  //   // }
  // };

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
  // const handleClick = () => {
  //   if (contentLength <= 2000) {
  //     setOpen(true);
  //   } else {
  //     setOpen(false);
  //     navigate("/");
  //     dispatch(resetSteps());
  //   }
  // };
  const handleAvatarUpload = (imageDataURL) => {
    formik.setFieldValue("avatar", imageDataURL);
  };

  const formik = useFormik({
    initialValues: {
      content: "",
      websiteLink: "",
      youtubeLink: "",
      twitterLink: "",
      tiktokLink: "",
      avatar: "",
    },
    onSubmit: (values) => {
      const {
        content,
        websiteLink,
        youtubeLink,
        twitterLink,
        tiktokLink,
        avatar,
      } = values;
      console.log(
        content,
        websiteLink,
        youtubeLink,
        twitterLink,
        tiktokLink,
        avatar
      );
      if (content.length <= 2000) {
        setOpen(true);
      } else {
        setOpen(false);
        navigate("/");
        dispatch(resetSteps());
      }
    },
  });
  return (
    <>
      {/* <DialogBox open={open} setOpen={setOpen} /> */}
      <Box
        component={"form"}
        onSubmit={formik.handleSubmit}
        height={{ sm: "120vh", lg: "130vh", xs: "130vh" }}
        pt={18}
      >
        <Grid container>
          <Grid lg={1} md={0} sm={0} xs={0}></Grid>
          <Grid
            lg={6}
            md={12}
            sm={12}
            xs={12}
            p={{ lg: 5, md: 5, sm: 5, xs: 5 }}
            mb={20}
            display={"flex"}
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
            <Box mt={5} sx={{ width: { xs: { width: "100%" } } }}>
              <ReactQuill
                theme="snow"
                modules={modules}
                formats={formats}
                value={formik.values.content} // Use formik's value
                onChange={(content) => {
                  formik.setFieldValue("content", content); // Update Formik's field value
                }}
                style={{ height: "300px" }}
              />
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
                name="tiktokLink"
                sx={{ mt: "6px" }}
                label={"Tik Tak Link"}
                variant="standard"
                {...formik.getFieldProps("tiktokLink")}
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
                  // onClick={handleClick}
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
