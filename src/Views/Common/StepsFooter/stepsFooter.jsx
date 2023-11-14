import React from 'react'
import { useSelector } from 'react-redux'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import { ContinueButton, Footer, PreviousButton } from '../../CourseCreationFlow/styles'

export const StepsFooter = ({ handleDec, handleContinueClick, validSections }) => {
    const courseSteps = useSelector((state) => state.courseSteps.courseSteps)
    const basicStepState = useSelector((state) => state.courseSteps.basicStepState)
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
                            disabled={!basicStepState.categoryValue || validSections?.length<3}
                            onClick={handleContinueClick}
                        >
                            {courseSteps <= 5 ? "Continue" : "Finish"}
                        </ContinueButton>
                    </Grid>
                </Grid>
            </Grid>
        </Footer>
    )
}
