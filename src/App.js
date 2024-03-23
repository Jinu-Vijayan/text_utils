import logo from './logo.svg';
import './App.css';
import LandingScreen from './screens/LandingScreen';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppTemplate from './components/AppTemplate';
import AboutUs from './screens/AboutUs'
import Contact from './screens/Contact'
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path='/' element = {<AppTemplate/>} >
    //       <Route path='' element = {<LandingScreen/>} />
    //       <Route path='about' element = {<AboutUs/>}/>
    //       <Route path='contact' element = {<Contact/>} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
    // <div>
    //     {/* <Navbar/> */}
    //     {/* <Outlet/> */}
        
    // </div>
    <LandingScreen/>
  );
}

export default App;
