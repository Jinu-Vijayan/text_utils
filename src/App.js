import logo from './logo.svg';
import './App.css';
import LandingScreen from './screens/LandingScreen';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppTemplate from './components/AppTemplate';
import AboutUs from './screens/AboutUs'
import Contact from './screens/Contact'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<AppTemplate/>} >
          <Route path='' element = {<LandingScreen/>} />
          <Route path='about' element = {<AboutUs/>}/>
          <Route path='contact' element = {<Contact/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
