import React, { useEffect } from "react";
import {
  Box,
  FormControlLabel,
  FormControl,
  RadioGroup,
  Radio,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { experienceSteps } from "../../../../Infrastructure/States/educatorStepsSlice";
import { ChoiceTypo, QuestionName } from "../../styles";

function QuestionThree() {
  const dispatch = useDispatch();
  const experienceStepQ3 = useSelector(
    (state) => state.educatorSteps.experienceStepQ3
  );
  const options = [
    { id: 0, text: "0-1" },
    { id: 1, text: "1-5" },
    { id: 2, text: "5-10" },
    { id: 3, text: "10+" },
  ];
  const handleOptionChange = (e) => {
    let optionValue = e.target.value;
    dispatch(experienceSteps({ optionValue, step: "three" }));
  };
  useEffect(() => {}, [experienceStepQ3]);
  return (
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
          Approximately how many total years of teaching experience do you have?
        </QuestionName>
      </Box>
      <FormControl fullWidth>
        <RadioGroup onChange={handleOptionChange} value={experienceStepQ3}>
          {options.map((option) => (
            <FormControlLabel
              key={option.id}
              value={option.text}
              control={<Radio size="medium" />}
              label={<ChoiceTypo>{option.text}</ChoiceTypo>}
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
    </Box>
  );
}

export default QuestionThree;
