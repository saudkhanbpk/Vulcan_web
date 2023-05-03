import React from 'react'
import './BecomeEducator.scss'
import { Box } from '@mui/system';
import { Button } from '@mui/material';
import MoneyIcon from '../../assets/images/moneyIcon.png';
import SharingIcon from '../../assets/images/sharingIcon.png';
import TeachIcon from '../../assets/images/teachIcon.png';
import Learn from '../../assets/images/learn.png';
import TeachBlack from '../../assets/images/teachBlack.png';
const handleClick = () => {
    console.log('clicked')
}

const BecomeEducator = () => {
    return (
        <div className='container-fluid'>
            <div className="row">
                <section className='bg-img'>
                    <div className="teachLive">
                        <p className='h1 fw-bold text-start'>Teach Live Classes Online</p>
                        <p className='h3 fw-bold text-start'>Become an Educator on the Vulcan</p>
                        <p className='h3 fw-bold text-start'> Platform. Enrich lives. Earn income.</p>
                        <div className="bottom pt-5">
                            
                            <Box display="flex" justifyContent="center">
                                <Button variant="contained" style={{ textTransform: 'capitalize', }}>
                                   Get Started
                                </Button>
                            </Box>

                            <Box display="flex" justifyContent="center">
                                <Button variant="contained" style={{ textTransform: 'capitalize', }}>
                                   Learn More
                                </Button>
                            </Box>
                        </div>

                       
                    </div>
                </section>
                <section className=' '>
                    <p className='h3 p-5 text-start fw-bold'>Why teach on the Vulcan Learning platform?</p>
                    <div className="row">
                        <div className="col-md-4 p-5">
                            <div className="row">
                                <div className="  img-div d-flex justify-content-center align-items-center ">
                                    <img src={MoneyIcon} alt="" className='img-fluid' />
                                </div>
                                <p className='h3 fw-bold p-2'>Monetize Your Knowledge</p>
                                <p className='fw-bold'>Generate consistent and unbounded income. Part time or Full time. On the Vulcan Learning platform you keep 100% of what you earn.</p>
                            </div>
                        </div>
                        <div className="col-md-4 p-5">
                            <div className="row">
                                <div className="img-div d-flex justify-content-center align-items-center ">
                                    <img src={SharingIcon} alt="" />
                                </div>
                                <p className='h3 fw-bold p-2'>Change Lives</p>
                                <p className='fw-bold'>Share your experience and help learners explore their interests, gain new skills, and advance their careers.</p>
                            </div>
                        </div>
                        <div className="col-md-4 p-5">
                            <div className="row">
                                <div className="img-div d-flex justify-content-center align-items-center ">
                                    <img src={TeachIcon} alt="" />
                                </div>
                                <p className='h3 fw-bold p-2'>You are in control</p>
                                <p className='fw-bold'>Set the course curriculum, choose the class schedule, and devise the teaching strategies that work best for you. </p>
                            </div>
                        </div>

                    </div>
                    <Box className="p-5 " display="flex" justifyContent="center">
                        <Button variant="contained" style={{ textTransform: 'capitalize', }}>
                            Educator FAQ
                        </Button>
                    </Box>
                </section>
            </div>
        </div>
    )
}

export default BecomeEducator;