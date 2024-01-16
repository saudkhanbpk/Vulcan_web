import React from 'react'
import { useSelector } from 'react-redux';
import { useTheme } from '@mui/material/styles';
import DoneIcon from '@mui/icons-material/Done';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { Box, Rating, Typography, Button } from '@mui/material'
import { mainFont, specialFont } from '../../Infrastructure/Theme/fontFamily'
import courseVector from '../../Assets/Images/courseVector.png'
import profileVector from '../../Assets/Images/vector.png'
import { Loader } from '../Common/loader';

export const CourseListing = ({ live }) => {
    const theme = useTheme();
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
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
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
    return (
        <div>
            {
                loading ? <Loader /> :
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: {
                                xs: 'column',
                                sm: 'column',
                                md: 'row',
                                lg: 'row',
                                xl: 'row',
                            },
                            alignItems: { xs: "center", sm: "center", md: "center" },
                            gap: '60px',
                            position: 'relative',
                        }}
                    >
                        <Box
                            sx={{
                                position: {
                                    md: 'fixed',
                                    lg: 'fixed',
                                    xl: 'fixed',
                                },
                                top: { md: '97px', lg: '97px', xl: '97px' },
                                left: { md: '40px', lg: '40px', xl: '40px' },
                                border: `3px solid ${theme.palette.primary.main}`,
                                borderRadius: { xl: 10, lg: 10, md: 10, sm: 10, xs: 4 },
                                pb: 2,
                                borderBottom: `3px solid ${theme.palette.primary.main}`,
                                overflow: 'hidden',
                                width: { xl: 375, sm: 390, md: 400, lg: 430 },
                            }}
                        >
                            <Box
                                borderBottom={`3px solid ${theme.palette.primary.main}`}
                                borderRadius={{ lg: 8, md: 8, sm: 8, xs: 4 }}
                                overflow="hidden"
                                height={200}
                                width={{ xl: 375, sm: 390, md: 400, lg: 430 }}
                                sx={{ background: "grey" }}
                            >
                                <img
                                    src={courseImage || courseVector}
                                    alt="not found"
                                    style={{
                                        objectFit: 'cover',
                                        maxHeight: '100%',
                                        width: '100%',
                                        aspectRatio: "16 / 9"
                                    }}
                                />
                            </Box>
                            <Box px={2} display="flex" flexDirection="column" gap={3} sx={{ wordBreak: "break-word" }}>
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
                                        <Typography sx={{ fontWeight: '700', fontSize: "18px", textTransform: 'capitalize' }}>By {firstName}{" "}{lastName}</Typography>
                                        <Box sx={{ display: 'flex', alignItems: 'center', justifyItems: 'start' }}>
                                            <Rating
                                                sx={{ fontSize: '1.2rem' }}
                                                name="star-rating"
                                                value={5}
                                                precision={0.5}
                                                readOnly
                                            />
                                            <Typography variant="h6" sx={{ fontSize: '11px', fontWeight: "bold" }} ml={"3px"} mt={"auto"}>
                                                {live && 5.00}
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
                                    <Button variant="contained" color="primary"
                                        sx={{
                                            '&:hover': {
                                                cursor: live ? 'pointer' : 'not-allowed',
                                            },
                                            pointerEvents: live ? 'auto' : 'none',
                                        }}
                                    >
                                        Enroll Now
                                    </Button>
                                    <Typography
                                        sx={{
                                            color: "blue",
                                            fontSize: '18px',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            cursor: live ? 'pointer' : 'not-allowed',
                                            pointerEvents: live ? 'auto' : 'none',
                                        }}
                                    >
                                        See More Cohort Schedule
                                    </Typography>

                                </Box>
                            </Box>
                        </Box>
                        <Box sx={{
                            marginLeft: { xs: 0, sm: 0, md: '500px' },
                            display: 'flex',
                            flexDirection: 'column',
                            gap: { xs: '30px', sm: '30px', md: '30px' },
                            pr: { md: 6, lg: 6, xl: 6 },
                            px:{xs: 2, sm: 2,}
                        }}>
                            {objectives && <Box
                                p={3}
                                width={"100%"}
                                sx={{
                                    border: `3px solid ${theme.palette.primary.main}`,
                                    borderRadius: 4,
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
                                    <Accordion key={index} sx={{ wordBreak: "break-word" }}>
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
                                sx={{ wordBreak: "break-word" }}
                            >
                                <Typography variant="h6" pb={3} color={'primary'} fontWeight='700'>
                                    Requirements
                                </Typography>
                                <ul style={{ listStyleType: 'disc', }}>
                                    {Object.keys(prerequisites).map((key) => (
                                        <li key={key} style={{ fontSize: '18px', }}>
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
                                sx={{ wordBreak: "break-word" }}
                            >
                                <Typography variant="h6" pb={3} color={'primary'} sx={{ fontWeight: '700', }}>Description</Typography>
                                <Box fontSize='18px' dangerouslySetInnerHTML={{ __html: description }} />
                            </Box>}
                            {intended_learner && <Box
                                p={3}
                                width={"100%"}
                                border={`3px solid ${theme.palette.primary.main}`}
                                borderRadius={4}
                                sx={{ wordBreak: "break-word" }}
                            >
                                <Typography variant="h6" pb={3} color={'primary'} sx={{ fontWeight: '700', fontSize: "18px" }}>Intended Learner</Typography>
                                <p style={{ fontSize: "18px" }}>{intended_learner}</p>
                            </Box>}
                        </Box>
                    </Box>
            }

        </div >
    )
}