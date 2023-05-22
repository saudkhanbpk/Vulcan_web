import React, { useState } from "react";
import "./coursesScreen.scss";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import ModalComponent from "./Modal/modalComponent";
import { styles } from "./styles";

const CoursesScreen = () => {
  const [open, setOpen] = useState(false);

  const modalHandle = () => {
    setOpen(!open);
  };

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
    </>
  );
};

export default CoursesScreen;
