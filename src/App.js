import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import Footer from "./components/Footer/footer";
import Router from "./Router/router";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./Scroll/scrollToTop";
import Navbar from "./components/Header/navbar";
import Privacy from "./components/Privacy/privacy";

function App() {
  return (
    <>
    <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Router />
        <Footer />
      </BrowserRouter>
    </>
  
  );
}

export default App;
