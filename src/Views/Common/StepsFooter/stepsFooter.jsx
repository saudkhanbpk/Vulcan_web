import React from 'react'
import { useSelector } from 'react-redux'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import { ContinueButton, Footer, PreviousButton } from '../../CourseCreationFlow/styles'

export const StepsFooter = ({handleDec, formikRef}) => {
    const courseSteps = useSelector((state) => state.courseSteps.courseSteps)
    const basicStepState = useSelector((state) => state.courseSteps.basicStepState)
    
    const handleContinueClick = () => {
        if (formikRef.current) {
          formikRef.current.handleSubmit();
        }
      };
    return (
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
                        <ContinueButton variant="contained" 
                        // type="submit"
                        disabled={!basicStepState.categoryValue}
                        onClick={handleContinueClick}
                        >
                            Continue
                        </ContinueButton>
                    </Grid>
                </Grid>
            </Grid>
        </Footer>
    )
}
