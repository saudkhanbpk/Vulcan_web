import React from "react";
import "./Footer.scss";
import footerlogo from "../../assets/images/footerlogo.png";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Grid, Typography, Box } from "@mui/material";





const Footer = () => {

  return (

    <Box sx={{
      backgroundColor: "blue", // set the background color here
      padding: "20px",
      color: "white",
      cursor:"pointer",
    }}
    onClick={null}>
      <Grid container spcing={3}>
        <Grid item xs={12} sm={12} md={4} lg={6}>
          <Box sx={{ pt: 1, pb: 0, pl: 1, display: "flex" }}>
            <img
              src={footerlogo}
               
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

        <Grid  xs={12} sm={6} md={4} lg={5} mt={3}>
          <Typography
            variant="h6"
            sx={{ margin: "10px", display: "inline-block", cursor:"pointer" }}
            onClick={null}
          >
            Privacy
          </Typography>
          <Typography
            variant="h6"
            sx={{ margin: "10px", display: "inline-block", cursor:"pointer"}}
            onClick={null}
          >
            Policy
          </Typography>
          <Typography
            variant="h6"
            sx={{ margin: "10px", display: "inline-block", cursor:"pointer"}}
            onClick={null}
          >
            Contact
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={1}>
            <TwitterIcon fontSize="large" sx={{
              margin: "15px",
              justifyContent: "center",
              display: "flex",
              backgroundColor: "white",
              width: "50px",
              height: "50px",
              padding: "10px",
              color: "blue",
              borderRadius: "10px",
              marginLeft: "60px",
              cursor:"pointer"
            }}/>
        </Grid>
      </Grid>
    </Box>

  );
};

export default Footer;
