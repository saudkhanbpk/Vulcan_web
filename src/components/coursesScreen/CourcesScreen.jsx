import React, { useState } from "react";
import "./CourcesScreen.scss";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import { Grid, TextField, Typography } from "@mui/material";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import { mainFont, specialFont } from "../../theme/FontFamily";
import ModalComponent from "./modal/ModalComponent";
 

const style = {
  position: "absolute",
  top: { xs: 370, sm: 325, md: 325, lg: 325, xl: 325 },
  left: {
    xs: 195,
    sm: 400,
    md: 700,
    lg: 880,
    xl: 880,
  },
  transform: "translate(-50%, -50%)",
  width: {
    xs: 340,
    sm: 490,
    md: 490,
    lg: 490,
    xl: 490,
  },
  height: 305,
  bgcolor: "white",
  border: "2px solid #000",
  borderRadius: "30px",
  boxShadow: 24,
  p: 4,
};


const CourcesScreen = () => {
  
  const [open, setOpen] = useState(false);
  
  const modalHandle=()=>{
    setOpen(!open)
  }

  return (
    <>
    <ModalComponent open={open} setOpen={setOpen}/>
    
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 courses-bg-img">
          <div className="coming-soon">
            
            <Box>
            <Typography  color="primary" align="center"  sx={{ fontWeight:'400', fontSize:'40px', fontFamily:`${specialFont}`, pb:8}}>
              Coming Soon
            </Typography>
            <Typography variant="h5" align="center" sx={{pr:5, pl:5, fontWeight:'bold', fontSize:'24px',pb:5}}>
            We’re in the process of partnering with the  best Educators
              to offer a wide variety of  educational classes. Check back
              soon.
            </Typography>
            <Typography  align="center" sx={{pr:5, pl:5, fontWeight:'400', fontSize:'20px', pb:3}}>  Join the waitlist to be notified when new  courses are
              available</Typography>
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


            {/* <div className="modal"> */}
              {/* <Modal
                justifyContent="center"
                keepMounted
                open={open}
                onClose={handleClose}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
              >
                <Box sx={style} >
                  <Grid className="  modal-heading" container spacing={2}>
                    <Grid item xs={10} md={10}>
                      <Typography
                        className="font-weight-bold ps-5 pe-5"
                        display="flex"
                        justifyContent="center"
                        id="keep-mounted-modal-title"
                        variant="h5"
                        component="h2"
                        sx={{fontFamily: `${mainFont} !important`, paddingRight:"10px", fontWeight:"600 !important"}}
                      >
                        Join Waitlist
                      </Typography>
                    </Grid>
                    <Grid item xs={2} md={2} className="pt-4">
                      <CloseIcon
                        className="cursor-pointer"
                        onClick={handleClose}
                        color="#212121"
                      />
                    </Grid>
                  </Grid>

                  <Box
                    className="d-flex  flex-column align-items-center justify-content-center"
                    component="form"
                    noValidate
                    autoComplete="off"
                  >
                    <TextField
                      className="m-4"
                      display="flex"
                      justifyContent="center"
                      id="standard-basic"
                      label="Email"
                      InputLabelProps={{
                        style: {
                          paddingTop: "5px",
                          fontSize: 16,
                        },
                      }}
                      InputProps={{
                        style: {
                          fontSize: 16,
                        },
                      }}
                      variant="standard"
                    />
                    <Button
                      className="btn-width m-4"
                      variant="contained"
                      style={{ textTransform: "capitalize" }}
                    >
                      Join
                    </Button>
                  </Box>
                </Box>
              </Modal> */}
            </div>
          </div>

          
        </div>
      </div>
      </>
    
  );
};

export default CourcesScreen;
