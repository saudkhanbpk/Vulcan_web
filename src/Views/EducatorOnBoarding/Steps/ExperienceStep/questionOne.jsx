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
import { useDispatch } from "react-redux";
import { eduRegSteps } from "../../../../Infrastructure/States/educatorStepsSlice";

function QuestionOne() {
  const dispatch = useDispatch();

  const options = [
    { id: 0, text: "Professor at a college / university" },
    { id: 1, text: "Teacher at K-12 School" },
    { id: 2, text: "Independent Instructor" },
    { id: 3, text: "Tutor" },
    { id: 4, text: "Other" },
  ];

  const handleOptionChange = (e, optionValue) => {
    dispatch(eduRegSteps({ optionValue, step: "2" }));
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
          What teaching roles have you occupied?
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

export default QuestionOne;
