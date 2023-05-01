import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Router from './Routing/Router';



import HomeScreen from './components/Home/homeScreen/HomeScreen';
import CourcesScreen from './components/coursesScreen/CourcesScreen';

function App() {
  return (
    <div >
      <Header />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
