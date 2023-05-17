import React from "react";
// import "./footer.scss";
import footerlogo from "../../assets/images/footerlogo.png";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Typography, Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { styles } from "./styles";

const Footer = () => {
  return (
    <>
      <Box sx={styles.mainBox}>
        <Grid container spcing={3}>
          {/* Sub Grid 1 */}
          <Grid xs={12} sm={12} md={12} lg={6}>
            <Box sx={styles.subGrid1Box}>
              <Box sx={{ cursor: "pointer" }}>
                <img src={footerlogo} alt="" />
              </Box>

              <Typography variant="h1" sx={styles.subGrid1BoxTypo}>
                Education for Everyone
              </Typography>
            </Box>
            <Typography
              variant="h1"
              className="container"
              sx={styles.subGrid1Typo}
            >
              © 2023 Vulcan Learning Institute LLC
            </Typography>
          </Grid>

          {/* Sub Grid 2 */}
          <Grid
            xs={10}
            sm={11}
            md={11}
            lg={5}
            mt={2}
            sx={styles.subGrid2}
            justifyContent="space-around"
            alignItems="center"
          >
            <Typography variant="h6" sx={styles.subGrid2Typo}>
              Privacy
            </Typography>
            <Typography variant="h6" sx={styles.subGrid2Typo}>
              Policy
            </Typography>
            <Typography variant="h6" sx={styles.subGrid2Typo}>
              Contact
            </Typography>
          </Grid>

          {/* Sub Grid 3 */}
          <Grid xs={2} sm={1} md={1} lg={1}>
            <TwitterIcon
              fontSize="large"
              className="twticon"
              sx={styles.subGrid3Icon}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Footer;
