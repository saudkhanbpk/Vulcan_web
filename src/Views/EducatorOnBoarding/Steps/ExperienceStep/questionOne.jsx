import React from "react";
import {
  Box,
  Typography,
  FormControlLabel,
  FormGroup,
  Checkbox,
} from "@mui/material";
import { styled } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { eduRegSteps } from "../../../../Infrastructure/States/educatorStepsSlice";

function QuestionOne() {
  const dispatch = useDispatch();
  const step2Q1Data = useSelector((state) => state.educatorSteps.step2Q1Data);
  const options = [
    { id: 0, text: "Professor at a college / university" },
    { id: 1, text: "Teacher at K-12 School" },
    { id: 2, text: "Independent Instructor" },
    { id: 3, text: "Tutor" },
    { id: 4, text: "Other" },
  ];

  const handleOptionChange = (e, optionValue) => {
    dispatch(eduRegSteps({ optionValue, step: "1" }));
  };

  const ChoiceTypo = styled(Typography)(({ theme }) => ({
    fontWeight: 700,
    lineHeight: 1.2,
    letterSpacing: "-.02rem",
    fontSize: "16px",
  }));

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
      <Typography variant="h6" pb={2}>
        Approximately how many total years of teaching experience do you have?
      </Typography>
    </Box>

        <FormGroup>
          {options.map((option) => (
            <FormControlLabel
              key={option.id}
              control={
                <Checkbox
                  checked={step2Q1Data.includes(option.text.toString())}
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
