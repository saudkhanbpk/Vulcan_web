import { Navigate, Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { chooseModalLogin } from "../feature/Auth/authSlice.js";
import useAuthentication from "../components/Header/onAuthStateChange.js";
import { Box, CircularProgress } from "@mui/material";

export const PrivateOutlet = (props) => {
  const dispatch = useDispatch();
  const { children } = props;
  const { user, loading } = useAuthentication(); // Get the user and loading state from the hook

  if (loading) {
    // You can show a loading spinner here while waiting for the authentication state to be determined
    return (
      <Box sx={{ display: "flex", height:"100vh", justifyContent:"center", alignItems:"center" }}>
        <CircularProgress />
      </Box>
    );
  }

  if (!user) {
    dispatch(chooseModalLogin());
    // Render the modal here
    return <Navigate to="/" />;
  } else {
    // Render the children and Outlet
    return (
      <>
        {children}
        <Outlet />
      </>
    );
  }
};
