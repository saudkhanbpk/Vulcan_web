import React from 'react'
import './CourcesScreen.scss'
import Button from '@mui/material/Button'
import { Box } from '@mui/system';

const CourcesScreen = () => {
    return (
        <div className='container-fluid'>
            <div className="row">
                <div className="col-12 courses-bg-img">
                    <div className=" coming-soon" >
                        <h1>Coming Soon</h1>
                        <h4>We’re in the process of partnering with the <br /> best Educators to offer a wide variety of <br /> educational classes. Check back soon.</h4>
                        <p>Join the waitlist to be notified when new <br /> courses are available.</p>
                        <Box display="flex" justifyContent="center">
                            <Button variant="contained" style={{ textTransform: 'capitalize', }}>
                                Join Waitlist
                            </Button>
                        </Box>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourcesScreen;