import { Box } from "@mui/material"
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { ShowErrorToast } from "../../Common/Toast/toast";
import { StepsHeader } from "../../Common/StepsHeader/stepsHeader"
import { StepsFooter } from "../../Common/StepsFooter/stepsFooter";
import { decrementCoursesSteps, resetCoursesSteps } from "../../../Infrastructure/States/coursesStepsSlice";
import { CourseListing } from "../../CourseListing/courseListing";
import { Loader } from "../../Common/loader";
import { useState } from "react";

export const Summary = () => {
    const approved = false
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(false);
    const courseSteps = useSelector((state) => state.courseSteps.courseSteps)
    const handleExit = () => {
        dispatch(resetCoursesSteps())
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
    const handleSubmit = () => {
        try {
            setIsLoading(true)
            dispatch(resetCoursesSteps())
            navigate('/dashboard')
        } catch (err) {
            //handle Error here
        } finally {
            setIsLoading(false)
        }
    }
    return (
        <>
            <StepsHeader steps={courseSteps} handleExit={handleExit} />
            <Box height={"100px"}></Box>
            {
                isLoading ? <Loader /> :
                    <CourseListing live={false} />
            }
            <StepsFooter
                handleContinueClick={handleSubmit}
                status={approved}
                handleDec={handleDec}
            />
            <Box height={"100px"}></Box>
        </>
    );
}