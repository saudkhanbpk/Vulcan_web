import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import Router from "./Router/router";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./Scroll/scrollToTop";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  console.log('App .js')
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
