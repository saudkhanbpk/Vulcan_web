import React from "react";
import { Box, Typography, TextField } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { useFormik } from "formik";
import { QuestionFormBox } from "../../styles";
function QuestionTwo() {
  const options = [
    { id: 0, text: "Link 1" },
    { id: 1, text: "Link 2" },
    { id: 2, text: "Link 3" },
  ];

  const formik = useFormik({});

  return (
    <Box sx={{ height: "100vh" }}>
      <Box sx={{ height: { lg: "100px", md: "100px" } }} >
        <Typography variant="h6" py={3}>
          Do you have any social media where you post educational content?
          (Youtube, Tik Tok, Twitter, etc)
        </Typography>
      </Box>
      <Grid container>
        <Grid lg={12} md={12} sm={12} xs={12}>
          <QuestionFormBox component="form" onSubmit={formik.handleSubmit} noValidate>
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

export default QuestionTwo;
