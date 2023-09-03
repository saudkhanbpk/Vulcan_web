import React, { useEffect } from "react";
import {
  Box,
  Typography,
  FormControlLabel,
  FormGroup,
  Checkbox,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { experienceSteps } from "../../../../Infrastructure/States/educatorStepsSlice";
import { ChoiceTypo } from "../../styles";

function QuestionTwo() {
  const dispatch = useDispatch();
  const experienceStepQ2 = useSelector((state) => state.educatorSteps.experienceStepQ2);
  useEffect(() => {
  }, [experienceStepQ2]);

  const options = [
    { id: 0, text: "In Person" },
    { id: 1, text: "Live Online" },
    { id: 2, text: "Pre-recorded Online" },
    { id: 3, text: "Other" },
  ];

  const handleOptionChange = (e, optionValue) => {
    dispatch(experienceSteps({ optionValue, step: "2" }));
  };


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

      <FormGroup>
        {options.map((option) => (
          <FormControlLabel
            key={option.id}
            control={
              <Checkbox
                checked={experienceStepQ2.includes(option.text.toString())}
                onChange={(e) => handleOptionChange(e, option.text.toString())}
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
  );
}

export default QuestionTwo;
