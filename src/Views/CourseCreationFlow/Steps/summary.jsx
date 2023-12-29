import React from 'react'
import { StepsHeader } from '../../Common/StepsHeader/stepsHeader'
import { useDispatch, useSelector } from 'react-redux'
import { Box, Rating, Typography, Button } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import {
    ContinueButton, Footer, PreviousButton,
} from '../styles'
import { decrementCoursesSteps, resetCoursesSteps } from '../../../Infrastructure/States/coursesStepsSlice'
import { ShowErrorToast } from '../../Common/Toast/toast'
import { useNavigate } from 'react-router-dom'
import { useTheme } from '@mui/material/styles';
import DoneIcon from '@mui/icons-material/Done';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { specialFont } from '../../../Infrastructure/Theme/fontFamily'
import { Loader } from '../../Common/loader'
import courseVector from '../../../Assets/Images/courseVector.png'
import profileVector from '../../../Assets/Images/vector.png'

export const Summary = () => {
    const theme = useTheme();
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const courseSteps = useSelector((state) => state.courseSteps.courseSteps)
    const userData = useSelector((state) => state.userData.data)
    const loading = useSelector((state) => state.userData.loading)
    const avatar = userData?.educator?.profile?.avatar
    const firstName = userData?.account?.first_name
    const lastName = userData?.account?.last_name
    const title = userData?.educator?.courses?.pending?.basics?.title
    const first_class = userData?.educator?.courses?.pending?.class_schedule?.first_class
    const objectives = userData?.educator?.courses?.pending?.intended_learner?.objectives
    const prerequisites = userData?.educator?.courses?.pending?.intended_learner?.prerequisites
    const intended_learner = userData?.educator?.courses?.pending?.intended_learner?.description
    const courseImage = userData?.educator?.courses?.pending?.details?.course_image
    const description = userData?.educator?.courses?.pending?.details?.description
    const curriculum = userData?.educator?.courses?.pending?.curriculum
    console.log(userData)
    const timestampInMilliseconds = first_class && first_class * 1000
    // Create a Date object
    const date = first_class && new Date(timestampInMilliseconds);

    // Format the date with the desired options
    const weekday = first_class && new Intl.DateTimeFormat('en-US', {
        day: 'numeric',
    }).format(date);
    const month = first_class && new Intl.DateTimeFormat('en-US', {
        month: 'numeric',
    }).format(date);
    const formatedDate =first_class && new Intl.DateTimeFormat('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        timeZoneName: 'short'
    }).format(date);

    console.log("formatedDate", formatedDate)
    console.log("weekday", weekday)
    console.log("month", month)

    const handleExit = () => {
        dispatch(resetCoursesSteps)
        navigate('/dashboard')
    }
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
            {
                loading ? <Loader /> :
                    <Grid
                        container
                        display={"flex"}
                        alignItems={"start"}
                        justifyContent={"center"}
                        px={{ xs: 2, sm: 2, md: 10, lg: 10 }}
                        gap={5}
                    >
                        <Grid lg={3} md={10} sm={12} xs={12}
                        >
                            <Box
                                border={`5px solid ${theme.palette.primary.main}`}
                                borderRadius={10}

                            >
                                <Box
                                    borderBottom={`5px solid ${theme.palette.primary.main}`}
                                    borderRadius={8}
                                    overflow="hidden"
                                    height={{ xs: '300px', sm: '300px', md: 'auto', lg: 'auto' }}
                                    sx={{background:"grey"}}
                                >
                                    <img
                                        src={courseImage || courseVector}
                                        alt="image not found"
                                        style={{
                                            objectFit: 'cover',
                                            height: '100%',  // Adjust this value if needed
                                            width: '100%',
                                        }}
                                    />
                                </Box>

                                <Box px={2} display={"flex"} flexDirection={'column'} gap={1}>
                                    <Typography variant="h1" sx={{ fontSize: '18px' }} color={"primary"} pt={1} fontFamily={specialFont}>{title}</Typography>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }} >
                                        <img
                                            src={avatar || profileVector}
                                            width={'50px'}
                                            height={'50px'}
                                            alt=""
                                            style={{ border: `1px solid ${theme.palette.primary.main}`, borderRadius: '50%', objectFit: 'cover', }}
                                        />
                                        <Box>
                                            <Typography sx={{ fontWeight: '700', textTransform: 'capitalize' }}>{firstName}{" "}{lastName}</Typography>
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
                                                <Typography variant="h6" sx={{ fontSize: '8px', color: 'blue' }}>
                                                    (40 ratings)
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, }}>
                                        <Typography variant="h6" sx={{ fontWeight: '800', fontSize: '10px', color: theme.palette.primary.main }}>Next Cohort starting on {weekday}/{month} </Typography>
                                        <Typography variant="h6" sx={{ fontWeight: '700', fontSize: '15px', }}>M/T/Th @ 4pm-5pm PST </Typography>
                                        <Button variant="contained" color="primary">
                                            Enroll Now
                                        </Button>
                                        <Typography sx={{ color: "blue", fontSize: '12px', display: 'flex', justifyContent: 'center' }} >See More Cohort Schedule</Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid lg={8} md={10} sm={12} xs={12} display={"flex"} flexDirection={"column"}
                            justifyContent={"center"} alignItems={"start"} gap={5}>
                            {objectives && <Box
                                p={3}
                                width={"100%"}
                                sx={{
                                    borderRadius: 4,
                                    gap: 1,
                                    border: `5px solid ${theme.palette.primary.main}`,
                                }}
                            >
                                <Typography variant="h6" fontFamily={specialFont} color={'primary'}
                                    sx={{ fontWeight: '700', }} pb={3}>
                                    Learning Objectives
                                </Typography>
                                <Box
                                    display='flex'
                                    flexDirection='row'
                                    flexWrap='wrap'
                                    gap={2}
                                >
                                    {Object.keys(objectives).map((key) => (
                                        objectives[key] && (
                                            <Box key={key} display={'flex'} width={{lg:"48%"}} alignItems={"start"}>
                                                <DoneIcon sx={{ color: theme.palette.primary.main, fontSize: 20, marginRight: 1 }} />
                                                <Typography
                                                    key={key}
                                                    variant="body5"
                                                    sx={{
                                                        fontWeight: '400',
                                                        wordBreak: 'break-word'
                                                    }}
                                                >
                                                    {objectives[key]}
                                                </Typography>
                                            </Box>
                                        )
                                    ))}
                                </Box>
                            </Box>}
                            {curriculum && <Box
                                p={3}
                                width={"100%"}
                                sx={{
                                    border: `5px solid ${theme.palette.primary.main}`,
                                    borderRadius: 4,
                                }}
                            >
                                <Typography variant="h6" color={'primary'} fontFamily={specialFont} fontWeight={'700'} pb={3}>
                                    Curriculum
                                </Typography>
                                {curriculum.map((item, index) => (
                                    <Accordion key={index}>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls={`panel${index + 1}-content`}
                                            id={`panel${index + 1}-header`}
                                        >
                                            <Typography variant="subtitle1">{item.title}</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography variant="subtitle2">{item.description}</Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                ))}
                            </Box>}
                            {prerequisites && <Box
                                p={3}
                                width={"100%"}
                                border={`5px solid ${theme.palette.primary.main}`}
                                borderRadius={4}
                            >
                                <Typography variant="h6" pb={3} fontFamily={specialFont} color={'primary'} fontWeight='700'>
                                    Requirements
                                </Typography>
                                <ul style={{ listStyleType: 'disc', }}>
                                    {/* {prerequisites.map((objective, index) => ( */}
                                    {Object.keys(prerequisites).map((key) => (

                                        <li style={{ fontWeight: '500', fontSize: '20px', }}>
                                            {prerequisites[key]}
                                        </li>
                                    ))}
                                </ul>
                            </Box>}
                            {description && <Box
                                p={3}
                                width={"100%"}
                                border={`5px solid ${theme.palette.primary.main}`}
                                borderRadius={4}
                            >
                                <Typography variant="h6" fontFamily={specialFont} pb={3} color={'primary'} sx={{ fontWeight: '700', }}>Description</Typography>
                                <div dangerouslySetInnerHTML={{ __html: description }} />
                            </Box>}
                            {intended_learner && <Box
                                p={3}
                                width={"100%"}
                                border={`5px solid ${theme.palette.primary.main}`}
                                borderRadius={4}
                            >
                                <Typography variant="h6" fontFamily={specialFont} pb={3} color={'primary'} sx={{ fontWeight: '700', }}>Intended Learner</Typography>
                                <p>{intended_learner}</p>
                            </Box>}
                        </Grid>
                    </Grid>
            }
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