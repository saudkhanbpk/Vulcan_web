import { Box } from '@mui/material';
import React from 'react'
import { Button } from 'react-bootstrap';
import { Navigate, useNavigate } from 'react-router-dom';

const HowItWorks = () => {
  const navigate = useNavigate();

  const navigateToContacts = () => {
    // 👇️ navigate to /contacts
    navigate('/educator-faq');
  };

  return (
    <div  >


      <Box display="flex" justifyContent="center">
        <Button onClick={navigateToContacts} variant="contained" style={{ textTransform: 'capitalize', }}>
          Get Started
        </Button>
      </Box>

      <Box display="flex" justifyContent="center">
        <Button onClick={()=>navigate('/educator-faq')}  variant="contained" style={{ textTransform: 'capitalize', }}>
          Learn More
        </Button>
      </Box>
    </div>
  )
}

export default HowItWorks;