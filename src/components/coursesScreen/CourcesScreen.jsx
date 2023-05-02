import React, { useState } from 'react'
import './CourcesScreen.scss'
import Button from '@mui/material/Button'
import { Box } from '@mui/system';
import { Grid, TextField, Typography } from '@mui/material';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';

const style = {
    position: 'absolute',
    top: 321,
    left: 846,
    transform: 'translate(-50%, -50%)',
    width: 509,
    height: 311,
    bgcolor: 'primary.paper',
    border: '2px solid #000',
    borderRadius: '30px',
    boxShadow: 24,
    p: 4,
};


const CourcesScreen = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);



    return (
        <div className='container-fluid'>
            <div className="row">
                <div className="col-12 courses-bg-img">
                    <div className=" coming-soon" >
                        <h1>Coming Soon</h1>
                        <h4>We’re in the process of partnering with the <br /> best Educators to offer a wide variety of <br /> educational classes. Check back soon.</h4>
                        <p>Join the waitlist to be notified when new <br /> courses are available.</p>
                        <Box display="flex" justifyContent="center">
                            <Button onClick={handleOpen} variant="contained" style={{ textTransform: 'capitalize', }}>
                                Join Waitlist
                            </Button>
                        </Box>
                        <div className="modal">
                            <Modal
                                justifyContent="center"
                                keepMounted
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="keep-mounted-modal-title"
                                aria-describedby="keep-mounted-modal-description"
                            >
                                <Box sx={style} className="">
                                    <Grid className='  modal-heading' container spacing={2}>
                                        <Grid item xs={8} md={10}>
                                            <Typography className='font-weight-bold ps-5 pe-5' display="flex" justifyContent="center" id="keep-mounted-modal-title" variant="h6" component="h2">
                                                Join Waitlist
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={8} md={2} className='pt-4'>
                                            <CloseIcon className='cursor-pointer' onClick={handleClose} color='#212121' />
                                        </Grid>

                                    </Grid>


                                    <Box className='d-flex  flex-column align-items-center justify-content-center'
                                        component="form"
                                       
                                        noValidate
                                        autoComplete="off"
                                    >
                                        <TextField className='m-4' display="flex" justifyContent="center" id="standard-basic" label="Email" variant="standard" />
                                        <Button className='btn-width m-4' variant="contained" style={{ textTransform: 'capitalize', }}>
                                            Join 
                                        </Button>
                                    </Box>
                                </Box>

                            </Modal>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourcesScreen;