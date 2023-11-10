import React, { useEffect, useRef } from 'react'
import { useFormik } from 'formik'
import * as Yup from "yup"
import { httpsCallable } from "firebase/functions";
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import { useDispatch, useSelector } from 'react-redux'
import { functions } from "../../../Infrastructure/config";
import { StepsHeader } from '../../Common/StepsHeader/stepsHeader'
import { ShowErrorToast } from '../../Common/Toast/toast'
import { ChoiceTypo, QuestionName } from '../styles'
import { Box, FormControl, FormControlLabel, Radio, RadioGroup, TextField } from '@mui/material'
import { basicStepControl, resetBasicStepValues, incrementCoursesSteps, decrementCoursesSteps } from '../../../Infrastructure/States/coursesStepsSlice'
import { StepsFooter } from '../../Common/StepsFooter/stepsFooter';

export const BasicsStep = () => {
    const dispatch = useDispatch()
    const formikRef = useRef(null);
    const userData = useSelector((state) => state.userData.data);
    const courseSteps = useSelector((state) => state.courseSteps.courseSteps)
    const basicStepState = useSelector((state) => state.courseSteps.basicStepState)
    const categoryValue = userData?.educator?.courses?.pending?.questions?.category?.categoryValue
    const courseTitle = userData?.educator?.courses?.pending?.questions?.courseTitle
    const handleExit = () => {
        handleCategoryStep()
        formik.resetForm()
        dispatch(resetBasicStepValues)
    }
    const handleInc = async () => {
        if (courseSteps < 6) {
            dispatch(incrementCoursesSteps())
        }
    }
    const handleCategoryStep = async () => {
        const updateCategoryStep = httpsCallable(functions, "updatecategorystep");
        await updateCategoryStep({categoryValue:basicStepState?.categoryValue , courseTitle:formik.values.courseTitle});
    }
    const formik = useFormik({
        initialValues: { courseTitle:"" },
        validationSchema: Yup.object().shape({
            courseTitle: Yup.string().required("Course Title Required")
        }),
        onSubmit: (values) => {
            if (courseSteps >= 1 && courseSteps <= 6) {
                dispatch(basicStepControl({ courseTitle: values.courseTitle, question: "courseTitle" }))
                try {
                    handleCategoryStep()
                    handleInc()
                } catch (error) {
                    ShowErrorToast(error)
                }
            }
        },
    })
    formikRef.current = formik;
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
    ]
    const handleOptionChange = (e) => {
        let categoryValue = e.target.value;
        dispatch(basicStepControl({ categoryValue, question: "category" }));
    };
    useEffect(() => {
        if (userData && categoryValue) {
            dispatch(basicStepControl({ categoryValue: categoryValue, question: "category" }));
        }
        if(userData && courseTitle){
            dispatch(basicStepControl({ categoryValue: courseTitle, question: "courseTitle" }));
            formik.setValues({
                ...formik.values,
                courseTitle: courseTitle || '',
            });
        }
    }, [userData, dispatch, categoryValue, courseTitle, formik.setValues])
    return (
        <Box height={"100vh"}>
            <StepsHeader steps={courseSteps} handleExit={handleExit} />
            <Box height={"100px"}></Box>
            <form onSubmit={formik.handleSubmit} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                <Box px={10}>
                    <Box width={{ sm: "100%", md: "100%", lg: "50%", xl: "50%" }}>
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
                            <Grid item xs={12} md={6} lg={4} xl={4}>
                                <FormControl fullWidth>
                                    <RadioGroup onChange={handleOptionChange} value={basicStepState.categoryValue}>
                                        {options.slice(0, 5).map((option, index) => (
                                            <FormControlLabel
                                                key={option.name}
                                                value={option.label}
                                                control={<Radio size="medium" />}
                                                label={<ChoiceTypo>{option.label}</ChoiceTypo>}
                                                sx={{
                                                    width: "100%",
                                                    border: "1px solid #1c1d1f",
                                                    p: 1,
                                                    m: "3px",
                                                    height: "76px",
                                                }}
                                            />
                                        ))}
                                    </RadioGroup>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} md={6} lg={4} xl={4}>
                                <FormControl fullWidth>
                                    <RadioGroup onChange={handleOptionChange} value={basicStepState.categoryValue}>
                                        {options.slice(5, 10).map((option, index) => (
                                            <FormControlLabel
                                                key={option.name}
                                                value={option.label}
                                                control={<Radio size="medium" />}
                                                label={<ChoiceTypo>{option.label}</ChoiceTypo>}
                                                sx={{
                                                    width: "100%",
                                                    border: "1px solid #1c1d1f",
                                                    p: 1,
                                                    m: "3px",
                                                    height: "76px",
                                                }}
                                            />
                                        ))}
                                    </RadioGroup>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} md={6} lg={4} xl={4}>
                                <FormControl fullWidth>
                                    <RadioGroup onChange={handleOptionChange} value={basicStepState.categoryValue}>
                                        {options.slice(10, 15).map((option, index) => (
                                            <FormControlLabel
                                                key={option.name}
                                                value={option.label}
                                                control={<Radio size="medium" />}
                                                label={<ChoiceTypo>{option.label}</ChoiceTypo>}
                                                sx={{
                                                    width: "100%",
                                                    border: "1px solid #1c1d1f",
                                                    p: 1,
                                                    m: "3px",
                                                    height: "76px",
                                                }}
                                            />
                                        ))}
                                    </RadioGroup>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <StepsFooter formikRef={formikRef} />
                <Box height={"100px"}></Box>
            </form>
        </Box>
    )
}
