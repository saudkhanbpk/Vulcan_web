import React from "react";
import "../CoursesScreen.scss";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import { Grid, TextField, Typography, } from "@mui/material";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import { mainFont } from "../../../theme/FontFamily";

// const useStyles = makeStyles({
//     joinWaitListTypo: {
//         fontSize: "32", fontFamily: `${mainFont} !important`, paddingRight: "10px", fontWeight: "bold !important"
//     },
// });
const ModalComponent = ({ open, setOpen, coursesModal }) => {
    const handleClose = () => setOpen(false);

    const styleWelcomeBoxModal = {
        position: "absolute",
        top: {
            xs: 100,
            sm: 100,
            lg: 100
        },
        left: {
            sm: 40,
            md: 100,
            lg: 180,
        },

        width: {
            lg: 500,
        },
        height: 421,
        bgcolor: "white",
        border: "1px solid #000",
        borderRadius: "20px",
        boxShadow: 24,
        p: 4,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center"
    };

    const styleCoursesScreenModal = {
        position: "absolute",
        top: { xs: 370, sm: 325, md: 325, lg: 470 },
        left: {
            xs: 195,
            sm: 400,
            md: 700,
            lg: 1050,
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

    // const classes = useStyles();

    const myStyles ={
        typoHeading:{ fontSize: "32", fontFamily: `${mainFont} !important`, paddingRight: "10px", fontWeight: "bold !important" },
        input:{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" },
    }

    return (
        <>
            <Modal
                justifyContent="center"
                keepMounted
                open={open}
                onClose={handleClose}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
            >
                <Box sx={coursesModal ? styleCoursesScreenModal : styleWelcomeBoxModal} >
                    <Grid container display="flex" justifyItems="center" alignItems="center" >
                        <Grid

                            xs={10}
                            md={10}
                            display="flex"
                            justifyContent="center"
                            alignItems="center">
                            <Typography
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                                id="keep-mounted-modal-title"
                                variant="h5"
                                component="h2"
                                // className={classes.joinWaitListTypo}
                                sx={myStyles.typoHeading}
                            >
                                Join Waitlist
                            </Typography>
                        </Grid>
                        <Grid
                            xs={2}
                            md={2}
                            display="flex"
                            justifyContent="center"
                            alignItems="center">
                            <CloseIcon
                                className="cursor-pointer"
                                onClick={handleClose}
                                color="#212121"
                            />
                        </Grid>
                    </Grid>

                    <Box
                        // className="d-flex  flex-column align-items-center justify-content-center"
                        sx={myStyles.input}
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
            </Modal>
        </>
    )
}

export default ModalComponent;