import React from "react";
import footerlogo from "../../assets/images/footerlogo.png";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Typography, Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { styles } from "./styles";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
 
  return (
    <>
      <Box sx={styles.mainBox}>
        <Grid container spcing={3}>
          {/* Sub Grid 1 */}
          <Grid xs={12} sm={12} md={12} lg={6}sx={{ mb:{xs:2, sm:2}}}>
            <Box sx={styles.subGrid1Box}>
              <Box sx={{ cursor: "pointer" }} onClick={() => navigate("/")}>
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
            sx={styles.subGrid2}
            display="flex"
            justifyContent="space-around"
            alignItems="center"
            
          >
            <Typography
              variant="h6"
              sx={styles.subGrid2Typo}
              onClick={() => navigate("/policies")}
            >
              Policies
            </Typography>

            <Typography
              variant="h6"
              sx={styles.subGrid2Typo}
              onClick={() => navigate("/privacy")}
            >
              Privacy
            </Typography>

            <Typography
              variant="h6"
              sx={styles.subGrid2Typo}
              onClick={() => navigate("/contact")}
            >
              Contact
            </Typography>
          </Grid>

          {/* Sub Grid 3 */}
          <Grid xs={2} sm={1} md={1} lg={1} display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <Link
              to="https://twitter.com/vulcaninstitute"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterIcon
                fontSize="large"
                className="twticon"
                sx={styles.subGrid3Icon}
              />
            </Link>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Footer;
