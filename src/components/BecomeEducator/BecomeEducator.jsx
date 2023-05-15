import React, { useRef } from "react";
import "./BecomeEducator.scss";
import { Box } from "@mui/system";
import { Button, Typography } from "@mui/material";
import MoneyIcon from "../../assets/images/moneyIcon.png";
import SharingIcon from "../../assets/images/sharingIcon.png";
import TeachIcon from "../../assets/images/teachIcon.png";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Unstable_Grid2";

const BecomeEducator = () => {
  const navigate = useNavigate();
  const sectionRef = useRef(null);

  const navigateToEdu = () => {
    navigate('/educator-faq');
  };

  const scrollToSection = () => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const myStyles = {
    Sec1MainGrid: {
      marginRight: { lg: 45, md: 30, sm: 18, mobile: 2.3 },
      width: { lg: "586px", md: "520px", sm: "510px", xs: "350px" },
      height: { lg: "294px", sm: "300px", xs: "350px" },
      borderRadius: "50px",
      backgroundColor: "rgba(255, 255, 255, 0.8)",
      marginTop: -18,
      position: "absolute",
      pl: 3,
      pr: 3,
    },
    boxTypo: {
      fontSize: { lg: "40px", sm: "33px", xs: "25px" },
      marginTop: "40px",
      justifyContent: "center",
      fontWeight: 700,
      lineHeight: "48px",
    },
    boxContent: {
      fontSize: { lg: "26px", sm: "24px", xs: "18px" },
      fontWeight: 600,
      marginTop: "30px",
    },
    textCapitalize: { textTransform: "capitalize" },

    // Section 2 style
    Sec2Box: { pt: "60px", pb: "10px", ml: "10px" },
    Sec2Typo: {
      width: { lg: "900px" },
      height: "44px",
      lineHeight: "44px",
      fontSize: "36px",
      fontWeight: 700,
      textAlign: "start",
    },
    // Sec2MainGrid: { display: "flex", justifyContent: "start", alignItems: "start" },
    // Sec2SubGrid:{ display: "flex", justifyContent: "center", alignItems: "center" },
    subGridImgBox: { width: "150px", height: "150px", },
    subgridTypoHeading: { fontSize: "32px", fontWeight: 700, textAlign: "center", marginTop: "40px", },
    subgridTypoDescription: { fontSize: "24px", fontWeight: 600, textAlign: "center", marginTop: "25px", }


  }

  return (
    <>
      {/* Section 1 */}
      <div className="bg-img">
        <Grid
          container
          lg={6}
          sx={myStyles.Sec1MainGrid}
        >
          <Grid>
            <Typography
              sx={myStyles.boxTypo}
            >
              Teach Live Classes Online
            </Typography>
            <Typography

              sx={myStyles.boxContent}
            >
              Become an Educator on the Vulcan
              Platform. Enrich lives. Earn income.
            </Typography>
          </Grid>

          <Grid display="flex" alignItems="center" justifyContent="space-around"   lg={12} md={12} sm={12} xs={6}>

            <Button
              variant="contained"
              size="small"
              sx={myStyles.textCapitalize}
            >
              Get Started
            </Button>



            <Button
              onClick={scrollToSection}
              variant="contained"
              size="small"
              sx={myStyles.textCapitalize}
            >
              Learn More
            </Button>

          </Grid>

        </Grid>
      </div>

      {/* Section 2 */}
      <section >

        <Box ref={sectionRef} sx={myStyles.Sec2Box}>
          <Typography
            sx={myStyles.Sec2Typo}
          >
            Why teach on the Vulcan Learning platform?
          </Typography>
        </Box>


        <Grid container mt={8} display="flex" justifyContent="center" alignItems="center">
          <Grid lg={4} sm={12} md={4} xs={12} sx={{ height: { sm: "auto", xs: "auto", md: "371px", lg: "371px" }, }} display="flex" flexDirection="column" justifyContent="start" alignItems="center">
            <Box
              sx={myStyles.subGridImgBox}
            >
              <img src={MoneyIcon} alt="dollar" />
            </Box>
            <Typography
              sx={myStyles.subgridTypoHeading}
            >
              Monetize Your Knowledge
            </Typography>
            <Typography
              sx={myStyles.subgridTypoDescription}
            >
              Generate consistent and unbounded income. Part time or Full time. On
              the Vulcan Learning platform you keep 100% of what you earn.
            </Typography>
          </Grid>

          <Grid lg={4} sm={12} md={4} xs={12} sx={{ height: "371px" }} display="flex" flexDirection="column" justifyContent="start" alignItems="center">
            <Box
              sx={myStyles.subGridImgBox}
            >
              <img src={SharingIcon} alt="" />
            </Box>
            <Typography
              sx={myStyles.subgridTypoHeading}
            >
              Change Lives
            </Typography>
            <Typography
              sx={myStyles.subgridTypoDescription}
            >
              {" "}
              Share your experience and help learners explore their interests,
              gain new skills, and advance their careers.
            </Typography>
          </Grid>
          <Grid lg={4} sm={12} md={4} xs={12} sx={{ height: "371px" }} display="flex" flexDirection="column" justifyContent="start" alignItems="center">
            <Box
              sx={myStyles.subGridImgBox}
            >
              <img src={TeachIcon} alt="" />
            </Box>
            <Typography
              sx={myStyles.subgridTypoHeading}
            >
              You are in control
            </Typography>
            <Typography
              sx={myStyles.subgridTypoDescription}
            >
              Set the course curriculum, choose the class schedule, and devise the
              teaching strategies that work best for you.
            </Typography>
          </Grid>
          <Grid lg="12" xs={12}>
            <Box display="flex" justifyContent="center" mt={10} mb={10}>
              <Button onClick={navigateToEdu} variant="contained" style={{ textTransform: "capitalize" }}>
                Educator FAQ
              </Button>
            </Box>
          </Grid>
        </Grid>
      </section>
    </>
  );
};

export default BecomeEducator;
