import React, { useEffect } from "react";
import {
  Box,
  Typography,
  FormControlLabel,
  FormControl,
  RadioGroup,
  Radio,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { eduRegSteps } from "../../../../Infrastructure/States/educatorStepsSlice";
import { ChoiceTypo } from "../../styles";

function QuestionThree() {
  const dispatch = useDispatch();
  const step2Q3Data = useSelector((state) => state.educatorSteps.step2Q3Data);
  
  const options = [
    { id: 0, text: "0-1" },
    { id: 1, text: "1-5" },
    { id: 2, text: "5-10" },
    { id: 3, text: "10+" },
  ];

  const handleOptionChange = (e) => {
    let optionValue= e.target.value
    dispatch(eduRegSteps({ optionValue, step: "3" }));
  };
  useEffect(() => {
  }, [step2Q3Data]);
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
          Approximately how many total years of teaching experience do you have?
        </Typography>
      </Box>
      <FormControl fullWidth>
            <RadioGroup
            onChange={handleOptionChange}
            value={step2Q3Data}
            >
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
                    height:"76px"
                  }}
                />
              ))}
            </RadioGroup>
          </FormControl>
    </Box>
  );
}

export default QuestionThree;
