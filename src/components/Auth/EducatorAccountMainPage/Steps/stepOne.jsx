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
import { useDispatch, useSelector } from "react-redux";
import { eduRegSteps } from "../../../../feature/Auth/educatorStepsSlice";

function StepOne() {
  const step1Data = useSelector((state) => state.educatorSteps.stepOneData);
  const dispatch = useDispatch();

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
    <Box sx={{ height: "100vh" }}>
      <Grid container>
        <Grid lg={5} md={5} sm={10} xs={12}>
          <FormGroup>
            {options.map((option) => (
              <FormControlLabel
                key={option.id}
                control={
                  <Checkbox
                    checked={step1Data.includes(option.text.toString())}
                    onChange={(e) =>
                      handleOptionChange(e, option.text.toString())
                    }
                    value={option.text.toString()}
                    sx={{
                      "& .Mui-checked": {
                        color: "#1c1d1f",
                      },
                    }}
                    color="primary"
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

export default StepOne;
