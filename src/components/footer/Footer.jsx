import React from "react";
import "./Footer.scss";
import footerlogo from "../../assets/images/footerlogo.png";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Typography, Box, } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2'



const myStyles = {
  mainBox: { backgroundColor: "blue", padding: "20px", color: "white", },
  // Sub Grid 1
  subGrid1Box: { pt: 1, pb: 0, pl: 1, display: "flex", },
  subGrid1BoxTypo: {
    fontSize: { lg: "30px", sm: "27px", xs: "21px" },
    fontWeight: "400",
    marginTop: { lg: "4px", xs: "10px" },
  },
  subGrid1Typo: {
    display: "inline-block",
    fontSize: { lg: "18px", sm: "18px", xs: "16px" },
    marginTop: { xs: "7px" },
    fontWeight: "400",
  },
  // Sub Grid 2
  subGrid2: { display: "flex", flexDirection: { lg: "row", sm: "row" }, justifyContent: { lg: "space-around", md: "start" }, alignItems: "center" },
  subGrid2Typo: { margin: "10px", display: "inline-block", cursor: "pointer" },

  // Sub Grid 3
  subGrid3Icon: {
    marginTop: "21px",
    justifyContent: "center",
    display: "flex",
    backgroundColor: "white",
    width: "50px",
    height: "50px",
    padding: "10px",
    color: "blue",
    borderRadius: "10px",
    cursor: "pointer",
    marginLeft: { lg: "60px", xs: "10px" },
  }

}

const Footer = () => {

  return (
    <>
      <Box sx={myStyles.mainBox}>
        <Grid container spcing={3}>
          {/* Sub Grid 1 */}
          <Grid   xs={12} sm={12} md={12} lg={6}>
            <Box sx={myStyles.subGrid1Box}>
              <Box sx={{ cursor: "pointer" }}>
                <img
                  src={footerlogo}
                  alt=""
                />

              </Box>

              <Typography
                variant="h1"
                sx={myStyles.subGrid1BoxTypo}
              >
                Education for Everyone
              </Typography>
            </Box>
            <Typography
              variant="h1"
              sx={myStyles.subGrid1Typo}
            >
              © 2023 Vulcan Learning Institute LLC
            </Typography>
          </Grid>

          {/* Sub Grid 2 */}
          <Grid   xs={10} sm={11} md={11} lg={5} mt={2} sx={myStyles.subGrid2} justifyContent="space-around" alignItems="center">
            <Typography
              variant="h6"
              sx={myStyles.subGrid2Typo}
            >
              Privacy
            </Typography>
            <Typography
              variant="h6"
              sx={myStyles.subGrid2Typo}
            >
              Policy
            </Typography>
            <Typography
              variant="h6"
              sx={myStyles.subGrid2Typo}
            >
              Contact
            </Typography>
          </Grid>

          {/* Sub Grid 3 */}
          <Grid   xs={2} sm={1} md={1} lg={1}>


            <TwitterIcon fontSize="large" className="twticon"
              sx={myStyles.subGrid3Icon} />

          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Footer;

