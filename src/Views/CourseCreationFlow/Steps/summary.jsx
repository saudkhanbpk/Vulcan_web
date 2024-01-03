import { Box } from "@mui/material"
import { StepsHeader } from "../../Common/StepsHeader/stepsHeader"
import { CourseListing } from "../../CourseListing/courseListing"
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { ShowErrorToast } from "../../Common/Toast/toast";
import { decrementCoursesSteps, resetCoursesSteps } from "../../../Infrastructure/States/coursesStepsSlice";
import { StepsFooter } from "../../Common/StepsFooter/stepsFooter";

export const Summary = () => {
    const approved = false
    const navigate = useNavigate()
    const dispatch = useDispatch()
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
const handleSubmit = () =>{
    navigate('/dashboard')
}
    // we will change it in future
    return (
        <>
            <StepsHeader steps={courseSteps} handleExit={handleExit} />
            <Box height={"100px"}></Box>
            <CourseListing preview={true} live={false} />
            {/* <Footer>
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
                                {courseSteps <= 5 ? "Continue" : approved ? "Finish" : "Submit For Approvel"}
                            </ContinueButton>
                        </Grid>
                    </Grid>
                </Grid>
            </Footer> */}
            <StepsFooter
            handleContinueClick={handleSubmit}
                status={approved}
                handleDec={handleDec}
            />
            <Box height={"100px"}></Box>
        </>
    );
}