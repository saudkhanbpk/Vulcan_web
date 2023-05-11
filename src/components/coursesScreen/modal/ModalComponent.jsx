import React, { useState } from "react";
import "../CourcesScreen.scss";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import { Grid, TextField, Typography } from "@mui/material";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import { mainFont, specialFont } from "../../../theme/FontFamily";


const ModalComponent = ({ open, setOpen }) => {
    // const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
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
                <Box sx={style} >
                    <Grid container >
                        <Grid
                            item
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
                                sx={{ fontSize:"32", fontFamily: `${mainFont} !important`, paddingRight: "10px", fontWeight: "bold !important" }}
                            >
                                Join Waitlist
                            </Typography>
                        </Grid>
                        <Grid item  
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
            </Modal>
        </>
    )
}

export default ModalComponent;