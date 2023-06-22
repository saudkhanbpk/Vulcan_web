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
function StepOne() {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { id: 0, text: "Professor at a college / university" },
    { id: 1, text: "Teacher at K-12 School" },
    { id: 2, text: "Independent Instructor" },
    { id: 3, text: "Tutor" },
    { id: 4, text: "Other" },
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
      {/* <Box sx={{ maxWidth: "40%" }}>
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
      </Box> */}
    </Box>
  );
}

export default StepOne;
