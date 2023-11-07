import React from 'react'
import { StepsHeader } from '../../Common/StepsHeader/stepsHeader'
import { useDispatch, useSelector } from 'react-redux'
import { Box } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import { ContinueButton, Footer, PreviousButton } from '../styles'
import { decrementCoursesSteps, decrementSteps } from '../../../Infrastructure/States/coursesStepsSlice'
import { ShowErrorToast } from '../../Common/Toast/toast'

export const Summary = () => {
  const courseSteps = useSelector((state) => state.courseSteps.courseSteps)
  const handleExit = () => {
      console.log("handle exit clicked")
  }
  const dispatch = useDispatch()
  const handleDec = async () => {
    if (courseSteps > 1) {
      try {
        dispatch(decrementCoursesSteps());
      } catch (error) {
        ShowErrorToast(error);
      }
    }
  };
  return (
      <Box height={"100vh"} >
          <StepsHeader steps={courseSteps} handleExit={handleExit} />
          center
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
                          <ContinueButton variant="contained" type="submit">
                              Finish
                          </ContinueButton>
                      </Grid>
                  </Grid>
              </Grid>
          </Footer>
      </Box>
  )
}