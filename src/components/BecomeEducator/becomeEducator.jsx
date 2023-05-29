import React, { useRef } from "react";
import "./becomeEducator.scss";
import { Box } from "@mui/system";
import { Button, Typography } from "@mui/material";
import MoneyIcon from "../../assets/images/moneyIcon.png";
import SharingIcon from "../../assets/images/sharingIcon.png";
import TeachIcon from "../../assets/images/teachIcon.png";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Unstable_Grid2";
import { styles } from "./styles";

const BecomeEducator = () => {
  const navigate = useNavigate();
  const sectionRef = useRef(null);

  const navigateToEdu = () => {
    navigate("/educator-faq");
  };

  const scrollToSection = () => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Section 1 */}
      <div className="bg-img">
        <Grid container lg={6} sx={styles.Sec1MainGrid}>
          <Grid>
            <Typography sx={styles.boxTypo}>
              Teach Live Classes Online
            </Typography>
            <Typography sx={styles.boxContent}>
              Become an Educator on the Vulcan Platform. Enrich lives. Earn
              income.
            </Typography>
          </Grid>

          <Grid
            display="flex"
            alignItems="center"
            justifyContent="space-around"
            lg={12}
            md={12}
            sm={12}
            xs={12}
          >
            <Button variant="contained" size="small" sx={styles.textCapitalize}>
              Get Started
            </Button>

            <Button
              onClick={scrollToSection}
              variant="contained"
              size="small"
              sx={styles.textCapitalize}
            >
              Learn More
            </Button>
          </Grid>
        </Grid>
      </div>

      {/* Section 2 */}
      <Box px={5}>
        <Box ref={sectionRef} sx={styles.Sec2Box}>
          <Typography sx={styles.Sec2Typo}>
            Why teach on the Vulcan Learning platform?
          </Typography>
        </Box>

        <Grid
          container
          mt={8}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Grid
            lg={4}
            sm={12}
            md={4}
            xs={12}
            sx={{
              height: { sm: "auto", xs: "auto", md: "371px", lg: "371px" },
            }}
            display="flex"
            flexDirection="column"
            justifyContent="start"
            alignItems="center"
          >
            <Box sx={styles.subGridImgBox}>
              <img src={MoneyIcon} alt="dollar" />
            </Box>
            <Typography sx={styles.subgridTypoHeading}>
              Monetize Your Knowledge
            </Typography>
            <Box px={2}>
              <Typography sx={styles.subgridTypoDescription}>
                Generate consistent and unbounded income. Part time or Full
                time. On the Vulcan Learning platform you keep 100% of what you
                earn.
              </Typography>
            </Box>
          </Grid>

          <Grid
            lg={4}
            sm={12}
            md={4}
            xs={12}
            sx={{ height: "371px" }}
            display="flex"
            flexDirection="column"
            justifyContent="start"
            alignItems="center"
          >
            <Box sx={styles.subGridImgBox}>
              <img src={SharingIcon} alt="" />
            </Box>
            <Typography sx={styles.subgridTypoHeading}>Change Lives</Typography>
            <Box px={2}>
              <Typography sx={styles.subgridTypoDescription}>
                {" "}
                Share your experience and help learners explore their interests,
                gain new skills, and advance their careers.
              </Typography>
            </Box>
          </Grid>
          <Grid
            lg={4}
            sm={12}
            md={4}
            xs={12}
            sx={{ height: "371px" }}
            display="flex"
            flexDirection="column"
            justifyContent="start"
            alignItems="center"
          >
            <Box sx={styles.subGridImgBox}>
              <img src={TeachIcon} alt="" />
            </Box>
            <Typography sx={styles.subgridTypoHeading}>
              You are in control
            </Typography>
            <Box px={2}>
              <Typography sx={styles.subgridTypoDescription}>
                Set the course curriculum, choose the class schedule, and devise
                the teaching strategies that work best for you.
              </Typography>
            </Box>
          </Grid>
          <Grid lg="12" xs={12}>
            <Box display="flex" justifyContent="center" mt={10} mb={10}>
              <Button
                onClick={navigateToEdu}
                variant="contained"
                style={{ textTransform: "capitalize" }}
              >
                Educator FAQ
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default BecomeEducator;
