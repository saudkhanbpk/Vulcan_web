import React, { useState } from "react";
import "./coursesScreen.scss";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import { Container, Typography, styled } from "@mui/material";
import ModalComponent from "./Modal/modalComponent";
import { styles } from "./styles";
import image from "../../assets/images/coursesBgImage.png";

const CoursesScreen = () => {
  const [open, setOpen] = useState(false);

  const modalHandle = () => {
    setOpen(!open);
  };

  const BannerContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    },
  }));

  // const Header = styled(Typography)(({ theme }) => ({
  //   fontWeight: "bold",
  //   marginBottom: theme.spacing(2),
  // }));

  // const Paragraph = styled(Typography)(({ theme }) => ({
  //   marginBottom: theme.spacing(2),
  // }));

  const Image = styled("img")({
    width: "100%",
    height: "90vh",
  });
  const RightSide = styled(Box)(({ theme }) => ({
    flex:1,
    // zIndex:1,

  }))
  return (
    <>
      <ModalComponent open={open} setOpen={setOpen} coursesModal={true} />

      <div className="container-fluid">
        <div className="row">
          <div className="col-12 courses-bg-img">
            <div className="coming-soon">
              <Box>
                <Typography
                  color="primary"
                  align="center"
                  sx={styles.typoHeading}
                >
                  Coming Soon
                </Typography>
                <Typography
                  variant="h5"
                  align="center"
                  sx={{
                    pr: 5,
                    pl: 5,
                    fontWeight: "bold",
                    fontSize: "24px",
                    pb: 5,
                  }}
                >
                  We’re in the process of partnering with the best Educators to
                  offer a wide variety of educational classes. Check back soon.
                </Typography>
                <Typography align="center" sx={styles.typoDescription}>
                  {" "}
                  Join the waitlist to be notified when new courses are
                  available
                </Typography>
              </Box>
              <Box display="flex" justifyContent="center">
                <Button
                  onClick={modalHandle}
                  variant="contained"
                  style={{ textTransform: "capitalize" }}
                >
                  Join Waitlist
                </Button>
              </Box>
            </div>
          </div>
        </div>
      </div>

      {/* <Box sx={{ bgcolor: "#f5f5f5" }}>
       
        <BannerContainer>
          <Box sx={{ flex: 1 }}>
            <Image src={image} alt="Banner" />
          </Box>

          <RightSide >
            <Typography color="primary" align="center" sx={styles.typoHeading}>
              Coming Soon
            </Typography>
            <Typography
              variant="h5"
              align="center"
              sx={{
                pr: 5,
                pl: 5,
                fontWeight: "bold",
                fontSize: "24px",
                pb: 5,
              }}
            >
              We’re in the process of partnering with the best Educators to
              offer a wide variety of educational classes. Check back soon.
            </Typography>
            <Typography align="center" sx={styles.typoDescription}>
              {" "}
              Join the waitlist to be notified when new courses are available
            </Typography>

            <Box display="flex" justifyContent="center">
              <Button
                onClick={modalHandle}
                variant="contained"
                style={{ textTransform: "capitalize" }}
              >
                Join Waitlist
              </Button>
            </Box>
          </RightSide>
        </BannerContainer>
      </Box> */}
    </>
  );
};

export default CoursesScreen;
