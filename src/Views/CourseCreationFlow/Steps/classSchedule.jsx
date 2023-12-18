import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Box, InputAdornment, TextField, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { ShowErrorToast } from '../../Common/Toast/toast';
import { StepsHeader } from '../../Common/StepsHeader/stepsHeader';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { ClassScheduleTitle, ErrorBlockSmall } from '../styles';
import { IoIosArrowDown } from 'react-icons/io';
import { IoIosArrowUp } from 'react-icons/io';
import { Loader } from '../../Common/loader';
import {
  decrementCoursesSteps,
  incrementCoursesSteps,
  resetCoursesSteps,
} from '../../../Infrastructure/States/coursesStepsSlice';
import { TimePicker, DatePicker } from '@mui/x-date-pickers';
import { StepsFooter } from '../../Common/StepsFooter/stepsFooter';
import { httpsCallable } from '@firebase/functions';
import { functions } from '../../../Infrastructure/config';
import dayjs from 'dayjs';

export const ClassSchedule = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const userData = useSelector((state) => state.userData.data);
  const first_class =
    userData?.educator?.courses?.pending?.class_schedule?.first_class;
  const [firstClass, setFirstClass] = useState(
    dayjs(first_class?.replace(/'/g, '')) || null
  );
  const courseSteps = useSelector((state) => state.courseSteps.courseSteps);
  const loading = useSelector((state) => state.userData.loading);
  const course_duration =
    userData?.educator?.courses?.pending?.class_schedule?.duration;
  const [duration, setDuration] = useState(course_duration || null);
  const course_times =
    userData?.educator?.courses?.pending?.class_schedule?.times;
  const firstClassOnlyDMY = first_class?.replace(/'/g, '');
console.log('course_times', userData?.educator?.courses?.pending?.class_schedule)
  const handleExit = () => {
    saveTimes();
    dispatch(resetCoursesSteps);
    navigate('/dashboard');
  };
  const handleDec = async () => {
    if (courseSteps > 1) {
      try {
        saveTimes();
        dispatch(decrementCoursesSteps());
      } catch (error) {
        ShowErrorToast(error);
      }
    }
  };
  const handleInc = async () => {
    if (courseSteps > 1) {
      try {
        dispatch(incrementCoursesSteps());
      } catch (error) {
        ShowErrorToast(error);
      }
    }
  };
  const [formData, setFormData] = useState({
    monday: { start: null, end: null, checked: false },
    tuesday: { start: null, end: null, checked: false },
    wednesday: { start: null, end: null, checked: false },
    thursday: { start: null, end: null, checked: false },
    friday: { start: null, end: null, checked: false },
    saturday: { start: null, end: null, checked: false },
    sunday: { start: null, end: null, checked: false },
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
        [field]: value,
      },
    }));
  };
  const handleDurationChange = (e) => {
    const newValue = e.target.value.replace(/[^0-9]/g, '');
    const newDuration = newValue ? Math.min(parseInt(newValue, 10), 26) : '';
    setDuration(newDuration);
  };

  const incrementDuration = () => {
    setDuration((prevDuration) => Math.min(prevDuration + 1, 26));
  };

  const decrementDuration = () => {
    setDuration((prevDuration) => Math.max(prevDuration - 1, 1));
  };

  const saveTimes = async () => {
    if (
      duration === '' ||
      parseInt(duration, 10) === 0 ||
      parseInt(duration, 10) > 26
    ) {
      setError('Duration must be a number between 1 and 26 weeks.');
      return;
    }
    if (firstClass === null || firstClass === '') {
      setError('First class date is required');
      return;
    }
    const isAtLeastOneDaySelected = Object.values(formData).some(
      (day) => day.checked
    );
    if (!isAtLeastOneDaySelected) {
      setError('Please select at least one day.');
      return;
    }
    const firstClassDay = firstClass.format('dddd').toLowerCase();
    const selectedDay = Object.keys(formData).find(
      (day) => formData[day].checked
    );

    if (selectedDay && firstClassDay !== selectedDay) {
      setError('Selected day for times must match the day of the first class.');
      return;
    }

    for (const day in formData) {
      if (
        formData[day].checked &&
        (!formData[day].start || !formData[day].end)
      ) {
        setError(
          `Fill both start and end times for ${
            day.charAt(0).toUpperCase() + day.slice(1)
          }`
        );
        return;
      }
      const start = dayjs(formData[day].start);
      const end = dayjs(formData[day].end);
      if (formData[day].checked && end.diff(start, 'hour') > 3) {
        setError(
          `Maximum 3-hour gap allowed between start and end times for ${
            day.charAt(0).toUpperCase() + day.slice(1)
          }`
        );
        return;
      }
      if (formData[day].checked && end.isBefore(start)) {
        setError(
          `End time must be after start time for ${
            day.charAt(0).toUpperCase() + day.slice(1)
          }`
        );
        return;
      }
    }
    const times = {};
    const firstClassString = JSON.stringify(firstClass);
    for (const day in formData) {
      if (formData[day].checked) {
        times[day] = {
          start: JSON.stringify(formData[day].start.unix()),
          end: JSON.stringify(formData[day].end.unix()),
        };
        console.log('hello', times[day]);
      }
    }
    setError('');
    try {
      const updateClassScheduleStep = httpsCallable(
        functions,
        'updateclassschedulestep'
      );
      await updateClassScheduleStep({ firstClassString, duration, times });
      handleInc();
    } catch (error) {
      setError(`Error: ${error.message}`);
    }
  };

  useEffect(() => {
    setFirstClass(dayjs(firstClassOnlyDMY) || null);
    // Check if course_times exists and is an object
    if (course_times && typeof course_times === 'object') {
      const updatedFormData = { ...formData };
      for (const day in formData) {
        if (course_times[day]) {
          updatedFormData[day] = {
            start: dayjs(
              course_times[day].start.replace(/\\/g, '').replace(/'/g, '')
            ),
            end: dayjs(
              course_times[day].end.replace(/\\/g, '').replace(/'/g, '')
            ),
            checked: true,
          };
        }
      }
      setFormData(updatedFormData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Box height={'100vh'}>
      <StepsHeader steps={courseSteps} handleExit={handleExit} />
      <Box height={'100px'}></Box>
      <form>
        {loading ? (
          <Loader />
        ) : (
          <Box>
            <Box
              px={{ lg: 10, sm: 4, xs: 1 }}
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
                Pick the class schedule for your first cohort. You wil be able
                to add more cohorts once the course is accepted, You can pick
                any times and days that work for you. For most courses, we
                recommend 1-2 hours per day, 2-3 days per week, and a duration
                of 8-16 weeks. However, choose the schedule that works for you
                and fits your course the best.
              </ClassScheduleTitle>
            </Box>
            <Grid
              container
              py={5}
              justifyContent={'center'}
              px={{ lg: 10, sm: 4, xs: 1 }}
            >
              <Grid lg={5} md={10} sm={12} xs={12} mb={{ sm: 3, xs: 3, md: 4 }}>
                <Box
                  sx={{
                    display: {
                      xs: 'flex',
                      sm: 'flex',
                      md: 'flex',
                      lg: 'block',
                    },
                    flexDirection: {
                      xs: 'column',
                      sm: 'row',
                      md: 'row',
                      lg: 'row',
                    },
                    justifyContent: {
                      xs: 'space-between',
                      sm: 'space-between',
                      md: 'space-between',
                    },
                    width: { xs: '100%', sm: '100%', md: '100%', lg: '50%' },
                  }}
                  gap={1}
                >
                  <Box pt={3} width={'100%'}>
                    <Typography variant='body1' color='initial' pb={2}>
                      Date of first class:
                    </Typography>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        variant='outlined'
                        label='Date of first class'
                        value={firstClass}
                        onChange={(newValue) => setFirstClass(newValue)}
                        fullWidth
                      />
                    </LocalizationProvider>
                  </Box>
                  <Box pt={3} width={'100%'}>
                    <Typography variant='body1' color='initial' pb={2}>
                      Course Duration:
                    </Typography>
                    <TextField
                      id='outlined-number'
                      label='Weeks'
                      type='number'
                      fullWidth
                      variant='outlined'
                      onChange={handleDurationChange}
                      value={duration}
                      error={duration === ''}
                      InputProps={{
                        onKeyPress: (event) => {
                          if (
                            isNaN(event.key) ||
                            (event.key === '-' && event.code === 'ArrowDown')
                          ) {
                            event.preventDefault();
                          }
                        },
                        endAdornment: (
                          <InputAdornment position='end'>
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
                              <IoIosArrowUp
                                onClick={incrementDuration}
                                style={{
                                  cursor: 'pointer',
                                  fontSize: '20px',
                                  ':hover': { color: 'secondary' },
                                }}
                              />
                              <IoIosArrowDown
                                onClick={decrementDuration}
                                style={{
                                  cursor: 'pointer',
                                  fontSize: '20px',
                                  hover: { color: 'primary' },
                                }}
                              />
                            </Box>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Box>
                </Box>
              </Grid>
              <Grid lg={7} md={10} sm={12} xs={12}>
                <Box>
                  {Object.keys(formData).map((day) => (
                    <Box
                      key={day}
                      display={'flex'}
                      alignItems={'center'}
                      mb={1}
                      width={'100%'}
                    >
                      <input
                        type='checkbox'
                        checked={formData[day].checked}
                        onChange={() => handleCheckboxChange(day)}
                        style={{ height: '20px', width: '20px' }}
                      />
                      <Box
                        display={'flex'}
                        alignItems={'center'}
                        justifyContent={'center'}
                        sx={{
                          border: '1px solid',
                          flexDirection: {
                            xs: 'column',
                            md: 'row',
                            lg: 'row',
                            xl: 'row',
                          },
                        }}
                        gap={2}
                        ml={2}
                        px={1}
                        width={'100%'}
                      >
                        <Box
                          sx={{ width: { sm: '100%', md: '20%', lg: '20%' } }}
                        >
                          <Typography
                            variant='body1'
                            color='initial'
                            textAlign={'center'}
                            px={2}
                          >
                            {day.charAt(0).toUpperCase() + day.slice(1)}:
                          </Typography>
                        </Box>
                        <Box
                          display={'flex'}
                          justifyContent={'space-between'}
                          flexDirection={{
                            xs: 'column',
                            sm: 'row',
                            md: 'row',
                            lg: 'row',
                          }}
                          pb={1}
                          sx={{
                            width: {
                              xs: '100%',
                              sm: '80%',
                              md: '80%',
                              lg: '80%',
                            },
                            gap: {
                              xs: 0,
                              sm: 2,
                              md: 2,
                              lg: 2,
                              xl: 2,
                            },
                          }}
                        >
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['DatePicker']}>
                              <TimePicker
                                label='Start Time'
                                value={formData[day].start}
                                onChange={(value) =>
                                  handleTimeChange(day, 'start', value)
                                }
                              />
                            </DemoContainer>
                          </LocalizationProvider>

                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['DatePicker']}>
                              <TimePicker
                                label='End Time'
                                value={formData[day].end}
                                onChange={(value) =>
                                  handleTimeChange(day, 'end', value)
                                }
                                style={{
                                  '& .MuiIconButton-root': { fontSize: '16px' },
                                }}
                              />
                            </DemoContainer>
                          </LocalizationProvider>
                        </Box>
                      </Box>
                    </Box>
                  ))}
                </Box>
                <ErrorBlockSmall sx={{ textAlign: 'center' }}>
                  {error}
                </ErrorBlockSmall>
              </Grid>
            </Grid>
          </Box>
        )}
        <StepsFooter
          handleContinueClick={saveTimes}
          step5Error={error}
          selectedDates={formData}
          handleDec={handleDec}
        />
        <Box height={'100px'}></Box>
      </form>
    </Box>
  );
};
