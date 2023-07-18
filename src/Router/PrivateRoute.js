import { Navigate, Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { chooseModalLogin } from "../feature/Auth/authSlice.js";
import useAuthentication from "../components/Header/onAuthStateChange.js";
import { Box, CircularProgress } from "@mui/material";

export const PrivateOutlet = (props) => {
  const dispatch = useDispatch();
  const { children } = props;
  const { user, loading } = useAuthentication();

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (!user) {
    dispatch(chooseModalLogin());
    return <Navigate to="/" />;
  } else {
    return (
      <>
        {children}
        <Outlet />
      </>
    );
  }
};
