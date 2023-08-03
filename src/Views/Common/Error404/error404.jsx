import React from "react";
import { styled } from "@mui/system";
import { Typography, Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ErrorContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
}));

const ErrorCode = styled(Typography)(({ theme }) => ({
  fontSize: "6rem",
  color: "#0000FF",
}));

const ErrorMessage = styled(Typography)(({ theme }) => ({
  fontSize: "1.5rem",
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(2),
}));

const HomeButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  "&:hover": {
    backgroundColor: "#0000FF",
  },
}));

const Error404 = () => {
  const navigate = useNavigate();
  return (
    <ErrorContainer>
      <ErrorCode variant="h1">404</ErrorCode>
      <ErrorMessage variant="body1">
        Oops! The page you're looking for does not exist.
      </ErrorMessage>
      <HomeButton variant="contained" onClick={() => navigate("/")}>
        Go to Home
      </HomeButton>
    </ErrorContainer>
  );
};

export default Error404;
