import React from "react";
import {
  Box,
  Typography,
  FormControlLabel,
  FormControl,
  RadioGroup,
  Radio,
} from "@mui/material";
import { styled } from "@mui/system";
import { useSelector, useDispatch } from "react-redux";
import { eduRegSteps } from "../../../../Infrastructure/States/educatorStepsSlice";
function QuestionTwo() {
  const step2Data = useSelector((state) => state.educatorSteps.stepTwoData);
  const dispatch = useDispatch();

  const options = [
    { id: 0, text: "In Person" },
    { id: 1, text: "Live Online" },
    { id: 2, text: "Pre-recorded Online" },
    { id: 3, text: "Other" },
  ];

  const handleOptionChange = (e, optionValue) => {
    dispatch(eduRegSteps({ optionValue, step: "3" }));
  };
  const ChoiceTypo = styled(Typography)(({ theme }) => ({
    fontWeight: 700,
    lineHeight: 1.2,
    letterSpacing: "-.02rem",
    fontSize: "16px",
  }));

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
        <Typography variant="h6" pb={2}>
          What mediums have you taught in?
        </Typography>
      </Box>
      <FormControl fullWidth>
            <RadioGroup
              onChange={(e) => handleOptionChange(e.target.value)}
            >
              {options.map((option) => (
                <FormControlLabel
                  fullWidth
                  key={option.id}
                  value={option.text.toString()}
                  control={<Radio />}
                  label={<ChoiceTypo>{option.text}</ChoiceTypo>}
                  sx={{
                    width: "100%",
                    border: "1px solid #1c1d1f",
                    p: 1,
                    m: "3px",
                  }}
                />
              ))}
            </RadioGroup>
          </FormControl>
    
    </Box>
  );
}

export default QuestionTwo;
