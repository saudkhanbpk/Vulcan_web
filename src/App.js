import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import Router from "./Router/router";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./Scroll/scrollToTop";
import Extra from "./extra/extra";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Router />
      </BrowserRouter>
      {/* <Extra/> */}
    </>
  );
}

export default App;
