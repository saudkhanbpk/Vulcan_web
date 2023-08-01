import Router from "./Router/router";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./Scroll/scrollToTop";
import { AuthProvider } from "./contexts/AuthContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

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
