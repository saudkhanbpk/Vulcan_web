import { Box, Stack, TextField } from "@mui/material";
import "react-quill/dist/quill.snow.css";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import React, { useEffect, useState } from "react";
import {
  resetSteps,
  decrementSteps,
  resetExperienceStepValues,
} from "../../../../Infrastructure/States/educatorStepsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  AboutMe,
  CharacterCount,
  ContinueButton,
  CountText,
  ErrorBlockLarge,
  ErrorBlockSmall,
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
import { getDatabase, ref, update } from "firebase/database";
import ProgressBar from "../../progressbar";
import * as Yup from "yup";

export const EducatorProfileStep = () => {
  const auth = getAuth();
  const db = getDatabase()
  const minCharacters = 200;
  const maxCharacters = 2000;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const uid = auth?.currentUser?.uid;
  const [loaderValue, setLoaderValue] = useState(false);
  const userData = useSelector((state) => state.userData.data);
  const aboutMe = userData?.educator?.profile?.about_me
  const profile = userData?.educator?.profile
  const youtube = profile?.youtube
  const linkedin = profile?.linkedin
  const twitter = profile?.twitter
  const website = profile?.website
  const profilePicture = userData?.educator?.profile?.avatar
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
  const [displayMessage, setDisplayMessage] = useState("");
  const formik = useFormik({
    initialValues: {
      avatar: "",
      aboutMe: "",
      website: website || "",
      youtube: youtube || "",
      twitter: linkedin || "",
      linkedin: twitter || "",
    },
    validationSchema: Yup.object().shape({
      website: Yup.string().url('Invalid Website URL'),
      youtube: Yup.string().url('Invalid YouTube URL'),
      twitter: Yup.string().url('Invalid Twitter URL'),
      linkedin: Yup.string().url('Invalid LinkedIn URL'),
    }),
    onSubmit: async (values) => {
      let newDisplayMessage = "";
      if (!values.avatar && !profilePicture) {
        newDisplayMessage = 'Must upload profile picture';
      } else if (characterCount < minCharacters || characterCount > maxCharacters) {
        newDisplayMessage = 'About me text must be 200-2000 characters';
      }
      setDisplayMessage(newDisplayMessage);
      if (newDisplayMessage) {
        setLoaderValue(false);
        return;
      }
      try {
        setLoaderValue(true);
        const updateEducatorStep = httpsCallable(
          functions,
          "updateeducatorprofile"
        );
        await updateEducatorStep(values);
        dispatch(resetSteps());
        dispatch(resetExperienceStepValues());
        const userRef = ref(db, `users/${uid}/educator`);
        await update(userRef, {
          onboarding_complete: true,
          approved: false
        });
        navigate("/dashboard");
      } catch (error) {
        ShowErrorToast(error);
      } finally {
        setLoaderValue(false);
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
    if (currentCharacterCount >= minCharacters && currentCharacterCount <= maxCharacters) {
      setDisplayMessage("");
    }
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
                  Character Count: <CountText>{characterCount}</CountText>
                </CharacterCount>
                <ErrorBlockSmall>
                  {(characterCount < minCharacters ||
                    characterCount > maxCharacters) && displayMessage}
                </ErrorBlockSmall>
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
                  variant="standard"
                  {...formik.getFieldProps("website")}
                  InputLabelProps={{
                    style: { fontSize: 16 },
                  }}
                  InputProps={{
                    style: { fontSize: 18 },
                  }}
                  placeholder="https://www.example.com"
                  label={formik.errors.website ? `${formik.errors.website}` : "Website Link"}
                  error={formik.touched.website && Boolean(formik.errors.website)}
                  fullWidth
                />
                <TextField
                  name="youtubeLink"
                  sx={{ mt: "6px" }}
                  variant="standard"
                  label={formik.errors.youtube ? `${formik.errors.youtube}` : "Youtube Link"}
                  error={formik.touched.youtube && Boolean(formik.errors.youtube)}
                  {...formik.getFieldProps("youtube")}
                  placeholder="https://www.example.com"
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
                  label={formik.errors.twitter ? `${formik.errors.twitter}` : "Twitter Link"}
                  error={formik.touched.twitter && Boolean(formik.errors.twitter)}
                  variant="standard"
                  {...formik.getFieldProps("twitter")}
                  placeholder="https://www.example.com"
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
                  label={formik.errors.linkedin ? `${formik.errors.linkedin}` : "LinkedIn Link"}
                  error={formik.touched.linkedin && Boolean(formik.errors.linkedin)}
                  variant="standard"
                  {...formik.getFieldProps("linkedin")}
                  placeholder="https://www.example.com"
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
                    <ErrorBlockLarge>
                      {((characterCount < minCharacters ||
                        characterCount > maxCharacters) || !formik.values.avatar) ? displayMessage : ""}
                    </ErrorBlockLarge>
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
        </Box >
      )}
    </>
  );
};
