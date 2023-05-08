import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Router from "./Routing/Router";
import { BrowserRouter } from "react-router-dom";
import EducatorFaq from "./components/howItWorks/faq/EducatorFaq";

 
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Router />
        {/* <EducatorFaq/> */}
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
