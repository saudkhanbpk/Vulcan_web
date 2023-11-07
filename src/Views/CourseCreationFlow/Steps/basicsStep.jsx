import React from 'react'
import { StepsHeader } from '../../Common/StepsHeader/stepsHeader'
import { useDispatch, useSelector } from 'react-redux'
import { Box, Checkbox, FormControlLabel, FormGroup, TextField, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import { ChoiceTypo, ContinueButton, Footer, PreviousButton, QuestionName } from '../styles'
import { decrementCoursesSteps, incrementCoursesSteps } from '../../../Infrastructure/States/coursesStepsSlice'
import { ShowErrorToast, ShowSuccessToast } from '../../Common/Toast/toast'
import { useFormik } from 'formik'
import * as Yup from "yup";

export const BasicsStep = () => {
    const dispatch = useDispatch()
    const courseSteps = useSelector((state) => state.courseSteps.courseSteps)
    const handleExit = () => {
        console.log("handle exit clicked")
    }
    const handleDec = () => {
        if (courseSteps > 0) {
            try {
                dispatch(decrementCoursesSteps());
            } catch (error) {
                ShowErrorToast(error);
            }
        }
    };
    const handleInc = () => {
        if (courseSteps < 6) {
            try {
                dispatch(incrementCoursesSteps());
            } catch (error) {
                ShowErrorToast(error);
            }
        }
    };
    const formik = useFormik({
        initialValues: { courseTitle: "" },
        validationSchema: Yup.object().shape({
            courseTitle: Yup.string().required("Course Title Required")
        }),
        onSubmit: (values) => {
            if (courseSteps >= 1 && courseSteps <= 6) {
                try {
                    console.log("values", values)
                      handleInc()
                      ShowSuccessToast("Next Step")
                } catch (error) {
                    ShowErrorToast(error);
                }
            }
        },
    });
    const options = [
        { name: "development", label: "Development" },
        { name: "business", label: "Business" },
        { name: "financeAndAccounting", label: "Finance And Accounting" },
        { name: "itAndSoftware", label: "IT & Software" },
        { name: "officeProductivity", label: "Office Productivity" },
        { name: "personalDevelopment", label: "Personal Development" },
        { name: "design", label: "Design" },
        { name: "marketing", label: "Marketing" },
        { name: "lifestyle", label: "Lifestyle" },
        { name: "photographyAndVideo", label: "Photography & Video" },
        { name: "healthAndFitness", label: "Health & Fitness" },
        { name: "music", label: "Music" },
        { name: "teachingAndAcademics", label: "Teaching & Academics" },
        { name: "iDontKnowYet", label: "I don't know yet" },
        { name: "notSure", label: "Not Sure" },
    ];
    return (
        <Box height={"100vh"}>
            <StepsHeader steps={courseSteps} handleExit={handleExit} />
            <Box height={"100px"}></Box>
            <form onSubmit={formik.handleSubmit}>
                <Box px={10}>
                    <Box>
                        <QuestionName>
                            What will be the title of your course?
                        </QuestionName>
                        <TextField
                            name="courseTitle"
                            label={
                                formik.touched.courseTitle && Boolean(formik.errors.courseTitle)
                                    ? formik.errors.courseTitle
                                    : "Course Title"
                            }
                            error={formik.touched.courseTitle && Boolean(formik.errors.courseTitle)}
                            variant="outlined"
                            placeholder="Course Title"
                            onChange={formik.handleChange}
                            value={formik.values.courseTitle}
                            ml={1}
                            InputLabelProps={{
                                style: { fontSize: 16 },
                            }}
                            InputProps={{
                                style: { fontSize: 18 },
                            }}
                            fullWidth
                        />
                    </Box>
                    <Box mt={4}>
                        <QuestionName variant="h6">
                            What category does your course best fit in?
                        </QuestionName>
                        <Grid container spacing={3}>
                            {/* First Checkbox with 6 columns */}
                            <Grid item xs={10} md={6} lg={4} xl={4}>
                                <FormGroup>
                                    {options.slice(0, 5).map((option, index) => (
                                        <FormControlLabel
                                            key={index}
                                            control={
                                                <Checkbox
                                                    // checked={experienceStep[option.name]}
                                                    onChange={(e) => {
                                                        const { name, checked } = e.target;
                                                        // dispatch(experienceSteps({ name, checked, question: "one" }));
                                                    }}
                                                    name={option.name}
                                                    sx={{ color: "#1c1d1f" }}
                                                />
                                            }
                                            label={<ChoiceTypo variant="body1">{option.label}</ChoiceTypo>}
                                            sx={{ border: "1px solid #1c1d1f", p: 1, m: "3px" }}
                                        />
                                    ))}
                                </FormGroup>
                            </Grid>

                            {/* Second Checkbox with 6 columns */}
                            <Grid item xs={10} md={6} lg={4} xl={4}>
                                <FormGroup>
                                    {options.slice(5, 10).map((option, index) => (
                                        <FormControlLabel
                                            key={index}
                                            control={
                                                <Checkbox
                                                    // checked={experienceStep[option.name]}
                                                    onChange={(e) => {
                                                        const { name, checked } = e.target;
                                                        // dispatch(experienceSteps({ name, checked, question: "one" }));
                                                    }}
                                                    name={option.name}
                                                    sx={{ color: "#1c1d1f" }}
                                                />
                                            }
                                            label={<ChoiceTypo variant="body1">{option.label}</ChoiceTypo>}
                                            sx={{ border: "1px solid #1c1d1f", p: 1, m: "3px" }}
                                        />
                                    ))}
                                </FormGroup>
                            </Grid>
                            <Grid item xs={10} md={6} lg={4} xl={4}>
                                <FormGroup>
                                    {options.slice(10, 15).map((option, index) => (
                                        <FormControlLabel
                                            key={index}
                                            control={
                                                <Checkbox
                                                    // checked={experienceStep[option.name]}
                                                    onChange={(e) => {
                                                        const { name, checked } = e.target;
                                                        // dispatch(experienceSteps({ name, checked, question: "one" }));
                                                    }}
                                                    name={option.name}
                                                    sx={{ color: "#1c1d1f" }}
                                                />
                                            }
                                            label={<ChoiceTypo variant="body1">{option.label}</ChoiceTypo>}
                                            sx={{ border: "1px solid #1c1d1f", p: 1, m: "3px" }}
                                        />
                                    ))}
                                </FormGroup>
                            </Grid>
                        </Grid>
                    </Box>
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
                            <ContinueButton type='submit' variant="contained">
                                Continue
                            </ContinueButton>
                        </Grid>
                    </Grid>
                </Footer>
                <Box height={"100px"}></Box>
            </form>
        </Box>
    )
}
