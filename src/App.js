import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import Router from "./Router/router";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./Scroll/scrollToTop";
import useAuthentication from "./components/Header/onAuthStateChange";

function App() {

  // const {  loading } = useAuthentication();
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
     {/* {loading ? <h1> Loading ...</h1> : <Router />} */}
     <Router />
      </BrowserRouter>
    </>
  );
}

export default App;
