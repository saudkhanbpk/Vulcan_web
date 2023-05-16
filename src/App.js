import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import Router from "./Routing/router";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./Scroll/scrollToTop";
 

 
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
