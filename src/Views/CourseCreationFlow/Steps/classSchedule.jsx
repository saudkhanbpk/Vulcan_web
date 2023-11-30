
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Box, TextField, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import { ShowErrorToast } from '../../Common/Toast/toast'
import { StepsHeader } from '../../Common/StepsHeader/stepsHeader';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { ClassScheduleTitle, ContinueButton, Footer, PreviousButton } from '../styles'
import { decrementCoursesSteps, incrementCoursesSteps, resetCoursesSteps } from '../../../Infrastructure/States/coursesStepsSlice'
import { TimePicker, DatePicker } from '@mui/x-date-pickers';


export const ClassSchedule = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [value, setValue] = useState('');
    const courseSteps = useSelector((state) => state.courseSteps.courseSteps)
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
    const handleInc = async () => {
        if (courseSteps > 1) {
            try {
                dispatch(incrementCoursesSteps())
            } catch (error) {
                ShowErrorToast(error)
            }
        }
    }
    const [formData, setFormData] = useState({
        monday: { start: '', end: '', checked: false },
        tuesday: { start: '', end: '', checked: false },
        wednesday: { start: '', end: '', checked: false },
        thursday: { start: '', end: '', checked: false },
        friday: { start: '', end: '', checked: false },
        saturday: { start: '', end: '', checked: false },
        sunday: { start: '', end: '', checked: false },
    });
    const handleCheckboxChange = (day) => {
        setFormData({
            ...formData,
            [day]: {
                ...formData[day],
                checked: !formData[day].checked,
            },
        });
    };
    const handleTimeChange = (day, field, value) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            [day]: {
                ...prevFormData[day],
                [field]: value ? value.format('hh:mm a') : '',
            },
        }));
    };

    const saveTimes = () => {
        const times = {};
        for (const day in formData) {
            if (formData[day].checked) {
                times[day] = {
                    start: formData[day].start,
                    end: formData[day].end,
                };
            }
        }
        console.log(times);
    };
    console.log(formData)
    return (
        <Box height={"100vh"} >
            <StepsHeader steps={courseSteps} handleExit={handleExit} />
            <Box height={"100px"}></Box>
            <form>
                <Box px={10}>
                    <Box
                        sx={{
                            width: {
                                lg: '60%',
                                md: '60%',
                                sm: '100%',
                                xs: '100%',
                            },
                        }}
                    >
                        <ClassScheduleTitle>
                            Pick the class schedule for your first cohort. You wil be able to add more cohorts once the course is accepted, You can pick any times and days that work for you. For most courses, we recommend 1-2 hours per day, 2-3 days per week, and a duration of 8-16 weeks. However, choose the schedule that works for you and fits your course the best.
                        </ClassScheduleTitle>
                    </Box>
                    <Grid container py={5}>
                        <Grid lg={5} md={5} sm={10} xs={12} mb={{ sm: 3, xs: 3, md: 4 }}>
                            <Box>
                                <Box pb={3}>
                                    <Typography variant="body1" color="initial" pb={2}>
                                        Date of first class:
                                    </Typography>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DatePicker
                                            variant="outlined"
                                            label="Date of first class"
                                            value={value}
                                            onChange={(newValue) => setValue(newValue)}
                                            renderInput={(params) => (
                                                <TextField
                                                    {...params}
                                                    InputLabelProps={{
                                                        style: { fontSize: '16px' }, // Adjust the font size for the label
                                                    }}
                                                    InputProps={{
                                                        style: { fontSize: '14px' }, // Adjust the font size for the input text
                                                    }}
                                                />
                                            )}
                                        />
                                    </LocalizationProvider>
                                </Box>
                                <Box pt={3}>
                                    <Typography variant="body1" color="initial" pb={2}>
                                        Course Duration:
                                    </Typography>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DatePicker
                                            variant="outlined"
                                            label="Duration"
                                            value={value}
                                            onChange={(newValue) => setValue(newValue)}
                                            renderInput={(params) => (
                                                <TextField
                                                    {...params}
                                                    InputLabelProps={{
                                                        style: { fontSize: '16px' }, // Adjust the font size for the label
                                                    }}
                                                    InputProps={{
                                                        style: { fontSize: '14px' }, // Adjust the font size for the input text
                                                    }}
                                                />
                                            )}
                                        />
                                    </LocalizationProvider>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid lg={7} md={7} sm={10} xs={12} >
                            <Box>
                                <Box display={"flex"}>
                                    <Box width={"30%"}></Box>
                                    <Box display={"flex"} justifyContent={"space-around"} width={"100%"}>
                                        <Typography variant="body1" color="initial" textAlign={"center"}>
                                            Start Time:
                                        </Typography>
                                        <Typography variant="body1" color="initial" textAlign={"center"}>
                                            End Time:
                                        </Typography>
                                    </Box>
                                </Box>
                                {Object.keys(formData).map((day) => (
                                    <Box key={day} display={"flex"} alignItems={"center"} mb={1}>
                                        <input
                                            type="checkbox"
                                            checked={formData[day].checked}
                                            onChange={() => handleCheckboxChange(day)}
                                        />
                                        <Box display={"flex"} alignItems={"center"} justifyContent={"center"} sx={{ border: "1px solid" }} gap={2} ml={2} px={1}>
                                            <Typography variant="body1" color="initial" textAlign={"center"} px={2}>
                                                {day.charAt(0).toUpperCase() + day.slice(1)}:
                                            </Typography>
                                            <Box display={"flex"} gap={2}>
                                                <label>

                                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                        <DemoContainer components={['DatePicker']}>
                                                            <TimePicker
                                                                label="Start Time"
                                                                value={formData[day].start}
                                                                onChange={(value) => handleTimeChange(day, 'start', value)}
                                                            />
                                                        </DemoContainer>
                                                    </LocalizationProvider>
                                                </label>
                                                <label>

                                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                        <DemoContainer components={['DatePicker']}>
                                                            <TimePicker
                                                                label="End Time"
                                                                value={formData[day].end}
                                                                onChange={(value) => handleTimeChange(day, 'end', value)}
                                                                style={{ '& .MuiIconButton-root': { fontSize: '16px' } }}
                                                            />
                                                        </DemoContainer>
                                                    </LocalizationProvider>
                                                </label>
                                            </Box>
                                        </Box>
                                    </Box>
                                ))}
                                <button type="button" onClick={saveTimes}>
                                    Save Times
                                </button>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
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
                                <ContinueButton variant="contained" onClick={handleInc} >
                                    Continue
                                </ContinueButton>
                            </Grid>
                        </Grid>
                    </Grid>
                </Footer>
                <Box height={"100px"}></Box>
            </form>
        </Box>
    )
}