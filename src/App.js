import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import Footer from "./components/Footer/footer";
import Router from "./Router/router";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./Scroll/scrollToTop";
import Navbar from "./components/Header/navbar";

function App() {
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Router />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
