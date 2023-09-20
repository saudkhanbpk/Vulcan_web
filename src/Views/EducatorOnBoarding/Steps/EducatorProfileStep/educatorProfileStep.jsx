import { Box, Stack, TextField } from "@mui/material";
import "react-quill/dist/quill.snow.css";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import React, { useEffect, useState } from "react";
import {
  decrementSteps,
  resetExperienceStepValues,
  resetSteps,
} from "../../../../Infrastructure/States/educatorStepsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  AboutMe,
  CharacterCount,
  ContinueButton,
  Footer,
  FullName,
  PreviousButton,
  TitleText,
} from "../../styles";
import ReactQuill from "react-quill";
import { UploadAvatar } from "./uploadAvatar";
import { useFormik } from "formik";
import { httpsCallable } from "firebase/functions";
import { functions } from "../../../../Infrastructure/config";
import { ShowErrorToast } from "../../../Common/Toast/toast";
import { getAuth } from "firebase/auth";
import { fetchUserData } from "../../../../Infrastructure/States/userDataSlice";
import { Loader } from "../../../Common/loader";
import * as Yup from "yup";

export const EducatorProfileStep = () => {
  const auth = getAuth();
  const uid = auth.currentUser.uid;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const message = "!About me text must be 200-2000 character";
  const maxCharacters = 2000;
  const minCharacters = 200;
  const userData = useSelector((state) => state.userData.data);
  const firstName =
    userData?.account?.first_name.charAt(0).toUpperCase() +
    userData?.account?.first_name.slice(1);
  const lastName =
    userData?.account?.last_name.charAt(0).toUpperCase() +
    userData?.account?.last_name.slice(1);
  const loading = useSelector((state) => state.userData.loading);
  const [characterCount, setCharacterCount] = useState(0);
  const steps = useSelector((state) => state.educatorSteps.steps);
  const [open, setOpen] = React.useState(false);

  const formik = useFormik({
    initialValues: {
      aboutMe: "",
      website: "",
      youtube: "",
      twitter: "",
      linkedin: "",
      avatar: "",
    },
    validationSchema: Yup.object({
      avatar: Yup.string().required("Must upload profile picture"),
    }),
    onSubmit: async (values) => {
      if (characterCount < minCharacters || characterCount > maxCharacters) {
        setOpen(true);
      } else {
        try {
          const updateEducatorStep = httpsCallable(
            functions,
            "updateeducatorprofile"
          );
          await updateEducatorStep(values);
          setOpen(false);
          navigate("/");
          dispatch(resetSteps());
          dispatch(resetExperienceStepValues());
        } catch (error) {
          ShowErrorToast(error);
        }
      }
    },
  });
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
  const handleDec = async () => {
    if (steps > 1) {
      if (characterCount < minCharacters || characterCount > maxCharacters) {
        setOpen(true);
      } else {
        try {
          const updateEducatorStep = httpsCallable(
            functions,
            "updateeducatorprofile"
          );
          await updateEducatorStep(formik.values);
          dispatch(decrementSteps());
        } catch (error) {
          ShowErrorToast(error);
        }
      }
    }
  };
  const handleAvatarUpload = (imageDataURL) => {
    formik.setFieldValue("avatar", imageDataURL);
  };
  function countCharactersWithoutTags(html) {
    const textWithoutTags = html.replace(/(<([^>]+)>)/gi, "");
    return textWithoutTags.length;
  }
  const handleAboutMeChange = (value) => {
    const currentCharacterCount = countCharactersWithoutTags(value);
    setCharacterCount(currentCharacterCount);
    formik.setFieldValue("aboutMe", value);
  };
  useEffect(() => {
    dispatch(fetchUserData(uid));
  }, [dispatch, uid]);

  useEffect(() => {
    setCharacterCount(formik.values.aboutMe.length);
  }, [formik.values.aboutMe]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Box
          component={"form"}
          onSubmit={formik.handleSubmit}
          height={{ sm: "120vh", lg: "130vh", xs: "130vh" }}
          pt={18}
        >
          <Grid
            container
            display={"flex"}
            justifyContent={"flex-start"}
            alignItems={"flex-start"}
          >
            <Grid
              lg={7}
              md={12}
              sm={12}
              xs={12}
              p={{ lg: 5, md: 5, sm: 5, xs: 5 }}
              mb={20}
              display={{ lg: "flex" }}
              flexDirection={"column"}
              justifyContent={"flex-start"}
              alignItems={"flex-start"}
              order={{ lg: 1, md: 2, sm: 2, xs: 2 }}
            >
              <Box
                display={"flex"}
                flexDirection={"column"}
                sx={{ width: "100%" }}
              >
                <TitleText color={"primary"} pb={2}>
                  Educator
                </TitleText>
                <FullName color={"secondary"}>
                  {firstName} {lastName}
                </FullName>
                <AboutMe pt={10} color={"primary"} mb={3}>
                  About Me
                </AboutMe>
                <ReactQuill
                  theme="snow"
                  modules={modules}
                  formats={formats}
                  value={formik.values.aboutMe}
                  onChange={handleAboutMeChange}
                  style={{ height: "300px", marginTop: "40px" }}
                />
              </Box>
              <Box width={"100%"} my={10}>
                <CharacterCount>
                  Character Count: {characterCount}
                </CharacterCount>
              </Box>
            </Grid>
            <Grid
              p={{ lg: 5, md: 5, sm: 5, xs: 5 }}
              lg={5}
              md={12}
              sm={12}
              xs={12}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              order={{ lg: 2, md: 1, sm: 1, xs: 1 }}
            >
              <Box maxWidth={{ md: "70%", lg: "100%", xlg: "100%" }}>
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
                  {...formik.getFieldProps("website")}
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
                  {...formik.getFieldProps("youtube")}
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
                  {...formik.getFieldProps("twitter")}
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
                  {...formik.getFieldProps("linkedin")}
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
                <Grid display={"flex"}>
                  <Box
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    mr={3}
                  >
                    <h6 style={{ color: "red", textAlign: "center" }}>
                      {!open
                        ? `${formik.errors.avatar || ""}`
                        : (characterCount < minCharacters ||
                            characterCount > maxCharacters) &&
                          message}
                    </h6>
                  </Box>
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
      )}
    </>
  );
};
