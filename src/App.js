import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./Infrastructure/Helper/scrollToTop";
import { AuthProvider } from "./Infrastructure/States/authContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Router from "./Infrastructure/Router/router";
import { useEffect } from "react";
import { fetchUserData } from "./Infrastructure/States/userDataSlice";
import { useDispatch } from "react-redux";
import { getAuth } from "firebase/auth";

function App() {
  const auth = getAuth();
  const uid = auth?.currentUser?.uid;
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchUserData(uid));
  }, [dispatch, uid]);
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <ScrollToTop />
          <Router />
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
