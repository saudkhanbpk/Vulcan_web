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
  ExitTypo,
  Footer,
  FullName,
  Header,
  LogoTypo,
  PreviousButton,
  Span,
  StepsTypo,
  TitleText,
} from "../../styles";
import ReactQuill from "react-quill";
import { UploadAvatar } from "./uploadAvatar";
import { useFormik } from "formik";
import { httpsCallable } from "firebase/functions";
import { functions } from "../../../../Infrastructure/config";
import { ShowErrorToast } from "../../../Common/Toast/toast";
import { getAuth } from "firebase/auth";
import { Loader } from "../../../Common/loader";
import * as Yup from "yup";
import { getDatabase, ref, update } from "firebase/database";
import ProgressBar from "../../progressbar";

export const EducatorProfileStep = () => {
  const auth = getAuth();
  const db = getDatabase()
  const minCharacters = 200;
  const maxCharacters = 2000;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const uid = auth?.currentUser?.uid;
  const [open, setOpen] = React.useState(false);
  const [loaderValue, setLoaderValue] = useState(false);
  const message = "!About me text must be 200-2000 character";
  const userData = useSelector((state) => state.userData.data);
  const aboutMe = userData?.educator?.profile?.about_me
  const profile = userData?.educator?.profile
  const youtube = profile?.youtube
  const linkedin = profile?.linkedin
  const twitter = profile?.twitter
  const website = profile?.website
  const profilePicture = userData?.educator?.profile?.avatar
  const [showAvatarError, setShowAvatarError] = useState(false);
  const firstName =
    userData?.account?.first_name.charAt(0).toUpperCase() +
    userData?.account?.first_name.slice(1);
  const lastName =
    userData?.account?.last_name.charAt(0).toUpperCase() +
    userData?.account?.last_name.slice(1);
  const loading = useSelector((state) => state.userData.loading);
  const [characterCount, setCharacterCount] = useState(0);
  const steps = useSelector((state) => state.educatorSteps.steps);
  const [htmlData, setHtmlData] = useState(aboutMe || "");
  // eslint-disable-next-line no-unused-vars
  const [plainText, setPlainText] = useState("");

  const formik = useFormik({
    initialValues: {
      avatar: "",
      aboutMe: "",
      website: website || "",
      youtube: youtube || "",
      twitter: linkedin || "",
      linkedin: twitter || "",
    },
    validationSchema: Yup.object((currentSchema) => {
      if (!profilePicture || showAvatarError) {
        return currentSchema;
      }
      return currentSchema.shape({
        avatar: Yup.string().required("Must upload profile picture"),
      });
    }),
    onSubmit: async (values) => {
      if (characterCount < minCharacters || characterCount > maxCharacters) {
        setOpen(true);
        setLoaderValue(false);
      } else {
        try {
          setLoaderValue(true);
          const updateEducatorStep = httpsCallable(
            functions,
            "updateeducatorprofile"
          );
          await updateEducatorStep(values);
          setOpen(false);
          navigate("/dashboard");
          dispatch(resetSteps());
          dispatch(resetExperienceStepValues());
          const userRef = ref(db, `users/${uid}/educator`);
          await update(userRef, {
            onboarding_complete: true,
          });
        } catch (error) {
          ShowErrorToast(error);
        } finally {
          setLoaderValue(false);
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
      } else if (!formik.values.avatar) {
        setShowAvatarError(true)
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
    setHtmlData(value);
  };
  const handleExit = async () => {
    try {
      const updateEducatorStep = httpsCallable(
        functions,
        "updateeducatorprofile"
      );
      await updateEducatorStep(formik.values);
      dispatch(resetExperienceStepValues());
      dispatch(resetSteps());
      navigate("/");
    } catch (err) { }
  };
  useEffect(() => {
    setCharacterCount(formik.values.aboutMe.length);
  }, [formik.values.aboutMe]);
  useEffect(() => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = htmlData;
    const text = tempDiv.textContent || tempDiv.innerText;
    setPlainText(text);
    setCharacterCount(text.length);
  }, [htmlData]);
  return (
    <>
      <Header alignItems={"center"}>
        <Grid
          container
          display={"flex"}
          alignItems={"center"}
          justifyContent="space-between"
        >
          <Grid lg={2} md={2} sm={3} xs={3}>
            <Box
              sx={{
                borderRight: "1px solid rgba(128, 128, 128, 0.5)",
                height: "70px",
              }}
              display={"Flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Span>
                <LogoTypo color={"primary"} variant="h4" onClick={handleExit}>
                  Vulcan
                </LogoTypo>
              </Span>
            </Box>
          </Grid>
          <Grid
            display={"flex"}
            justifyContent={{
              lg: "flex-start",
              sm: "center",
              xs: "center",
            }}
            alignItems={"center"}
            lg={7}
            md={6}
            sm={6}
            xs={6}
          >
            <StepsTypo variant="h6">Step {steps} of 4</StepsTypo>
          </Grid>
          <Grid
            lg={2}
            md={2}
            sm={2}
            xs={2}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"flex-end"}
          >
            <Span>
              <ExitTypo variant="h6" color="primary" onClick={handleExit}>
                Exit
              </ExitTypo>
            </Span>
          </Grid>
        </Grid>
        <ProgressBar />
      </Header>
      {loading || loaderValue ? (
        <Loader />
      ) : (
        <Box
          component={"form"}
          onSubmit={formik.handleSubmit}
          height={"auto"}
          pt={12}
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
              mb={6}
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
                  value={htmlData}
                  onChange={handleAboutMeChange}
                  style={{
                    marginTop: "40px",
                  }}
                />
              </Box>
              <Box width={"100%"}>
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
                      {!profilePicture &&
                        (showAvatarError || !open
                          ? `${formik.errors.avatar || ""}`
                          : (characterCount < minCharacters ||
                            characterCount > maxCharacters) &&
                          message)}
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
