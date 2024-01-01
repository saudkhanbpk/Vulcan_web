import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { StepsHeader } from '../Common/StepsHeader/stepsHeader';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { useTheme } from '@mui/material/styles';
import DoneIcon from '@mui/icons-material/Done';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { ShowErrorToast } from '../Common/Toast/toast';
import { decrementCoursesSteps, resetCoursesSteps } from '../../Infrastructure/States/coursesStepsSlice';
import { Box, Rating, Typography, Button } from '@mui/material'
import { mainFont, specialFont } from '../../Infrastructure/Theme/fontFamily'
import {
    ContinueButton, Footer, PreviousButton,
} from '../CourseCreationFlow/styles'
import courseVector from '../../Assets/Images/courseVector.png'
import profileVector from '../../Assets/Images/vector.png'
import { Loader } from '../Common/loader';

export const CourseListing = ({preview, live}) => {
        const theme = useTheme();
        const navigate = useNavigate()
        const dispatch = useDispatch()
        const courseSteps = useSelector((state) => state.courseSteps.courseSteps)
        const userData = useSelector((state) => state.userData.data)
        const loading = useSelector((state) => state.userData.loading)
        const avatar = userData?.educator?.profile?.avatar
        const firstName = userData?.account?.first_name
        const lastName = userData?.account?.last_name
        
        // we will change it in future
        const approved = false

        const title = userData?.educator?.courses?.pending?.basics?.title
        const first_class = userData?.educator?.courses?.pending?.class_schedule?.first_class
        const objectives = userData?.educator?.courses?.pending?.intended_learner?.objectives
        const prerequisites = userData?.educator?.courses?.pending?.intended_learner?.prerequisites
        const intended_learner = userData?.educator?.courses?.pending?.intended_learner?.description
        const courseImage = userData?.educator?.courses?.pending?.details?.course_image
        const description = userData?.educator?.courses?.pending?.details?.description
        const curriculum = userData?.educator?.courses?.pending?.curriculum
        const coursetimes = userData?.educator?.courses?.pending?.class_schedule?.times
        const timestampInMilliseconds = first_class && first_class * 1000
        const date = first_class && new Date(timestampInMilliseconds);
        const weekday = first_class && new Intl.DateTimeFormat('en-US', {
            day: 'numeric',
        }).format(date);
        const month = first_class && new Intl.DateTimeFormat('en-US', {
            month: 'numeric',
        }).format(date);
        const formatSchedule = () => {
            //this time zone is based on location if user in in uk the timezone will be uk if he is in Pakistan the time zone will be pakistan, but you are advising to use PST so I use it 
            // const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
            const timezone = 'PST'
            if (coursetimes) {
                const dayGroups = {};
                Object.entries(coursetimes).forEach(([day, { start, end }]) => {
                    const formattedStart = convertToLocalStartTime(start, timezone);
                    const formattedEnd = convertToLocalEndTime(end, timezone);
                    const hasMinutes = formattedStart.includes(':') || formattedEnd.includes(':');
                    const formattedTime = hasMinutes
                        ? `${formattedStart}-${formattedEnd}`
                        : `${formattedStart.split(':')[0]}-${formattedEnd.split(':')[0]}`;
                    if (!dayGroups[formattedTime]) {
                        dayGroups[formattedTime] = [];
                    }
                    dayGroups[formattedTime].push(day);
                });
                const formattedSchedule = Object.entries(dayGroups).map(([formattedTime, days]) => {
                    const capitalizedDays = days.map(day => day.substring(0, 3).toUpperCase());
                    const daysString = capitalizedDays.join('/');
                    return `${daysString} @ ${formattedTime}`;
                });
                return <div dangerouslySetInnerHTML={{ __html: formattedSchedule.join('<br/>') }} />;
            }
            return 'No schedule available';
        };
        const convertToLocalStartTime = (timestamp, userTimezone) => {
            const date = new Date(timestamp * 1000);
            const options = { hour12: true, hour: 'numeric', minute: 'numeric', timeZone: userTimezone };
            return date.toLocaleString('en-US', options);
        };
        const convertToLocalEndTime = (timestamp, userTimezone) => {
            const date = new Date(timestamp * 1000);
            const options = { hour12: true, hour: 'numeric', minute: 'numeric', timeZoneName: 'short', timeZone: userTimezone };
            return date.toLocaleString('en-US', options);
        };
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
            <Box>
                <StepsHeader steps={courseSteps} handleExit={handleExit} />
                <Box height={"100px"}></Box>
                {
                    loading ? <Loader /> :
                        <Grid
                            container
                            position="sticky"
                            display={"flex"}
                            alignItems={"start"}
                            justifyContent={"center"}
                            px={{ xs: 2, sm: 2, md: 10, lg: 10 }}
                            gap={5}
                        >
                            <Grid lg={3.5} md={10} sm={12} xs={12} sx={{ position: { lg: "sticky" }, top: 0 }}>
                                <Box
                                    border={`3px solid ${theme.palette.primary.main}`}
                                    borderRadius={10}
                                    pb={2}
                                    zIndex={1000}
                                    sx={{ position: "relative" }}
                                >
                                    <Box
                                        borderBottom={`3px solid ${theme.palette.primary.main}`}
                                        borderRadius={8}
                                        overflow="hidden"
                                        sx={{ background: "grey" }}
                                    >
                                        <img
                                            src={courseImage || courseVector}
                                            alt="not found"
                                            style={{
                                                objectFit: 'cover',
                                                maxHeight: '200px',
                                                width: '100%',
                                            }}
                                        />
                                    </Box>
                                    <Box px={2} display="flex" flexDirection="column" gap={3}>
                                        <Typography variant="h1" sx={{ fontSize: '18px' }} color={"primary"} mt={2} fontFamily={specialFont}>{title}</Typography>
                                        <Box sx={{ display: 'flex', gap: 1 }} >
                                            <img
                                                src={avatar || profileVector}
                                                width={'50px'}
                                                height={'50px'}
                                                alt=""
                                                style={{ border: `1px solid ${theme.palette.primary.main}`, borderRadius: '50%', objectFit: 'cover', }}
                                            />
                                            <Box>
                                                <Typography sx={{ fontWeight: '700', fontSize: "18px", textTransform: 'capitalize' }}>{firstName}{" "}{lastName}</Typography>
                                                <Box sx={{ display: 'flex', alignItems: 'center', justifyItems: 'start' }}>
                                                    <Rating
                                                        sx={{ fontSize: '1.2rem' }}
                                                        name="star-rating"
                                                        value={5}
                                                        precision={0.5}
                                                        readOnly
                                                    />
                                                    <Typography variant="h6" sx={{ fontSize: '11px', fontWeight: "bold" }} ml={"3px"} mt={"auto"}>
                                                        5.00
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </Box>
                                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, }}>
                                            <Box>
                                                <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '18px', color: theme.palette.primary.main }} mb={1}>Next Cohort starting on {weekday}/{month} </Typography>
                                                <Typography variant="h6" sx={{ fontWeight: '700', fontSize: '18px', }}>
                                                    {formatSchedule()}
                                                </Typography>
                                            </Box>
    
                                            <Button variant="contained" color="primary">
                                                Enroll Now
                                            </Button>
                                            <Typography sx={{ color: "blue", fontSize: '18px', display: 'flex', justifyContent: 'center', cursor: 'pointer' }} >See More Cohort Schedule</Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid lg={8} md={10} sm={12} xs={12} display={"flex"} flexDirection={"column"} gap={5}>
                                {objectives && <Box
                                    p={3}
                                    width={"100%"}
                                    sx={{
                                        borderRadius: 4,
                                        gap: 1,
                                        border: `3px solid ${theme.palette.primary.main}`,
                                    }}
                                >
                                    <Typography variant="h6" fontFamily={mainFont} color={'primary'}
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
                                                <Box key={key} display={'flex'} width={{ lg: "48%" }} alignItems={"start"}>
                                                    <DoneIcon sx={{ color: theme.palette.primary.main, fontSize: 20, marginRight: 1 }} />
                                                    <Typography
                                                        key={key}
                                                        variant="h6"
                                                        sx={{
                                                            fontWeight: '400',
                                                            wordBreak: 'break-word',
                                                            fontSize: "18px"
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
                                        border: `3px solid ${theme.palette.primary.main}`,
                                        borderRadius: 4,
                                    }}
                                >
                                    <Typography variant="h6" color={'primary'} fontWeight={'700'} pb={3}>
                                        Curriculum
                                    </Typography>
                                    {curriculum.map((item, index) => (
                                        <Accordion key={index}>
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls={`panel${index + 1}-content`}
                                                id={`panel${index + 1}-header`}
                                            >
                                                <Typography variant="subtitle1" fontSize={18}>
                                                    {item.title}
                                                </Typography>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <Typography variant="subtitle2" fontSize={18}>{item.description}</Typography>
                                            </AccordionDetails>
                                        </Accordion>
                                    ))}
                                </Box>}
                                {prerequisites && <Box
                                    p={3}
                                    width={"100%"}
                                    border={`3px solid ${theme.palette.primary.main}`}
                                    borderRadius={4}
                                >
                                    <Typography variant="h6" pb={3} color={'primary'} fontWeight='700'>
                                        Requirements
                                    </Typography>
                                    <ul style={{ listStyleType: 'disc', }}>
                                        {/* {prerequisites.map((objective, index) => ( */}
                                        {Object.keys(prerequisites).map((key) => (
    
                                            <li style={{ fontSize: '18px', }}>
                                                {prerequisites[key]}
                                            </li>
                                        ))}
                                    </ul>
                                </Box>}
                                {description && <Box
                                    p={3}
                                    width={"100%"}
                                    border={`3px solid ${theme.palette.primary.main}`}
                                    borderRadius={4}
                                >
                                    <Typography variant="h6" pb={3} color={'primary'} sx={{ fontWeight: '700', }}>Description</Typography>
                                    <Box fontSize= '18px' dangerouslySetInnerHTML={{ __html: description }} />
                                </Box>}
                                {intended_learner && <Box
                                    p={3}
                                    width={"100%"}
                                    border={`3px solid ${theme.palette.primary.main}`}
                                    borderRadius={4}
                                >
                                    <Typography variant="h6" pb={3} color={'primary'} sx={{ fontWeight: '700', fontSize:"18px" }}>Intended Learner</Typography>
                                    <p style={{fontSize:"18px" }}>{intended_learner}</p>
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
                                    {courseSteps <= 5 ? "Continue" :  approved ? "Finish":"Submit For Approvel"}
                                </ContinueButton>
                            </Grid>
                        </Grid>
                    </Grid>
                </Footer>
                <Box height={"100px"}></Box>
            </Box>
        )
    }