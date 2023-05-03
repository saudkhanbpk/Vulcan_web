import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Router from './Routing/Router';
import { BrowserRouter } from 'react-router-dom';



function App() {
  return (
    <div >
      <BrowserRouter>
        <Header />
        <Router />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
