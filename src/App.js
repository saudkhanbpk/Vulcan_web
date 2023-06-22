import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import Footer from "./components/Footer/footer";
import Router from "./Router/router";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./Scroll/scrollToTop";
import Navbar from "./components/Header/navbar";
import Auth from "./components/Auth/auth";
import EducatorAccountMainPage from "./components/Auth/EducatorAccountMainPage/educatorAccountMainPage";
import MultipleChoiceComponent from "./extra";

function App() {
  return (
    <>
    <BrowserRouter>
        <ScrollToTop />
        <Router />
        {/* <EducatorAccountMainPage/> */}
        {/* <MultipleChoiceComponent/> */}
      </BrowserRouter>
    </>
  
  );
}

export default App;
