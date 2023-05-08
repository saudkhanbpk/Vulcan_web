import React from "react";
import "./Footer.scss";
import footerlogo from "../../assets/images/footerlogo.png";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Container, Grid, Typography, Box } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  myDiv: {
    backgroundColor: "blue", // set the background color here
    padding: "20px",
    color: "white",
  },
});
const Footer = () => {
  const classes = useStyles();
  return (
    <div>
      <footer className={classes.myDiv}>
        <Grid container spcing={3}>
          <Grid item xs={12} sm={12} md={12} lg={6}>
            <Box sx={{ pt: 1, pb: 0, pl: 1, display: "flex" }}>
              <img
                src={footerlogo}
                // className="img-fluid footer_loggoo"
                alt=""
              />

              <Typography
                variant="h1"
                sx={{
                  fontSize: { lg: "30px", sm: "27px", xs: "21px" },
                  fontWeight: "400",
                  marginTop: { lg: "4px", xs: "10px" },
                }}
              >
                Education for Everyone
              </Typography>
            </Box>
            <Typography
              variant="h1"
              sx={{
                display: "inline-block",
                fontSize: { lg: "18px", sm: "18px", xs: "16px" },
                marginTop: { xs: "7px" },
                fontWeight: "400",
              }}
            >
              © 2023 Vulcan Learning Institute LLC
            </Typography>
          </Grid>

          <Grid item xs={10} sm={6} md={6} lg={5} mt={3}>
            <Typography
              variant="h6"
              sx={{ margin: "10px", display: "inline-block" }}
            >
              Privacy
            </Typography>
            <Typography
              variant="h6"
              sx={{ margin: "10px", display: "inline-block" }}
            >
              Policy
            </Typography>
            <Typography
              variant="h6"
              sx={{ margin: "10px", display: "inline-block" }}
            >
              Contact
            </Typography>
          </Grid>
          <Grid item xs={2} sm={6} md={6} lg={1}>
            <Typography
              variant="h4"
              sx={{
                marginTop: "21px",
                justifyContent: "center",
                display: "flex",
                backgroundColor: "white",
                width: "50px",
                height: "50px",
                padding: "10px",
                color: "blue",
                borderRadius: "10px",
                marginLeft: { lg: "60px", xs: "10px" },
              }}
            >
              <TwitterIcon fontSize="large" className="twticon" />
            </Typography>
          </Grid>
        </Grid>
      </footer>
      {/* <div className="Main_footer">
        <div className="container-fluid p-3">
          <div className="row">
            <div className="col-md-6">
              <div className="d-flex align-items-center">
                <img
                  src={footerlogo}
                  className="img-fluid footer_loggoo"
                  alt=""
                />
                <p className="Education_text">Education for Everyone</p>
              </div>
              <p className="vulqu_mail text-start">
                © 2023 Vulcan Learning Institute LLC
              </p>
            </div>
            <div className="col-md-6  d-flex align-items-center">
              <div className="SOcial_sect d-flex justify-content-between  w-100">
                <div className="Peivacy_policy ">
                  <p>Privacy</p>
                  <p>Policy</p>
                  <p>Contact</p>
                </div>
                <div className="tweet_icon  d-flex justify-content-end align-items-center">
                  <div className="iconfortwet">
                    <TwitterIcon fontSize="large" className="twticon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Footer;
