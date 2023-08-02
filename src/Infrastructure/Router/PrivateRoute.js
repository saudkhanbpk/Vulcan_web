import { Navigate, Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  chooseModalEmailVerify,
  chooseModalLogin,
} from "../States/authModalsSlice";
import useAuthentication from "../States/onAuthStateChange";
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
  } else if (!user?.emailVerified) {
    dispatch(chooseModalEmailVerify());
  } else {
    return (
      <>
        {children}
        <Outlet />
      </>
    );
  }
};
