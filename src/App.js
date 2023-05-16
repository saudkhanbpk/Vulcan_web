import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Router from "./Routing/Router";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./scroll/ScrollToTop";
 

 
function App() {
  
  return (
    <div>
      <BrowserRouter>
      <ScrollToTop />
        <Header />
        <Router />
        <Footer />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
