import React, { useState } from 'react';
import { StepsHeader } from '../../Common/StepsHeader/stepsHeader';
import { useDispatch, useSelector } from 'react-redux';
import { Box, TextField, Button } from '@mui/material';
import { decrementCoursesSteps, incrementCoursesSteps, resetCoursesSteps } from '../../../Infrastructure/States/coursesStepsSlice';
import { ShowErrorToast } from '../../Common/Toast/toast';
import { useNavigate } from 'react-router-dom';
import { StepsFooter } from '../../Common/StepsFooter/stepsFooter';
import { AiOutlinePlus } from 'react-icons/ai';
import { ErrorBlockSmall, SectionQuestion } from '../styles';
import { functions } from '../../../Infrastructure/config';
import { httpsCallable } from 'firebase/functions';
import { MdOutlineCancel } from "react-icons/md";

export const Curriculum = () => {
    const [sections, setSections] = useState([
        {
            title: '', description: '',
        }
    ]);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [showError, setShowError] = useState(false)
    const validSections = sections.filter(section => section.title && section.description);
    const courseSteps = useSelector((state) => state.courseSteps.courseSteps);

    const handleExit = () => {
        console.log('handle exit clicked');
        dispatch(resetCoursesSteps);
        navigate('/dashboard');
    };

    const handleDec = async () => {
        if (courseSteps > 1) {
            try {
                dispatch(decrementCoursesSteps());
            } catch (error) {
                ShowErrorToast(error);
            }
        }
    };

    const handleAddSection = () => {
        setSections(prevSections => [...prevSections, { title: '', description: '' }]);
    };

    const handleTitleChange = (index, event) => {
        const newSections = [...sections];
        newSections[index].title = event.target.value;
        setSections(newSections);
    };

    const handleDescriptionChange = (index, event) => {
        const newSections = [...sections];
        newSections[index].description = event.target.value;
        setSections(newSections);
    };

    const handleContinueClick = async () => {
        if (courseSteps > 1) {
            try {
                if (validSections.length >= 3) {
                    setShowError(false)
                    const updateCurriculumStep = httpsCallable(functions, "updatecurriculum");
                    await updateCurriculumStep({sections});
                    dispatch(incrementCoursesSteps());
                } else {
                    setShowError(true)
                }
            } catch (error) {
                ShowErrorToast(error);
            }
        }
    };
    const handleRemoveSection = (index) => {
        const updatedSections = [...sections];
        updatedSections.splice(index, 1);
        setSections(updatedSections);
    };
    return (
        <Box height={'100vh'}>
            <StepsHeader steps={courseSteps} handleExit={handleExit} />
            <Box height={'100px'}></Box>
            <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'start' }}>
                <Box my={2} sx={{ width: { xs:"90%",sm: "90%", md: "80%", lg: "70%", xl: "70%" } }}>
                    {sections.map((section, index) => (
                        <Box key={index} border={1} p={2} my={2}>
                            <Box display="flex" flexDirection="column">
                                <Box sx={{ display: "flex", justifyContent: "space-between" }}> <SectionQuestion variant="h6">New Section</SectionQuestion>
                                    {sections.length > 3 ? <MdOutlineCancel style={{ fontSize: '2em', cursor: 'pointer' }} onClick={() => handleRemoveSection(index)} /> : null}
                                </Box>
                                <TextField
                                    name="title"
                                    label="Title"
                                    variant="outlined"
                                    onChange={(event) => handleTitleChange(index, event)}
                                    value={section.title}
                                    InputLabelProps={{
                                        style: { fontSize: 14 },
                                    }}
                                    InputProps={{
                                        style: { fontSize: 14 },
                                    }}
                                    fullWidth
                                />
                            </Box>
                            <Box display="flex" flexDirection="column">
                                <SectionQuestion variant="h6">What the students would do after completing this section</SectionQuestion>
                                <TextField
                                    name="description"
                                    label="Description"
                                    variant="outlined"
                                    onChange={(event) => handleDescriptionChange(index, event)}
                                    value={section.description}
                                    InputLabelProps={{
                                        style: { fontSize: 14 },
                                    }}
                                    InputProps={{
                                        style: { fontSize: 14 },
                                    }}
                                    multiline
                                    rows={2}
                                    fullWidth
                                />
                            </Box>
                        </Box>
                    ))}
                    <Button variant="text" color="secondary" sx={{ borderRadius: '0px' }} onClick={handleAddSection}>
                        <AiOutlinePlus /> Section
                    </Button>
                </Box>
                {
                    showError && <Box mt={5}>
                        <ErrorBlockSmall>
                            At least 3 sections required to fill.
                        </ErrorBlockSmall>
                    </Box>
                }
            </Box>
            <StepsFooter handleDec={handleDec} handleContinueClick={handleContinueClick} validSections={showError} />
            <Box height={'100px'}></Box>
        </Box>
    );
};
