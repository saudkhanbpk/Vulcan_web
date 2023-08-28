// import React from "react";
// import {
//   Box,
//   Typography,
//   FormControlLabel,
//   FormGroup,
//   Checkbox,
// } from "@mui/material";
// import { styled } from "@mui/system";
// import Grid from "@mui/material/Unstable_Grid2/Grid2";
// import { useDispatch, useSelector } from "react-redux";
// import { eduRegSteps } from "../../../../Infrastructure/States/educatorStepsSlice";

// function QuestionOne() {
//   const step3Data = useSelector((state) => state.educatorSteps.stepThreeData);
//   const dispatch = useDispatch();

//   const options = [
//     { id: 0, text: "Link 1" },
//     { id: 1, text: "Link 2" },
//     { id: 2, text: "Link 3" },
//   ];

//   const handleOptionChange = (e, optionValue) => {
//     dispatch(eduRegSteps({ optionValue, step: "3" }));
//   };

//   const ChoiceTypo = styled(Typography)(({ theme }) => ({
//     fontWeight: 700,
//     lineHeight: 1.2,
//     letterSpacing: "-.02rem",
//     fontSize: "16px",
//   }));

//   return (
//     <Box sx={{ height: "100vh" }}>
//       <Box sx={{ height: { lg: "100px", md: "100px" } }}>
//         <Typography variant="h6" textAlign={"center"} pb={2}>
//           Have you taught on any teaching platforms? (Udemy, Skillshare, Wyzant,
//           etc)
//         </Typography>
//       </Box>
//       <Grid
//         container
//         display={"flex"}
//         alignItems={"center"}
//         justifyContent="center"
//       >
//         <Grid lg={12} md={12} sm={12} xs={12}>
//           <FormGroup>
//             {options.map((option) => (
//               <FormControlLabel
//                 key={option.id}
//                 control={
//                   <Checkbox
//                     checked={step3Data.includes(option.text.toString())}
//                     onChange={(e) =>
//                       handleOptionChange(e, option.text.toString())
//                     }
//                     value={option.text.toString()}
//                     sx={{
//                       "& .Mui-checked": {
//                         color: "#1c1d1f",
//                       },
//                     }}
//                     color="primary"
//                   />
//                 }
//                 label={<ChoiceTypo variant="body1">{option.text}</ChoiceTypo>}
//                 sx={{ border: "1px solid #1c1d1f", p: 1, m: "3px" }}
//               />
//             ))}
//           </FormGroup>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// }

// export default QuestionOne;

import React from "react";
import { Box, TextField } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { useFormik } from "formik";
import { QuestionFormBox, QuestionName } from "../../styles";

function QuestionOne() {
  const options = [
    { id: 0, text: "Link 1" },
    { id: 1, text: "Link 2" },
    { id: 2, text: "Link 3" },
  ];
  const formik = useFormik({});

  return (
    <Box sx={{ height: {
      lg:"100vh",
      md:"50vh",
      sm:"50vh",
      xs:"50vh",
    }}}>
      <Box sx={{ height: { lg: "100px", md: "100px" } }}>
        <QuestionName variant="h6" py={3}>
          Have you taught on any teaching platforms? (Udemy, Skillshare, Wyzant,
          etc)
        </QuestionName>
      </Box>
      <Grid
        container
        display={"flex"}
        alignItems={"center"}
        justifyContent="center"
      >
        <Grid lg={12} md={12} sm={12} xs={12}>
          <QuestionFormBox
            component="form"
            onSubmit={formik.handleSubmit}
            noValidate
          >
            {options.map((option) => (
              <TextField
                label={option.text}
                variant="outlined"
                placeholder="Paste your link"
                onChange={formik.handleChange}
                sx={{ m: "3px" }}
                InputLabelProps={{
                  style: { fontSize: 16 },
                }}
                InputProps={{
                  style: { fontSize: 18 },
                }}
                fullWidth
              />
            ))}
          </QuestionFormBox>
        </Grid>
      </Grid>
    </Box>
  );
}

export default QuestionOne;
