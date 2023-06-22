import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React, { useState } from "react";
import { RadioButtonUnchecked, RadioButtonChecked } from "@mui/icons-material";
// import StepOne from "../../../../extra";
import StepTwo from "./stepTwo";
import StepOne from "./stepOne";

const Steps = ({ steps }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  // const option  = 1;

  const handleOptionClick = (optionIndex) => {
    setSelectedOption(optionIndex);
  };
  const Option = styled(Box)(({ theme }) => ({
    marginTop: "8px",
    padding: "10px",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
  }));

  const CircleIcon = styled(({ filled, ...other }) =>
    filled ? (
      <RadioButtonChecked {...other} color="black" />
    ) : (
      <RadioButtonUnchecked {...other} color="black" />
    )
  )`
    color: ${(props) => (props.filled ? "blue" : "gray")};
    margin-right: 8px;
  `;

  const ChoiceTypo = styled(Typography)(({ theme }) => ({
    fontWeight: 600,
    lineHeight: 1.2,
    letterSpacing: "-.02rem",
    fontSize: "16px",
  }));
  //   const ListItemTypo = styled(Typography)(({ theme }) => ({
  //     fontHeight: 700,
  //     fontSize: "2.2rem",
  //     lineHeight: 1.25,
  //     letterSpacing: "-.05rem",
  //     maxWidth: "36em",
  // }));
  const TopHeadingBox = styled(Box)(({ theme }) => ({
    // maxWidth: "100%",
    [theme.breakpoints.down('sm')]:{
      // maxWidth: "100%",
  
      }
  }));
  const TopHeading = styled(Typography)(({ theme }) => ({
    marginTop: 12,

    fontWeight: 700,
    fontSize: "2.2rem",
    lineHeight: 1.25,
    letterSpacing: "-.05rem",
    // maxWidth: "36rem",
    [theme.breakpoints.down('sm')]:{
    fontSize: "2rem",

    }
  }));
  const Description = styled(Typography)(({ theme }) => ({
    // width: "50%",
  }));
  
  const DescriptionBox = styled(Box)(({ theme }) => ({
    maxWidth: "70%",
    paddingTop: 32,
    [theme.breakpoints.down('sm')]:{
      maxWidth: "100%",
  
      }
  }));

  return (
    <>
      {steps === 1 && (
        <Box p={3} sx={{ height: "100vh" }}>
        <TopHeadingBox>
        <TopHeading variant="" mt={5}>Teaching Experience</TopHeading>
        </TopHeadingBox>
          <DescriptionBox>
            <Description variant="body">
              Udemy courses are video-based experiences that give students the
              chance to learn actionable skills. Whether you have experience
              teaching, or it’s your first time, we’ll help you package your
              knowledge into an online course that improves student lives.
            </Description>
          </DescriptionBox>

          <Box sx={{ maxWidth: "100%" }} pt={5}>
            <Typography variant="h6" pb={2}>
              What teaching roles have you occupied?
            </Typography>

            {/* <Option
            sx={{ border: "1px solid #1c1d1f" }}
            onClick={() => handleOptionClick(0)}
            // mt={2} p={2}
          >
            <CircleIcon filled={selectedOption === 0} />
            <ChoiceTypo variant="body1">Professor at a college/university</ChoiceTypo>
          </Option>
          <Option
            sx={{ border: "1px solid #1c1d1f" }}
            onClick={() => handleOptionClick(1)}
            // mt={2} p={2}
          >
            <CircleIcon filled={selectedOption === 1} />
            <ChoiceTypo variant="body1">Teacher at K-12 school</ChoiceTypo>
          </Option>
          <Option
            sx={{ border: "1px solid #1c1d1f" }}
            onClick={() => handleOptionClick(2)}
            // mt={2} p={2}
          >
            <CircleIcon filled={selectedOption === 2} />
            <ChoiceTypo variant="body1">Independent Instructor</ChoiceTypo>
          </Option>
          <Option
            sx={{ border: "1px solid #1c1d1f" }}
            onClick={() => handleOptionClick(3)}
            // mt={2} p={2}
          >
            <CircleIcon filled={selectedOption === 3} />
            <ChoiceTypo variant="body1">Tutor</ChoiceTypo>
          </Option>
          <Option
            sx={{ border: "1px solid #1c1d1f" }}
            onClick={() => handleOptionClick(4)}
            // mt={2} p={2}
          >
            <CircleIcon filled={selectedOption === 4} />
            <ChoiceTypo variant="body1">Other</ChoiceTypo>
          </Option> */}
            <StepOne />
          </Box>
        </Box>
      )}
      {steps === 2 && (
        <Box p={3} sx={{ height: "100vh" }}>
           <TopHeadingBox>
        <TopHeading variant="" mt={5}>Teaching Medium</TopHeading>
        </TopHeadingBox>
          <DescriptionBox>
            <Description variant="body">
              Udemy courses are video-based experiences that give students the
              chance to learn actionable skills. Whether you have experience
              teaching, or it’s your first time, we’ll help you package your
              knowledge into an online course that improves student lives.
            </Description>
          </DescriptionBox>
         
            <Box sx={{ maxWidth: "100%" }} pt={5}>
            <Typography variant="h6" pb={2}>
            What mediums have you taught in?

            </Typography>
            {/* <Option
          sx={{ border: "1px solid #1c1d1f" }}
          onClick={() => handleOptionClick(0)}
          // mt={2} p={2}
        >
          <CircleIcon filled={selectedOption === 0} />
          <ChoiceTypo variant="body1">In Person</ChoiceTypo>
        </Option>
        <Option
          sx={{ border: "1px solid #1c1d1f" }}
          onClick={() => handleOptionClick(1)}
          // mt={2} p={2}
        >
          <CircleIcon filled={selectedOption === 1} />
          <ChoiceTypo variant="body1">Live Online</ChoiceTypo>
        </Option>
        <Option
          sx={{ border: "1px solid #1c1d1f" }}
          onClick={() => handleOptionClick(2)}
          // mt={2} p={2}
        >
          <CircleIcon filled={selectedOption === 2} />
          <ChoiceTypo variant="body1">Pre-recorded Online</ChoiceTypo>
        </Option>
        <Option
          sx={{ border: "1px solid #1c1d1f" }}
          onClick={() => handleOptionClick(3)}
          // mt={2} p={2}
        >
          <CircleIcon filled={selectedOption === 3} />
          <ChoiceTypo variant="body1">Other</ChoiceTypo>
        </Option> */}
            <StepTwo />
          </Box>
        </Box>
      )}
    </>
  );
};

export default Steps;
