import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import Router from "./Router/router";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./Scroll/scrollToTop";

function App() {

  
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Router />
      </BrowserRouter>
    </>
  );
}

export default App;
