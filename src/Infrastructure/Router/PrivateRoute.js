import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  chooseModalEmailVerify,
  chooseModalLogin,
  setSelectedRoute,
} from "../States/authModalsSlice";
import useAuthentication from "../States/onAuthStateChange";
import { Box, CircularProgress } from "@mui/material";
import { useLocation } from 'react-router-dom';

export const PrivateOutlet = (props) => {
  const dispatch = useDispatch();
  const { children } = props;
  const { user, loading } = useAuthentication();
  const navigate = useNavigate();
  const location = useLocation();
  const style = {
    display: "flex",
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
  };

  if (loading) {
    return (
      <Box sx={style}>
        <CircularProgress />
      </Box>
    );
  }
  
  if (!user) {
    dispatch(chooseModalLogin());
    return navigate("/");
  } else if (!user.emailVerified) {
    dispatch(setSelectedRoute(location.pathname));
    dispatch(chooseModalEmailVerify());
    return navigate("/");  
  } else {
    return (
      <>
        {children}
        <Outlet />
      </>
    );
  }
};
