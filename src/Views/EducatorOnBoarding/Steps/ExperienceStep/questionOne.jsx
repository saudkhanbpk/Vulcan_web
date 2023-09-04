import React, { useEffect } from "react";
import {
  Box,
  FormControlLabel,
  FormGroup,
  Checkbox,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { experienceSteps } from "../../../../Infrastructure/States/educatorStepsSlice";
import { ChoiceTypo, QuestionName } from "../../styles";

function QuestionOne() {
  const dispatch = useDispatch();
  const experienceStepQ1 = useSelector(
    (state) => state.educatorSteps.experienceStepQ1
  );
  const options = [
    { id: 0, text: "Professor at a college / university" },
    { id: 1, text: "Teacher at K-12 School" },
    { id: 2, text: "Independent Instructor" },
    { id: 3, text: "Tutor" },
    { id: 4, text: "Other" },
  ];
  const handleOptionChange = (e, optionValue) => {
    dispatch(experienceSteps({ optionValue, step: "one" }));
  };
  useEffect(() => {}, [experienceStepQ1]);
  return (
    <>
      <Box
        sx={{
          height: {
            lg: "100vh",
            md: "50vh",
            sm: "50vh",
            xs: "50vh",
          },
        }}
      >
        <Box sx={{ height: { lg: "100px", md: "100px" } }}>
          <QuestionName variant="h6">
            Approximately how many total years of teaching experience do you
            have?
          </QuestionName>
        </Box>
        <FormGroup>
          {options.map((option) => (
            <FormControlLabel
              key={option.id}
              control={
                <Checkbox
                  checked={experienceStepQ1.includes(option.text.toString())}
                  onChange={(e) =>
                    handleOptionChange(e, option.text.toString())
                  }
                  value={option.text.toString()}
                  sx={{ color: "#1c1d1f" }}
                />
              }
              label={<ChoiceTypo variant="body1">{option.text}</ChoiceTypo>}
              sx={{ border: "1px solid #1c1d1f", p: 1, m: "3px" }}
            />
          ))}
        </FormGroup>
      </Box>
    </>
  );
}

export default QuestionOne;
