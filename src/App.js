import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Header from './components/header/Header';
// import Footer from './components/footer/Footer';
// import Login from './components/auth/Login';
// import SignUp from './components/auth/SignUp';
// import AuthDetails from './components/auth/AuthDetails';
import HomeScreen from './components/Home/homeScreen/HomeScreen';
import CourcesScreen from './components/coursesScreen/CourcesScreen';

function App() {
  return (
    <div >
      <Header />
      {/* <Login/>
      <SignUp/>
      <AuthDetails/> */}
      {/* <HomeScreen/> */}
      <CourcesScreen/>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
