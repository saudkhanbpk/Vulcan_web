import React from 'react'
import { useSelector } from 'react-redux'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import { ContinueButton, ErrorBlockLarge, Footer, PreviousButton } from '../../CourseCreationFlow/styles'
import { Box } from '@mui/material'

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
                <Grid display={"flex"} >
                    <Box
                        display="flex"
                        justifyContent="flex-end"
                        alignItems="flex-end"
                        mr={3}
                    >
                        {validSections && (
                            <ErrorBlockLarge>
                                <p style={{marginBottom:"0px"}}>At least 3 sections required to fill.</p>
                            </ErrorBlockLarge>
                            
                        )}
                    </Box>
                    <ContinueButton variant="contained"
                        disabled={!basicStepState.categoryValue}
                        onClick={handleContinueClick}
                    >
                        {courseSteps <= 5 ? "Continue" : "Finish"}
                    </ContinueButton>
                </Grid>
            </Grid>
        </Footer>
    )
}
