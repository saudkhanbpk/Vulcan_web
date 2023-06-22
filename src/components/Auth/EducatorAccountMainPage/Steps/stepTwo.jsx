import React, { useState } from "react";
import {
  Box,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { styled } from "@mui/system";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

function StepTwo() {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { id: 0, text: "In Person" },
    { id: 1, text: "Live Online" },
    { id: 2, text: "Pre-recorded Online" },
    { id: 3, text: "Other" },
  ];

  const handleOptionChange = (event) => {
    setSelectedOption(parseInt(event.target.value));
  };
  console.log(selectedOption);
  const ChoiceTypo = styled(Typography)(({ theme }) => ({
    fontWeight: 700,
    lineHeight: 1.2,
    letterSpacing: "-.02rem",
    fontSize: "16px",
  }));
  return (
    <Box sx={{ height: "100vh" }}>
       <Grid container>
        <Grid lg={5} md={5} sm={10} xs={12} >
        <RadioGroup value={selectedOption} onChange={handleOptionChange}>
          {options.map((option) => (
            <FormControlLabel
              key={option.id}
              value={option.id.toString()}
              control={<Radio sx={{ color: "#1c1d1f" }} />}
              label={<ChoiceTypo variant="body1">{option.text}</ChoiceTypo>}
              sx={{ border: "1px solid #1c1d1f", p:1, m:"3px"  }}
            />
          ))}
        </RadioGroup>
        </Grid>
      </Grid>
    </Box>
  );
}

export default StepTwo;
