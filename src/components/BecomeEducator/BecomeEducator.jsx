import React, { useRef } from "react";
import "./BecomeEducator.scss";
import { Box } from "@mui/system";
import { Button, Grid, Typography } from "@mui/material";
import MoneyIcon from "../../assets/images/moneyIcon.png";
import SharingIcon from "../../assets/images/sharingIcon.png";
import TeachIcon from "../../assets/images/teachIcon.png";
import { useNavigate } from "react-router-dom";

const BecomeEducator = () => {
  const navigate = useNavigate();
  const sectionRef = useRef(null);

  const navigateToEdu = () => {
    navigate('/educator-faq');
  };

  const scrollToSection = () => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <section className="bg-img">
        <Grid
          lg={6}
          sx={{
            marginRight: { lg: 45, md: 30, sm: 18, mobile: 2.3 },
            width: { lg: "586px", md: "520px", sm: "510px", xs: "350px" },
            height: { lg: "294px", sm: "300px", xs:"350px" },
            borderRadius: "50px",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            marginTop: -18,
            position: "absolute",
            pl: 3,
            pr: 3,

          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: { lg: "40px", sm: "33px", xs: "25px" },
                marginTop: "40px",
                justifyContent: "center",
                fontWeight: 700,
                lineHeight: "48px",
              }}
            >
              Teach Live Classes Online
            </Typography>
            <Typography
              align=""
              sx={{
                fontSize: { lg: "26px", sm: "24px", xs: "18px" },
                fontWeight: 600,
                marginTop: "30px",
              }}
            >
              Become an Educator on the Vulcan  
              Platform. Enrich lives. Earn income.
            </Typography>
          </Box>
          <Box
            justifyContent={"space-evenly"}
            display={"flex"}
            marginTop={"30px"}
          >
            <Button
              variant="contained"
              size="small"
              style={{ textTransform: "capitalize" }}
            >
              Get Started
            </Button>{" "}
            <Button
              onClick={scrollToSection}
              variant="contained"
              size="small"
              style={{ textTransform: "capitalize" }}
            >
              Learn More
            </Button>
          </Box>
        </Grid>
      </section>




      <Grid >
        <Box ref={sectionRef} sx={{ pt:"10px", pb:"10px",ml:"10px"}}>
          <Typography
            sx={{
              width: { lg: "900px" },
              // marginTop: "50px",
              height: "44px",
              lineHeight: "44px",
              fontSize: "36px",
              fontWeight: 700,
              textAlign: "start",
              
             
            }}
          >
            Why teach on the Vulcan Learning platform?
          </Typography>
        </Box>
      </Grid>


      <Grid container mt={8} sx={{ display:"flex", justifyContent:"start", alignItems:"start"}}>
        <Grid lg={4} sm={12} md={4} xs={12} p={2} direction="column" sx={{ display:"flex", justifyContent:"center", alignItems:"center"}}>
          <Box
            sx={{
              width: "150px",
              height: "150px",
              // marginLeft: {
              //   lg: "175px",
              //   md: "100px",
              //   sm: "330px",
              //   xs: "100px",
              // },
              // marginTop: { lg: "50px", md: "50px", xs: "130px" },
              // position: "absolute",
              // display: "flex",
              // justifyContent: "center",
            }}
          >
            <img src={MoneyIcon} alt="dollar" />
          </Box>
          <Typography
            sx={{
              fontSize: "32px",
              fontWeight: 700,
              textAlign: "center",
              // marginLeft: { lg: "25px", xs: "10px" },
              marginTop: "40px",
            }}
          >
            Monetize Your Knowledge
          </Typography>
          <Typography
            sx={{
              fontSize: "24px",
              fontWeight: 600,
              textAlign: "center",
              // marginLeft: { lg: "25px", xs: "15px" },
              marginTop: "25px",
            }}
          >
            Generate consistent and unbounded income. Part time or Full time. On
            the Vulcan Learning platform you keep 100% of what you earn.
          </Typography>
        </Grid>
        <Grid lg={4} sm={12} md={4} xs={12} p={2} direction="column" sx={{ display:"flex", justifyContent:"center", alignItems:"center"}}> 
          <Box
            sx={{
              width: "150px",
              height: "150px",
              // marginLeft: {
              //   lg: "175px",
              //   md: "100px",
              //   sm: "330px",
              //   xs: "100px",
              // },
              // marginTop: "50px",
              // // position: "absolute",
              // display: "flex",
              // justifyContent: "center",
            }}
          >
            <img src={SharingIcon} alt="" />
          </Box>
          <Typography
            sx={{
              fontSize: "32px",
              fontWeight: 700,
              textAlign: "center",
              // marginLeft: { lg: "25px", xs: "15px" },
              marginTop: "40px",
            }}
          >
            Change Lives
          </Typography>
          <Typography
            sx={{
              fontSize: "24px",
              fontWeight: 600,
              textAlign: "center",
              // marginLeft: { lg: "60px", xs: "15px" },
              marginTop: "25px",
              
            }}
          >
            {" "}
            Share your experience and help learners explore their interests,
            gain new skills, and advance their careers.
          </Typography>
        </Grid>
        <Grid lg={4} sm={12} md={4} xs={12} p={2} direction="column" sx={{ display:"flex", justifyContent:"center", alignItems:"center"}}>
          <Box
            sx={{
              width: "150px",
              height: "150px",
              // marginLeft: {
              //   lg: "175px",
              //   md: "100px",
              //   sm: "330px",
              //   xs: "100px",
              // },
              // marginTop: "50px",
              // position: "absolute",
              // display: "flex",
              // justifyContent: "center",
            }}
          >
            <img src={TeachIcon} alt="" />
          </Box>
          <Typography
            sx={{
              fontSize: "32px",
              fontWeight: 700,
              textAlign: "center",
              marginLeft: "25px",
              marginTop: "40px",
            }}
          >
            You are in control
          </Typography>
          <Typography
            sx={{
              fontSize: "24px",
              fontWeight: 600,
              textAlign: "center",
              // marginLeft: { lg: "60px", xs: "15px" },
              marginTop: "25px",
            }}
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
    </>
  );
};

export default BecomeEducator;
