import React from "react";
import {
  Box,
  Typography,
  FormControlLabel,
  FormGroup,
  Checkbox,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { useSelector, useDispatch } from "react-redux";
import { eduRegSteps } from "../../../../Infrastructure/States/educatorStepsSlice";
import { ChoiceTypo } from "../../styles";
function QuestionThree() {
  const step2Data = useSelector((state) => state.educatorSteps.stepTwoData);
  const dispatch = useDispatch();

  const options = [
    { id: 0, text: "0-1" },
    { id: 1, text: "1-5" },
    { id: 2, text: "5-10" },
    { id: 3, text: "10+" },
  ];

  const handleOptionChange = (e, optionValue) => {
    dispatch(eduRegSteps({ optionValue, step: "3" }));
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
      <Grid container>
        <Grid lg={12} md={12} sm={12} xs={12}>
          <FormGroup>
            {options.map((option) => (
              <FormControlLabel
                key={option.id}
                control={
                  <Checkbox
                    checked={step2Data.includes(option.text.toString())}
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
        </Grid>
      </Grid>
    </Box>
  );
}

export default QuestionThree;
