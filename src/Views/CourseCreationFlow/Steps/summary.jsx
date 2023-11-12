import React from 'react'
import { StepsHeader } from '../../Common/StepsHeader/stepsHeader'
import { useDispatch, useSelector } from 'react-redux'
import { Box } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import { ContinueButton, Footer, PreviousButton } from '../styles'
import { decrementCoursesSteps, decrementSteps, resetCoursesSteps } from '../../../Infrastructure/States/coursesStepsSlice'
import { ShowErrorToast } from '../../Common/Toast/toast'
import { useNavigate } from 'react-router-dom'

export const Summary = () => {
    const navigate = useNavigate()
    const courseSteps = useSelector((state) => state.courseSteps.courseSteps)
    const handleExit = () => {
        console.log("handle exit clicked")
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
            Comming Objectives
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