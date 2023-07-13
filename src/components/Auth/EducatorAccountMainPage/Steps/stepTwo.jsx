import React from "react";
import {
  Box,
  Typography,
  FormControlLabel,
  FormGroup,
  Checkbox,
} from "@mui/material";
import { styled } from "@mui/system";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { useSelector, useDispatch } from "react-redux";
import { eduRegSteps } from "../../../../feature/Auth/educatorStepsSlice";
function StepTwo() {
  const step2Data = useSelector((state) => state.educatorSteps.stepTwoData);
  const dispatch = useDispatch();

  const options = [
    { id: 0, text: "In Person" },
    { id: 1, text: "Live Online" },
    { id: 2, text: "Pre-recorded Online" },
    { id: 3, text: "Other" },
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
    <Box sx={{ height: "100vh" }}>
      <Grid container>
        <Grid lg={5} md={5} sm={10} xs={12}>
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

export default StepTwo;
