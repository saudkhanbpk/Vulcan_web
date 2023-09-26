import React, { useEffect } from "react";
import "./home.css";
import WelcomeBox from "./WelcomeBox/welcomeBox";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { styles } from "./styles";
import Grid from "@mui/material/Unstable_Grid2";
import mobileImage from "../../Assets/Images/backhome.png";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "../Common/loader";
import { fetchUserData } from "../../Infrastructure/States/userDataSlice";
import { getAuth } from "firebase/auth";

const HomeScreen = () => {
  const auth = getAuth();
  const theme = useTheme();
  const dispatch = useDispatch();
  const uid = auth?.currentUser?.uid;
  const is_desktop = useMediaQuery(theme.breakpoints.up("sm"));
  const userData = useSelector((state) => state.userData.data);  
  const loading = useSelector((state) => state.userData.loading);
  useEffect(() => {
    dispatch(fetchUserData(uid));
  }, [dispatch, uid]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Grid>
          {is_desktop ? (
            <Box sx={styles.box} className="home">
              <WelcomeBox userData={userData}/>
            </Box>
          ) : (
            <>
              <Box component="div">
                <WelcomeBox userData={userData}/>
              </Box>
              <Box component="div" className="" sx={{ overflow: "hidden" }}>
                <img src={mobileImage} width={"100%"} height={"auto"} alt="" />
              </Box>
            </>
          )}
        </Grid>
      )}
    </>
  );
};

export default HomeScreen;
