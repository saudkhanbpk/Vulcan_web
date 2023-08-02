import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./Infrastructure/scrollToTop";
import { AuthProvider } from "./Infrastructure/authContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import Router from "./Infrastructure/Router/router";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <ScrollToTop/>
          <Router/>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
