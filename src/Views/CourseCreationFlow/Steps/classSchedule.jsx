
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Box, InputAdornment, TextField, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import { ShowErrorToast } from '../../Common/Toast/toast'
import { StepsHeader } from '../../Common/StepsHeader/stepsHeader';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { ClassScheduleTitle } from '../styles'
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import {
    decrementCoursesSteps,
    //   incrementCoursesSteps, 
    resetCoursesSteps
} from '../../../Infrastructure/States/coursesStepsSlice'
import { TimePicker, DatePicker } from '@mui/x-date-pickers';
import { StepsFooter } from '../../Common/StepsFooter/stepsFooter';
import { httpsCallable } from '@firebase/functions';
import { functions } from '../../../Infrastructure/config';

export const ClassSchedule = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [firstClass, setFirstClass] = useState('');
    const [duration, setDuration] = useState(0);
    const [error, setError] = useState('');
    const courseSteps = useSelector((state) => state.courseSteps.courseSteps)
    const handleExit = () => {
        saveTimes()
        dispatch(resetCoursesSteps)
        navigate('/dashboard')
    }
    const handleDec = async () => {
        if (courseSteps > 1) {
            try {
                saveTimes()
                dispatch(decrementCoursesSteps())
            } catch (error) {
                ShowErrorToast(error)
            }
        }
    }
    // const handleInc = async () => {
    //     if (courseSteps > 1) {
    //         try {
    //             dispatch(incrementCoursesSteps())
    //         } catch (error) {
    //             ShowErrorToast(error)
    //         }
    //     }
    // }
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

    const saveTimes = async() => {
        for (const day in formData) {
            if (formData[day].checked && (!formData[day].start || !formData[day].end)) {
                // If checked is true and either start or end time is missing
                setError(`Fill both start and end times for ${day.charAt(0).toUpperCase() + day.slice(1)}`)
                return; // Stop further processing
            }
        }
        const times = {};
        for (const day in formData) {
            if (formData[day].checked) {
                times[day] = {
                    start: formData[day].start,
                    end: formData[day].end,
                };
            }
        }
        setError('')
        try {
            const updateClassScheduleStep = httpsCallable(functions, "updateclassschedulestep");
            await updateClassScheduleStep({firstClass, duration, times});
        } catch (error) {
            setError("Error:",error.message)
        }
        

    };
    const handleDurationChange = (e) => {
        // Allow only positive numbers
        const newValue = e.target.value.replace(/[^0-9]/g, '');
        setDuration(newValue);
    };
    return (
        <Box height={"100vh"} >
            <StepsHeader steps={courseSteps} handleExit={handleExit} />
            <Box height={"100px"}></Box>
            <form>
                <Box >
                    <Box
                        px={{ lg: 10, sm: 4, xs: 4 }}
                        sx={{
                            width: {
                                lg: '80%',
                                md: '80%',
                                sm: '100%',
                                xs: '100%',
                            },
                        }}
                    >
                        <ClassScheduleTitle>
                            Pick the class schedule for your first cohort. You wil be able to add more cohorts once the course is accepted, You can pick any times and days that work for you. For most courses, we recommend 1-2 hours per day, 2-3 days per week, and a duration of 8-16 weeks. However, choose the schedule that works for you and fits your course the best.
                        </ClassScheduleTitle>
                    </Box>
                    <Grid container py={5} justifyContent={"center"} px={{ lg: 10, sm: 4, xs: 1 }}>
                        <Grid lg={5} md={10} sm={12} xs={12} mb={{ sm: 3, xs: 3, md: 4 }}>
                            <Box
                                sx={{
                                    display: { xs: 'flex', sm: 'flex', md: 'flex', lg: 'block' },
                                    justifyContent: { xs: "space-between", sm: "space-between", md: "space-between" },
                                    width: { xs: "100%", sm: "100%", md: "100%", lg: "50%", }
                                }}
                                gap={1}
                            >
                                <Box pt={3}>
                                    <Typography variant="body1" color="initial" pb={2}>
                                        Date of first class:
                                    </Typography>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DatePicker
                                            variant="outlined"
                                            label="Date of first class"
                                            value={firstClass}
                                            onChange={(newValue) => setFirstClass(newValue ? JSON.stringify(newValue) : '')}
                                            fullWidth
                                            renderInput={(params) => (
                                                <TextField
                                                    {...params}
                                                    InputLabelProps={{
                                                        style: { fontSize: '16px' },
                                                    }}
                                                    InputProps={{
                                                        style: { fontSize: '14px' }, 
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
                                    <TextField
                                        id="outlined-number"
                                        label="Weeks"
                                        type="number"
                                        fullWidth
                                        variant="outlined"
                                        onChange={handleDurationChange}
                                        value={duration}
                                        error={!duration}
                                        InputProps={{
                                            onKeyPress: (event) => {
                                                if (isNaN(event.key) || (event.key === '-' && event.code === 'ArrowDown')) {
                                                    event.preventDefault();
                                                }
                                            },
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <Box
                                                        sx={{
                                                            display: 'flex',
                                                            flexDirection: 'column',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            width: '10px',
                                                            height: '30px',
                                                            fontWeight: 'bold',
                                                        }}
                                                    >
                                                        <IoIosArrowUp />
                                                        <IoIosArrowDown />
                                                    </Box>
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                </Box>
                            </Box>
                        </Grid>
                        <Grid lg={7} md={10} sm={12} xs={12} >
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
                                    <Box key={day} display={"flex"} alignItems={"center"} mb={1} width={"100%"}>
                                        <input
                                            type="checkbox"
                                            checked={formData[day].checked}
                                            onChange={() => handleCheckboxChange(day)}
                                        />
                                        <Box display={"flex"} alignItems={"center"} justifyContent={"center"} sx={{ border: "1px solid", flexDirection: { xs: 'column', md: 'row', lg: 'row', xl: 'row', }, }} gap={2} ml={2} px={1} width={"100%"}>
                                            <Box sx={{ width: { sm: "100%", md: "20%", lg: "20%" } }}>
                                                <Typography variant="body1" color="initial" textAlign={"center"} px={2}>
                                                    {day.charAt(0).toUpperCase() + day.slice(1)}:
                                                </Typography>
                                            </Box>
                                            <Box display={"flex"} justifyContent={"space-between"}

                                                pb={1} sx={{
                                                    width: { sm: "80%", md: "80%", lg: "80%" }, gap: {
                                                        xs: 0,   // No gap for xs size
                                                        sm: 2,   // Gap of 2 for sm and larger sizes
                                                        md: 2,
                                                        lg: 2,
                                                        xl: 2,
                                                    },
                                                }}>
                                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                    <DemoContainer components={['DatePicker']}>
                                                        <TimePicker
                                                            label="Start Time"
                                                            value={formData[day].start}
                                                            onChange={(value) => handleTimeChange(day, 'start', value)}
                                                        // sx={{ width: {xs:'20px'} }}
                                                        />
                                                    </DemoContainer>
                                                </LocalizationProvider>

                                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                    <DemoContainer components={['DatePicker']}>
                                                        <TimePicker
                                                            label="End Time"
                                                            value={formData[day].end}
                                                            onChange={(value) => handleTimeChange(day, 'end', value)}
                                                            style={{ '& .MuiIconButton-root': { fontSize: '16px' } }}
                                                        // sx={{ width: {xs:'80px'} }}
                                                        />
                                                    </DemoContainer>
                                                </LocalizationProvider>
                                            </Box>
                                        </Box>
                                    </Box>
                                ))}
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
                <StepsFooter handleContinueClick={saveTimes} step5Error={error} selectedDates={formData} handleDec={handleDec} />
                <Box height={"100px"}></Box>
            </form >
        </Box >
    )
}