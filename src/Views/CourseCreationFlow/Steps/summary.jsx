import React from 'react'
import { StepsHeader } from '../../Common/StepsHeader/stepsHeader'
import { useDispatch, useSelector } from 'react-redux'
import { Box, Rating, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import {
    ContinueButton, Footer, PreviousButton,
} from '../styles'
import { decrementCoursesSteps, resetCoursesSteps } from '../../../Infrastructure/States/coursesStepsSlice'
import { ShowErrorToast } from '../../Common/Toast/toast'
import { useNavigate } from 'react-router-dom'
import { useTheme } from '@mui/material/styles';
import becomeimg from "../../../Assets/Images/mblteacher.png";
import DoneIcon from '@mui/icons-material/Done';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

export const Summary = () => {
    const objectives = [
        'Objective 1',
        'Objective 2',
        'Objective 3',
        'Objective 4',
        'Objective 5',
    ];
    const learningObjectives = [
        'Objective 1',
        'Objective 2',
        'Objective 3',
        'Objective 4',
        'Objective 5',
    ];
    const theme = useTheme();
    const navigate = useNavigate()
    const courseSteps = useSelector((state) => state.courseSteps.courseSteps)
    const handleExit = () => {
        dispatch(resetCoursesSteps)
        navigate('/dashboard')
    }
    const dispatch = useDispatch()
    const handleDec = async () => {
        if (courseSteps > 1) {
            try {
                dispatch(decrementCoursesSteps())
            } catch (error) {
                ShowErrorToast(error)
            }
        }
    }
    return (
        <Box height={"100vh"} >
            <StepsHeader steps={courseSteps} handleExit={handleExit} />
            <Box height={"100px"}></Box>
            <Grid
                container
                py={5}
                justifyContent={'center'}
                px={{ lg: 4, sm: 4, xs: 1 }}
            >
                <Grid lg={3} md={10} sm={12} xs={12} mb={{ sm: 3, xs: 3, md: 4 }}
                >
                    <Box
                        sx={{
                            display: {
                                xs: 'flex',
                            },
                            flexDirection: {
                                xs: 'column',
                            },
                            justifyContent: {
                                xs: 'space-between',
                                sm: 'space-between',
                                md: 'space-between',
                            },
                            width: { xs: '100%', sm: '100%', md: '100%', lg: '90%' },
                            gap: 2,
                            border: `5px solid ${theme.palette.primary.main}`,
                            borderRadius: 4,
                        }}
                        pb={2}
                    >
                        <Box>
                            <img
                                src={becomeimg}
                                alt=""
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    borderBottom: `5px solid ${theme.palette.primary.main}`,
                                    borderBottomRadius: 10,
                                    borderRadius: '5%',
                                    objectFit: 'cover'
                                }}
                            />

                            {/* <Typography variant="h6" sx={styles.logo}>Learning Objectives dhdb djdbdk hdddkd </Typography> */}
                            <Typography variant="h1" sx={{ 'font-size': '18px' }} color={"primary"}>Complete 2024 web Development Bootcamp</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, px: 2 }} >
                            <img
                                src={becomeimg}
                                width={'50px'}
                                height={'50px'}
                                alt=""
                                style={{ border: `1px solid ${theme.palette.primary.main}`, borderRadius: '50%', objectFit: 'cover', }}
                            />
                            <Box>
                                <Typography sx={{ fontWeight: '700' }}>By John Doe</Typography>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Rating
                                        sx={{ fontSize: '1rem' }}
                                        name="star-rating"
                                        value={3.5}
                                        precision={0.5}
                                    />

                                    <Typography variant="h6" sx={{ fontSize: '8px' }}>
                                        4.9
                                    </Typography>
                                    <Typography variant="h6" sx={{ fontSize: '8px', color: 'blue' }} ml={.2}>
                                        (40 ratings)
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, }} px={3}>
                            <Typography variant="h6" sx={{ fontWeight: '800', fontSize: '10px', color: theme.palette.primary.main }}>Next Cohort starting on 12/18 </Typography>
                            <Typography variant="h6" sx={{ fontWeight: '700', fontSize: '15px', }}>M/T/Th @ 4pm-5pm PST </Typography>
                            <button style={{ backgroundColor: theme.palette.primary.main, color: 'white', padding: '3px', borderRadius: '20px', fontWeight: 'bold' }}>Enroll</button>
                            <Typography sx={{ color: "blue", fontSize: '12px', display: 'flex', justifyContent: 'center' }} >See More Cohort Schedule</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid lg={9} md={10} sm={12} xs={12}>
                    <Box
                        py={1}
                        px={2}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column', // Display in a column for all screen sizes
                            width: { xs: '100%', sm: '100%', md: '100%', lg: '80%' },
                            marginBottom: 4,
                            borderRadius: 4,

                            justifyContent: 'space-between',
                            gap: 1,
                            border: `5px solid ${theme.palette.primary.main}`,
                        }}
                    >
                        <Typography variant="h6" color= {'primary'} sx={{ fontWeight: '700',}}>
                            Objective
                        </Typography>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'row', // Display in a row for all screen sizes
                                flexWrap: 'wrap',
                                // Allow items to wrap to the next line
                            }}
                        >
                            {objectives.map((objective, index) => (
                                <Typography
                                    key={index}
                                    variant="h6"
                                    sx={{
                                        fontWeight: '400',
                                        flexBasis: { xs: '100%', sm: '48%', md: '48%', lg: '48%' },
                                        boxSizing: 'border-box',
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}
                                >
                                    <DoneIcon sx={{ color: theme.palette.success.main, fontSize: 20, marginRight: 1 }} />
                                    {objective}
                                </Typography>
                            ))}
                        </Box>
                    </Box>


                    <Box
                        py={1}
                        px={2}
                        sx={{
                            display: {
                                xs: 'flex',

                            },
                            flexDirection: {
                                xs: 'column',

                            },
                            justifyContent: {
                                xs: 'space-between',
                                sm: 'space-between',
                                md: 'space-between',
                            },
                            width: { xs: '100%', sm: '100%', md: '100%', lg: '80%' },
                            gap: 1,
                            border: `5px solid ${theme.palette.primary.main}`,
                            borderRadius: 4,
                            marginBottom: 4
                        }}
                    >
                        <Typography variant="h6" color= {'primary'} sx={{ fontWeight: '700',}}>Curriculum</Typography>
                        <Accordion
                            sx={{
                                width: '50%',
                                maxWidth: '300px',
                            }}
                        >
                            <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
                                <Typography variant="subtitle1">Front End Web Development</Typography>
                                <ExpandMoreIcon style={{ paddingBottom: '3px' }} />
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography variant="subtitle2">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion
                            sx={{
                                width: '50%',
                                maxWidth: '300px',
                            }}
                        >
                            <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
                                <Typography variant="subtitle1">Introduction to Html</Typography>
                                <ExpandMoreIcon style={{ paddingBottom: '3px' }} />
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography variant="subtitle2">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion
                            sx={{
                                width: '50%',
                                maxWidth: '300px',
                            }}
                        >
                            <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
                                <Typography variant="subtitle1">intermediate html</Typography>
                                <ExpandMoreIcon style={{ paddingBottom: '3px' }} />
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography variant="subtitle2">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Box>
                    <Box
                        py={1}
                        px={2}
                        sx={{
                            display: {
                                xs: 'flex',
                            },
                            flexDirection: {
                                xs: 'column',
                            },
                            justifyContent: {
                                xs: 'space-between',
                                sm: 'space-between',
                                md: 'space-between',
                            },
                            width: { xs: '100%', sm: '100%', md: '100%', lg: '80%' },
                            gap: 1,
                            border: `5px solid ${theme.palette.primary.main}`,
                            borderRadius: 4,
                            marginBottom: 4,
                        }}
                    >
                        <Typography variant="h6" color= {'primary'} sx={{ fontWeight: '700',}}>
                            Requirements
                        </Typography>
                        <ul style={{ listStyleType: 'disc', paddingLeft: '20px', margin: '0' }}>
                            {learningObjectives.map((objective, index) => (
                                <li key={index} style={{ fontWeight: '500', fontSize: '20px', }}>
                                    {objective}
                                </li>
                            ))}
                        </ul>
                    </Box>

                    <Box

                        px={2}
                        sx={{
                            display: {
                                xs: 'flex',

                            },
                            flexDirection: {
                                xs: 'column',

                            },
                            justifyContent: {
                                xs: 'space-between',
                                sm: 'space-between',
                                md: 'space-between',
                            },
                            width: { xs: '100%', sm: '100%', md: '100%', lg: '80%' },
                            gap: 1,
                            border: `5px solid ${theme.palette.primary.main}`,
                            borderRadius: 4,
                            marginBottom: 4,
                        }}
                    >
                        <Typography variant="h6" color= {'primary'} sx={{ fontWeight: '700',}}>Description</Typography>

                    </Box>
                    <Box

                        px={2}
                        sx={{
                            display: {
                                xs: 'flex',

                            },
                            flexDirection: {
                                xs: 'column',

                            },
                            justifyContent: {
                                xs: 'space-between',
                                sm: 'space-between',
                                md: 'space-between',
                            },
                            width: { xs: '100%', sm: '100%', md: '100%', lg: '80%' },
                            gap: 1,
                            border: `5px solid ${theme.palette.primary.main}`,
                            borderRadius: 4,
                            
                        }}
                    >
                        <Typography variant="h6" color= {'primary'} sx={{ fontWeight: '700',}}>Intended Learner</Typography>

                    </Box>
                </Grid>
            </Grid>
            <Footer>
                <Grid container justifyContent={"space-between"} p={2}>
                    <Grid>
                        {courseSteps > 1 ? (
                            <PreviousButton variant="contained" onClick={handleDec}>
                                Previous
                            </PreviousButton>
                        ) : (
                            <></>
                        )}
                    </Grid>
                    <Grid>
                        <Grid>
                            <ContinueButton variant="contained" onClick={() => navigate('/dashboard')}>
                                {courseSteps <= 5 ? "Continue" : "Finish"}
                            </ContinueButton>
                        </Grid>
                    </Grid>
                </Grid>
            </Footer>
            <Box height={"100px"}></Box>
        </Box>
    )
}