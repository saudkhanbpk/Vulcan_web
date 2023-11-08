import React from 'react'
import { CourseMainBox } from './styles'
import { BasicsStep } from './Steps/basicsStep'
import { LearningObjectives } from './Steps/learningObjectives'
import { CourseListing } from './Steps/courseListing'
import { Curriculum } from './Steps/curriculum'
import { ClassSchedule } from './Steps/classSchedule'
import { Summary } from './Steps/summary'
import { useSelector } from 'react-redux'

export const CourseCreationFlow = () => {
    const courseSteps = useSelector((state) => state.courseSteps.courseSteps)
    return (
        <>
            <CourseMainBox>
                {courseSteps === 1 && <BasicsStep />}
                {courseSteps === 2 && <LearningObjectives />}
                {courseSteps === 3 && <Curriculum />}
                {courseSteps === 4 && <CourseListing />}
                {courseSteps === 5 && <ClassSchedule />}
                {courseSteps === 6 && <Summary />}
            </CourseMainBox>
        </>
    )
}
