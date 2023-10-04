import React from "react";
import { Box, FormControlLabel, FormGroup, Checkbox } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { experienceSteps } from "../../../../Infrastructure/States/educatorStepsSlice";
import { ChoiceTypo, QuestionName } from "../../styles";

function QuestionOne() {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userData.data);
  const experienceStep = useSelector((state) => state.educatorSteps.experienceStep);
  const mediums = userData?.educator?.questions?.mediums;
  console.log(mediums)

  const options = [
    { name: "in_person", label: "In Person" },
    { name: "live_online", label: "Live Online" },
    { name: "recorded_online", label: "Pre-recorded Online" },
    { name: "medium_other", label: "Other" },
  ];
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
        <QuestionName variant="h6">
          Which formats have you taught in?
        </QuestionName>
      </Box>
      <FormGroup>
        {options.map((option, index) => (
          <FormControlLabel
            key={index}
            control={
              <Checkbox
                checked={experienceStep[option.name]}
                onChange={(e) => {
                  const { name, checked } = e.target;
                  dispatch(experienceSteps({ name, checked, question: "one" }));
                }}
                name={option.name}
                sx={{ color: "#1c1d1f" }}
              />
            }
            label={<ChoiceTypo variant="body1">{option.label}</ChoiceTypo>}
            sx={{ border: "1px solid #1c1d1f", p: 1, m: "3px" }}
          />
        ))}
      </FormGroup>
    </Box>
  );
}

export default QuestionOne;
