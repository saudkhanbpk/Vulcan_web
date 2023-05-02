import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Router from './Routing/Router';
import { BrowserRouter } from 'react-router-dom';
import BecomeEducator from './components/BecomeEducator/BecomeEducator';



function App() {
  return (
    <div >
      <BrowserRouter>
      <Header />
    {/* <Router/>  
    <Footer/>   */}
    <BecomeEducator/>
      </BrowserRouter>
    </div>
  );
}

export default App;
